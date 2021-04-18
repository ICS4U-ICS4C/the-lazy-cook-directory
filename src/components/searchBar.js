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
    LogBox,
    TouchableOpacity} from 'react-native';
import IngredientItem from './ingredientItem';
import theRecipes from '../db/firebaseConfig';
import 'firebase/firestore';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import sResults from '../screens/sResults';
// {the old code is at the bottom}

/**
 * this is the code dedicated to coding the functinality and 
 * design of the selective search bar
 *  
 */

//   if (!loaded) {
//     return null;
//   }

LogBox.ignoreLogs(['Setting a timer']);
//for ignoring warning message in console

 const Stack = createStackNavigator();

// function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//         name = "homescreen"
//         component= {Home}/>
//         <Stack.Screen
//         name = "resultsscreen"
//         component= {sResults}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

/**
 * this is the code dedicated to coding the functinality and 
 * design of the selective search bar
 *  
 */

//   if (!loaded) {
//     return null;
//   }

export default function SearchBar({navigation}){
    //has array of items, ingredients is the array and setingredients is equal to usestate in which we can change the array
    const [ingredients,setingredients] = useState([
        {text: "milk", key:"1"}
    ]);
    //recipes that will be displayed
    const [recipes,setrecipes] = useState([]);
    //recipes from database
    const [firestoredb, setfirestoredb] = useState([]);
    //TEMPORARY LIST FOR UPDATED RECIPES
    const [updatedl, setupdatedl] = useState([]);
    //final array that contains the recipes!
    const[finalrecipes,setfinalrecipes] = useState([]);

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
    const search = (ingredients,recipes,firestoredb,updatedl,finalrecipes) =>{
        //navigation.navigate("sResults")
        let userInputArray = []
        for (let i of ingredients){
            userInputArray.push(i.text)
        }
        if(userInputArray.length == 0){
            Alert.alert("please enter your ingredients")
        }
        const firestore = firebase.firestore();
        let reciplelist = []; //list that possible recipes will be pushed to
        let updatedlist = []; // list of the recipes that will be outputed
        let dbingredients = [];
        var count = {};
        let finalarray = [];
        const col = firestore.collection("Recipes")
        for(let i in userInputArray){
            const query =col.where('ingredients','array-contains', userInputArray[i])
            query.get().then(snapshot =>{
                snapshot.docs.forEach(doc=>{
                    reciplelist.push(doc.data().name)
                    setrecipes((prevrecipe)=>{
                        return reciplelist
                    })
                })
            })
        } 
        recipes.forEach(function(i) { count[i] = (count[i]||0) + 1;}); 
        for (let i in count){
            if(count[i] == userInputArray.length){
                updatedlist.push(i);
                setupdatedl((prevrecipe)=>{
                    return updatedlist
                })
            }
        }
        for(let i in updatedlist){
            const newquery = col.where('name', '==', updatedlist[i])
            newquery.get().then(snapshot=>{
                snapshot.docs.forEach(doc=>{
                    dbingredients.push(doc.data().ingredients)
                    setfirestoredb((previngredients)=>{
                        return dbingredients
                    })
                })
            })
         
        }
        for(let i in updatedl){
            for(let j in firestoredb){
                if(userInputArray.length <= firestoredb[j].length){
                    finalarray.push(updatedl[i])
                }
            }
        }
        if(finalarray && finalarray.length==0){
            Alert.alert("sorry no matches :(")
        } else{
            setfinalrecipes((prev)=>{
                return finalarray
            })
        }
    }
    return(
                 <View style={styles.container}>
                     <View>
                         <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "
                             onChangeText={changeHandler}/> 
                              {/* <Pressable style={styles.button} onPress={()=> submit(text)}>
                                 <Text style={styles.text}>Add</Text> 
                             </Pressable> */}
                             <TouchableOpacity style = {styles.button} onPress={()=> submit(text)}>
                                 <Text style = {styles.text}> Add Ingredient(s)</Text>
                             </TouchableOpacity>
        
                             <TouchableOpacity style = {styles.button} onPress={()=> search(ingredients,recipes,firestoredb,updatedl,finalrecipes)}>
                                 <Text style = {styles.text}> Search</Text>
                             </TouchableOpacity>
        
                             {/* <Pressable style={styles.buttonSearch}  onPress = {()=> search(ingredients,recipes,firestoredb)}>
                                 <Text style={styles.textSearch}>Search</Text>
                             </Pressable> */}
                             <Button style={styles.buttonSearch} title = 'navigator' onPress = {()=> navigation.navigate('sResults')}/>
                              
        
            
                         <View style = {styles.list}>
                         <FlatList
                             horizontal = {true}
                             data = {ingredients}
                             renderItem ={({item}) => (
                                 <IngredientItem item = {item} pressDelete ={pressDelete}/>
                             )}
                         />
           <FlatList
                    
                    data = {finalrecipes}
                    renderItem ={({item}) => (
                        <Text>{item}</Text>
                    )}
                /> 
                        
        
                     
                     </View>
                     </View>
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
