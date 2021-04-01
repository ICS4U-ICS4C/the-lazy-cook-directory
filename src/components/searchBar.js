import React from 'react';
import {View, TextInput, StyleSheet, StatusBar} from 'react-native';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.container} placeholder = "Insert Ingredients here... "/>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 18,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20

    },
    searchInput:{
        width: '100%',
        height: '100%',
        padding: 1,
        fontSize: 25
    }
})

export default SearchBar;