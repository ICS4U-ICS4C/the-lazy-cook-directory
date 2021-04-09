import React, {Component, useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, StatusBar, Text, Button, ScrollView} from 'react-native';
import ingredientItem from './ingredientItems';
import theRecipes from '../db/firebaseConfig';


//idea: 1. user write their ingredient, when clicking enter it stores it in a list
//2. display this list under the search bar, style it, make it horizontal

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "/>
        </View>
    )
}

// export default function SearchBar() {
//     const [ingredients,setIngredients] = useState([{ingredient: 'milk', key: '1'}]); //this should show up
//       return(
//           <View style={styles.container}>
//               <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "/>
//               <View style = {styles.list}>
//               <FlatList
//               data = {ingredients}
//               renderItem={({item})=> (
//                 <ingredientItem item ={item}/> 
//               )}
//               />
//               </View>
//           </View>
//       )
// }
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
        width: '80%',
        color:'#2e2e2e'
    }
})