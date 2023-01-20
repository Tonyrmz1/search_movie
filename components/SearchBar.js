import { TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {COLORS, FONTS} from '../globals/GlobalStyles';


const SearchBar = (props) => {

  const [searchText, setSearchText] = useState('');



  return (
   
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputTextSearch}
        placeholder='Enter the title' 
        placeholderTextColor={COLORS.secondaryColor}
        onChangeText={(searchText) => {setSearchText(searchText);props.searchMovie(searchText)}}>
          {searchText}
      </TextInput>
      <TouchableOpacity style={styles.clearButton}
        color={COLORS.secondaryColor}
        onPress={() => {setSearchText('');props.searchMovie('');}}>
        {searchText!='' && <Image
            style={styles.clearIcon}
            source={require('../assets/close-button.png')}>
          </Image>}
      </TouchableOpacity>
    </View>

  )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderColor: COLORS.secondaryColor,
        borderWidth: 2,
        height: 45,
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 5,
    },
    inputTextSearch:{
      width:'95%',
      fontSize: FONTS.medium,
      color: COLORS.primaryColor,
    },
    clearButton:{
      height:30,
      width:30,
    },
    clearIcon:{
      width:20,
      height:20,
    }
});

export default SearchBar;