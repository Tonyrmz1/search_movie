import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import {COLORS, FONTS, TEXTS} from '../globals/GlobalStyles';
import InfoSection from '../components/InfoSection';

const InfoScreen = ({route}) => {

  const BASE_URI_BACK = 'http://image.tmdb.org/t/p/w780/';
  const BASE_URI_POSTER = 'http://image.tmdb.org/t/p/w342/';
  const API_KEY = '?api_key=d2e513bb283160c7562ebcc818824a11';

  const {item} = route.params;
  const[expanded, setExpanded] = useState(false);

  const posterView = 
    <Image
      style={styles.movieImageLogo}
      source={{
        uri: BASE_URI_POSTER+item.poster_path+API_KEY,
      }}>
    </Image>;

  const posterViewNotAvailable = 
    <Image
      style={styles.movieImageLogo}
      source={require('../assets/no-image-icon-15.png')}>
    </Image>
  
  const backdropViewWithPosterBlured =  
    <ImageBackground
      style={styles.movieImageBackground}
      blurRadius={5}
      source={{
        uri: BASE_URI_BACK+item.backdrop_path+API_KEY,
      }}>
        <View style={styles.overlay}>
          {item.poster_path!=null ? posterView : posterViewNotAvailable}
        </View>
    </ImageBackground>;

  const backdropNotAvailable =
    <ImageBackground style={styles.movieImageBackground}
      resizeMode='contain'
      source={require('../assets/no-image-icon-15.png')}>
    </ImageBackground>;


  const checkOverviewSize = () => { 
    return item.overview.length>82 ? (expanded ? 'Read less' : 'Read more') : ''
  }

  return (
    <View style={styles.container}>
            
      {(item.backdrop_path!=null) ? backdropViewWithPosterBlured : backdropNotAvailable}
      
      
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.lineSeparator}></View>
      <View style={styles.dataContainer}></View>

      <ScrollView showsVerticalScrollIndicator={false} 
        style={styles.scrollStyle}>

        <Text style={styles.sectionTitle}>Overview</Text>
        <Text id='overviewContainer' 
          numberOfLines={expanded?0:2} 
          style={styles.sectionTextContent}>{item.overview!='' ? item.overview : TEXTS.notAvailable}
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}  
          color={COLORS.secondaryColor} 
          style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>{checkOverviewSize()}</Text>
        </TouchableOpacity>
        <View style={styles.lineSeparator}></View>
        
        <InfoSection title={'Release Date'} content={item.release_date}/>
        <InfoSection title={'Language'} content={item.original_language.toUpperCase()}/>
        <InfoSection title={'Popularity'} content={item.popularity}/>
        <InfoSection title={'Rating'} content={item.vote_average}/>
        <InfoSection title={'Votes'} content={item.vote_count}/>

      </ScrollView>
    
      
      

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.backgroundColor,
    alignItems: 'center',
    flex:1,
  },
  movieImageBackground:{
    height: 280,
    width: '100%',
  },
  overlay:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },  
  movieImageLogo:{
    height: 220,
    width: 150,
    borderRadius: 8,
  },
  scrollStyle:{
    width: '100%',
    paddingHorizontal: 5
  },
  title:{
    marginTop: 10,
    fontSize: FONTS.big,
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
    maxWidth: 350,
    textAlign: 'center'

  },
  lineSeparator:{
    height: 1,
    width: '95%',
    marginHorizontal: 4,
    marginTop: 4,
    backgroundColor: COLORS.secondaryColor
  },
  dataContainer: {
    flex:1,
    backgroundColor: COLORS.backgroundColor,
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal:  10,
  },
  sectionTitle: {
    color: COLORS.secondaryColor,
    fontSize: FONTS.medium,
    fontWeight: 'bold',
    marginTop: 10
  },
  sectionTextContent:{
    color: COLORS.primaryColor,
    fontSize: FONTS.medium,
  },
  readMoreButton:{
    width: '100%',
    height: 30,
    justifyContent:'center',
    alignItems: 'center',
  },
  readMoreText:{
    color: COLORS.secondaryColor,
    fontSize: FONTS.small,
  },

})
export default InfoScreen