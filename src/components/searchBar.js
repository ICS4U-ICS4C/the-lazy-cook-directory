import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
    return(
        <View>
            <TextInput placeholder = "Insert Ingredients here... "/>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        hieght: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 10

    },
    searchInput:{
        width: '100%',
        hieght: '100%',
        paddingLeft: 8,
        fontSize: 14
    }
})

export default SearchBar;