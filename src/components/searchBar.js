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
    Modal,
    TouchableOpacity} from 'react-native';
import IngredientItem from './ingredientItem';
import theRecipes from '../db/firebaseConfig';
import 'firebase/firestore';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation, useRoute} from '@react-navigation/native';
import Home from '../screens/Home';
import sResults from '../screens/sResults';

// this code is for the search bar function and styling

LogBox.ignoreLogs(['Setting a timer']);
//for ignoring warning message in console

// const Stack = createStackNavigator();

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
export default function SearchBar(){
    //has array of items, ingredients is the array and setingredients is equal to usestate in which we can change the array
    const [ingredients,setingredients] = useState([
        {text: "milk", key:"1"}
    ]);
    //database recipes
    const [recipes,setrecipes] = useState([]);
    
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
    const search = (ingredients,recipes) =>{
        //navigation.navigate("sResults")
        let userInputArray = []
        for (let i of ingredients){
            userInputArray.push(i.text)
        }
        const firestore = firebase.firestore();
        let reciplelist = []; //list that possible recipes will be pushed to
        let updatedlist = []; // list of the recipes that will be outputed
        let dbingredients = [];
        var count = {};
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
        //let what = recipes[0]
        recipes.forEach(function(i) { count[i] = (count[i]||0) + 1;}); 
        for (let i in count){
            if(count[i] == userInputArray.length){
                updatedlist.push(i);
            }
        }
        for(let i in updatedlist){
            const newquery = col.where('name', '==', updatedlist[i])
            newquery.get().then(snapshot=>{
                snapshot.docs.forEach(doc=>{
                    dbingredients.push(doc.data().ingredients)
                    console.log(dbingredients)
                })
            })
        }
        console.log(dbingredients); 
    }
    const navigation = useNavigation(); 
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "
                    onChangeText={changeHandler}/> 

                     <TouchableOpacity style={styles.button} onPress={()=> submit(text)}>
                        <Text style={styles.text}>Add</Text> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress= {()=> search(ingredients,recipes)}>
                        <Text style={styles.text}>Search</Text> 
                    </TouchableOpacity>

                    <Modal visible = {modalOpen} animationType='slide'>
                        <View style = {styles.ModalContent}>
                            <Text style={styles.Title}> Hai Amat and Abeerus-sama </Text>
                                <Text style = {styles.SubText}> We can put our recipe results here </Text>
                            <TouchableOpacity style = {{...styles.modalToggle}} onPress = {() => setModalOpen(false)}>
                                <Text style = {styles.testerText}> Back to Home </Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>


                        <TouchableOpacity style = {styles.modalToggle} onPress = {() => setModalOpen(true)}>
                            <Text style = {styles.testerText}> True Search </Text>
                        </TouchableOpacity>

                    <Button onPress={() => navigation.navigate('sResults')} title="Search" />           

    
                <View style = {styles.list}>
                <FlatList
                    horizontal = {true}
                    data = {ingredients}
                    renderItem ={({item}) => (
                        <IngredientItem item = {item} pressDelete ={pressDelete}/>
                    )}
                />
                {/* <FlatList
                    
                    data = {recipes}
                    renderItem ={({item}) => (
                        <Text>{item}</Text>
                    )}
                /> */}
                

             
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
        marginBottom: 10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.75,
        color: 'white',
      },
      textSearch:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      testerText:{
          padding:10,
          backgroundColor: 'black',
          color: 'white'
      },
      Title:{
        fontSize: 35,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        borderColor: '#f5f3f5',
        borderWidth: 8,
        borderRadius: 10,
      },
      SubText:{
        fontSize: 20,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center'
      },
      ModalContent:{
          marginTop: 25, 
          marginBottom: 0,
      },
      modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor: '#f3f3f3',
        padding:10,
        borderRadius: 5,
        alignSelf: 'center'

      },
      ModalClose:{
          flex:1,
      }
      
})