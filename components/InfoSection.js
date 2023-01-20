import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {COLORS, FONTS, TEXTS} from '../globals/GlobalStyles';


const InfoSection = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>{props.title}</Text>
        <Text style={styles.sectionTextContent}>{props.content!='' ? props.content : TEXTS.notAvailable}</Text>
        <View style={styles.lineSeparator}></View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        
    },  
    sectionTitle: {
        color: COLORS.secondaryColor,
        fontSize: FONTS.medium,
        fontWeight: 'bold',
        marginTop: 10,
        paddingLeft: 5
      },
      sectionTextContent:{
        paddingLeft: 10,
        color: COLORS.primaryColor,
        fontSize: FONTS.medium,
      },
      lineSeparator:{
        height: 1,
        width: '95%',
        marginHorizontal: 4,
        marginTop: 4,
        backgroundColor: COLORS.secondaryColor
      },
})

export default InfoSection