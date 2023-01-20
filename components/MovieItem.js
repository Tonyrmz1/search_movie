import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../globals/GlobalStyles';
import InfoSection from './InfoSection';



const MovieItem = (props) => {

    const BASE_URI = 'http://image.tmdb.org/t/p/w92/';
    const API_KEY = '?api_key=d2e513bb283160c7562ebcc818824a11';



    return (
        
        <TouchableOpacity onPress={() => {props.navigation.navigate('Info',{item: props.item})}} style={styles.container}>
            {props.item.poster_path!=null ?
            <Image
                style={styles.movieImage}
                source={{
                uri: BASE_URI+props.item.poster_path+API_KEY,
                }}>
            </Image>
            : <Image
                style={styles.movieImage}
                source={require('../assets/no-image-icon-15.png')}>
            </Image>}
            
            <View style={styles.infoContainer}>  
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.infoText}>{'Lang: '+props.item.original_language.toUpperCase()}</Text>
                <Text style={styles.infoText}>{'Rating: '+props.item.vote_average}</Text>

                

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.secondaryColor,
        flexDirection: 'row',
        marginHorizontal: 10
        
        
    },
    title:{
        fontSize: FONTS.medium,
        paddingHorizontal: 10,
        color: COLORS.secondaryColor,
        fontWeight: 'bold'
    },
    infoText:{
        fontSize: FONTS.medium,
        paddingHorizontal: 10,
        color: COLORS.primaryColor,
    },
    movieImage:{
        height: 80,
        width: 50,
        borderRadius: 10
    },
    infoContainer:{
        flex:1
    }

})

export default MovieItem