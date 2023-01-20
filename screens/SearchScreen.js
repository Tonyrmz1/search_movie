import { View, FlatList, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import SearchBar from '../components/SearchBar'
import {COLORS} from '../globals/GlobalStyles';
import MovieItem from '../components/MovieItem'



const SearchScreen = ({navigation}) => {

    const [response, setResponse] = useState([]);
    const [queryText, setQueryText] = useState('');
    const [page,setPage] = useState(1);
    const refPage = useRef(1);
    const refList = useRef(null);
    

    const URI = 'https://api.themoviedb.org/3/search/movie?api_key=d2e513bb283160c7562ebcc818824a11&query=';
    

    const searchMovie = (queryNewText,newPage=1) => {
        const queryPage = '&page='+newPage;
        fetch(URI+queryNewText+queryPage)
            .then((response) => response.json())
            .then((responseJson) => {
                if(newPage==1){
                    setResponse(responseJson.results);
                    refPage.current=1;
                    setPage(refPage.current);
                    refList.current.scrollToOffset({animated: true, offset: 0})
                }
                else{
                    setResponse(response.concat(responseJson.results));
                }

                setQueryText(queryNewText);
            })
            .catch((error) => {
                console.error(error);
            });
        
    }

    const onEndReached = () => {
        setPage(refPage.current++);
        searchMovie(queryText,refPage.current);
    }


    return (
        <View style={styles.container}>
        
            <SearchBar searchMovie={searchMovie}></SearchBar>
            <FlatList
                ref={refList}
                data={response}
                renderItem={({item}) => <MovieItem navigation={navigation} item={item}></MovieItem>}
                keyExtractor={(item,index) => item.id.toString()+index}
                onEndReached={() => onEndReached()}>    
            </FlatList>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.backgroundColor
    }
})

export default SearchScreen