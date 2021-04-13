import React from 'react';
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';

export default function IngredientItem({item, pressDelete}){
    return(
        //passes item key to the pressDelete function 
        <TouchableOpacity onPress={() => pressDelete(item.key)}>
            <Text style = {styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
       
        padding: 5,
        marginTop: 2,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        width: '15%',
        
        
    }
})