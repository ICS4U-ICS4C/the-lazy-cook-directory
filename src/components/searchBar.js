import { Navigation } from '@material-ui/icons';
import React, {Component, useEffect, useState} from 'react';
import {View,
    Pressable,
    TextInput,
    StyleSheet,
    StatusBar,
    FlatList,
    Text,
    Button,
    ScrollView,
    Alert,
    LogBox} from 'react-native';
import theRecipes from '../db/firebaseConfig';
import IngredientItem from './ingredientItem';
import 'firebase/firestore';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigation from '../navconfig.js/navigation';
//import {listt} from './testRecipDb';

//for ignoring warning message in console
LogBox.ignoreLogs(['Setting a timer']);


export default function SearchBar({Navigation}){
    //has array of items, ingredients is the array and setingredients is equal to usestate in which we can change the array
    const [ingredients,setingredients] = useState([
        {text: "milk", key:"1"}
    ]);
    
    //when cliking the ingredients, function recieve key, filter item with that key out of array and return new array
    const pressDelete = (key) =>{
        setingredients((priorIngredients) =>{
            return priorIngredients.filter(ingredient => ingredient.key != key);
        })
    }
    //keeping track of what user types in a string
    const [text,setText] = useState('');
    //when called takes in value that user typed and sets it to that value
    const changeHandler = (val) =>{
        setText(val);
    }
    //takes in text to update state/ingredient and adds new ingredient to screen
    const submit = (text) =>{
        //checks if an ingredient is written, if it isnt then an alert pops up
        if(text.length >1){
        setingredients((priorIngredients) =>{
            return [
                {text: text.toLowerCase(), key: Math.random().toString()},
                /// assigned key for each new ingredient
                ...priorIngredients     
            ];   
        })
    }else{
        Alert.alert("Type in your ingredient")
        {text:'ok'}
        }
    }
    //for searching ingredients, how to access each ingredient. store this
    //value into another array which we will use to search
    const search = (ingredients) =>{
        navigation.push("sResults")
        let userInputArray = []
        for (let i of ingredients){
            userInputArray.push(i.text)
        }
        //have to fix it and make sure that it only gets recipes with ingredients we want
        //instead of console.log, show it on recipe results page
        //have to navigate to results page (not done)
        const firestore = firebase.firestore();
        const col = firestore.collection('Recipes');
        let reciplelist = [];
        let updatedlist = [];
        var  count = {}; 
        const promises = [];
        for (let i =0; i< userInputArray.length; i++){
            let promise = firestore.collection('Recipes').where('ingredients','array-contains', userInputArray[i]).get()
                .then(snapshot=>{
                    if(snapshot.empty){
                        Alert.alert("No matching recipes, time to go shopping")
                        {text: 'ok'}
                    }
                    snapshot.docs.forEach(doc =>{
                        reciplelist.push(doc.data().name)
                        //console.log(reciplelist);
                    });
                    return;
                })
            promises.push(promise);
        } //end of foor loop
    
        Promise.all(promises).then(() =>{
            reciplelist.forEach(function(i) { count[i] = (count[i]||0) + 1;}); 
            for (let i in count){
                if(count[i] <= userInputArray.length){
                    updatedlist.push(i);
                }
            }
           console.log(updatedlist);
        });
    }
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "
                    onChangeText={changeHandler}/>

                     <Pressable style={styles.button} onPress={()=> submit(text)}>
                        <Text style={styles.text}>Add</Text>
                    </Pressable>

                    <Pressable style={styles.buttonSearch}  onPress = {()=> search(ingredients)}>
                        <Text style={styles.textSearch}>Search</Text>
                    </Pressable>

    
                <View style = {styles.list}>
                <FlatList
                    horizontal = {true}
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

//added temporary styling for buttons, anyone can change them to how they like
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
        //flex: 1,
        marginTop: 15
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'black',
        borderStyle: 'dashed',
        borderColor: 'black',
        marginBottom: 10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      buttonSearch:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#8cbb6c',
        borderStyle: 'dashed',
        borderColor: 'black',
      },
      textSearch:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
})

