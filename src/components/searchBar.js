import React, {Component, useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, StatusBar, FlatList, Text, Button, ScrollView,Alert} from 'react-native';
import theRecipes from '../db/firebaseConfig';
import IngredientItem from './ingredientItem';


//idea: 1. user write their ingredient, when clicking enter it stores it in a list
//2. display this list under the search bar, style it, make it horizontal
/*
const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "/>
        </View>
    )
}
*/

export default function SearchBar(){
    //has array of items, ingredients is the array
    const [ingredients,setingredients] = useState([
        {}
    ]);
    
    //recieve key, filter item with that key out of array and return new array
    const pressDelete = (key) =>{
        setingredients((priorIngredients) =>{
            return priorIngredients.filter(ingredient => ingredient.key != key);
        })
    }
    //keeping track of what user types in a string
    const [text,setText] = useState('');
    //when called takes in value that user typed
    const changeHandler = (val) =>{
        setText(val);
    }
    //takes in text to update state/ingredient and adds new ingredient to screen
    const submit = (text) =>{

        if(text.length>3){

        setingredients((priorIngredients) =>{
            return [
                {text: text, key: Math.random().toString()},
                ...priorIngredients
            ];
        })
    }else{
        Alert.alert("Please type an ingredient")
        {text:'ok'}
    }
}
    return(
        <View style={styles.container}>
            <View>
                
                <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "
                    onChangeText={changeHandler}/>
                <Button onPress={()=> submit(text)} title='Add' color = 'green'/>

                <View style = {styles.list}>
                <FlatList
                    //horizontal = {true}
                    data = {ingredients}
                    renderItem ={({item}) => (
                        <IngredientItem item = {item} pressDelete ={pressDelete}/>
                    )}
                />
            </View>
            </View>
           
    </View>
    )
}

// const fbSbTesting = () => {

//     useEffect(() =>{
//         db.collection('Recipes')
//         .get()
//         .then(result=> result.docs)
//         .then(docs => docs.map(doc => ({
//             // id: doc.id, 
//             duration: doc.duration, 
//             ingredients: doc.created, 
//             name:doc.name, 
//             preparation: doc.preparation, 
//             quantity: doc.quantity, 
//             type: doc.type
//         })))

//     },[])
// }

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
        width: '100%',
        color:'#2e2e2e'
    },
    list:{
        marginTop: 15
    }
})