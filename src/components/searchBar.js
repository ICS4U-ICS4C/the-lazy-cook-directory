/* creating our search bar */
import React, {Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import {View, TextInput, StyleSheet, StatusBar, Text, Button, ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { color } from 'react-native-reanimated';
//import * as firebase from 'firebase';
//import "firebase/firestore";

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "/>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,


    },
    searchInput:{
        height: 45,
        borderColor: '#e4e6e3',
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        alignContent: 'center',
        width: '80%',
        color:'#e4e6e3'
    }
})

export default SearchBar;