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
            <TextInput style={styles.container} placeholder = "Insert Ingredients here... "/>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        height: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 18,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20

    },
    searchInput:{
        margin: 60,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: '#fff'
    }
})

export default SearchBar;