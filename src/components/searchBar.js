import { ContactPhoneOutlined, Navigation } from '@material-ui/icons';
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

// const Stack = createStackNavigator();

// const Screenssss =() =>{
//     return(
//       <NavigationContainer>
//         <Stack.Navigator>
//       <Stack.Screen name = "Home" component={Home}/>
//       <Stack.Screen name = "sResults" component = {sResults}/>
//       </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }

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

LogBox.ignoreLogs(['Setting a timer']);
//for ignoring warning message in console

//  const Stack = createStackNavigator();

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
    //recipes that user input
    const [recipes,setrecipes] = useState([]);

    //recipe ingredients from database
    const [firestoredb, setfirestoredb] = useState([]);
    
    //list for updated recipes
    const [updatedl, setupdatedl] = useState([]);
    //contains the final recipe names after removing duplicates, or those that dont match ingredients the we input
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
            //returning new text/ingrediets into ingredients array
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
        //for every item in ingredient, push that into userInputArray
        let userInputArray = []
        for (let i of ingredients){
            userInputArray.push(i.text)
        }
        //if userInputArray.length ==0 /or if empty then alert user
        if(userInputArray.length == 0){
            Alert.alert("please enter your ingredients")
        }
        //connection to firestore
        const firestore = firebase.firestore();
        let reciplelist = []; //list that possible recipes will be pushed to
        let updatedlist = []; // list of the recipes that will be outputed
        let dbingredients = [];
        var count = {};
        let finalarray = [];
        //perform firebase query
        const col = firestore.collection("Recipes")
        //for each item in userInputArray, check database for recipes that have that item, and store it into reciplelist
        for(let i in userInputArray){
            const query =col.where('ingredients','array-contains', userInputArray[i])
            query.get().then(snapshot =>{
                snapshot.docs.forEach(doc=>{
                    reciplelist.push(doc.data().name)
                    //put recipelist array into recipes array
                    setrecipes((priorrecipe)=>{
                        return reciplelist
                    })
                })
            })
        }
        let uniquechars = [...new Set(recipes)];
        setupdatedl(()=>{
            return uniquechars
        })
        // //count the number of duplicated recipe names in recipes array 
        // recipes.forEach(function(i) { count[i] = (count[i]||0) + 1;}); 
        // //for every object in count, check if the number of duplicate names == length of userInputarray
        // for (let i in count){
        //     if(count[i] <= userInputArray.length){
        //         updatedlist.push(i);
        //         //put updatedlist array into updatedl array
        //         setupdatedl((prevrecipe)=>{
        //             return updatedlist
        //         })  
        //     }
        // }
        //looping through every item in updatedlist and performing query to get ingredients of recipe names that match those in updatedlist
        for(let i in updatedlist){
            const newquery = col.where('name', '==', updatedlist[i])
            newquery.get().then(snapshot=>{
                snapshot.docs.forEach(doc=>{
                    dbingredients.push(doc.data().ingredients)
                    //putting dbingredients array into firestoredb array
                    setfirestoredb((previngredients)=>{
                        return dbingredients
                    })
                })
            })
         
        }
        //looping through every item in updatedl, then looping through every array inside firestoredb array
        // for(let i in updatedl){
            for(let j in firestoredb){
                //checking if userInputArray length is less and or requal to the length of each array of ingredients in firestoredb array
                if(firestoredb[j].length <= userInputArray.length){
                    //if it is then push the name of the recipe name that it was looping on
                    finalarray.push(firestoredb[j])
                    
                }
            }
        // }
        setfinalrecipes(()=>{
            return finalarray
        })
        if(finalrecipes.length == 0){
            Alert.alert("no matching recipes, please input more ingredients")
        }
        
        checks if finalarray which has the recipe names is empty, if it is then alert
        if(finalarray && finalarray.length==0){
            Alert.alert("sorry no matches :(")
            //if it is not empty then put it in finalrecipes array
        } else{
            setfinalrecipes((prev)=>{
                return finalarray
            })
        }
    }
    const navigation = useNavigation(); 
    const [modalOpen, setModalOpen] = useState(false);
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
                        
                        {/** this will be the pop up screen for the search results */}
                        <Modal visible = {modalOpen} animationType='slide'>
                            <View style = {styles.ModalContent}>
                                <Text style={styles.Title}> Results </Text>
                                  <Text style = {styles.SubText}> BLT Sandwich </Text>
                                <TouchableOpacity style = {{...styles.modalToggle}} onPress = {() => setModalOpen(false)}>
                                    <Text style = {styles.testerText}> Back to Modal </Text>
                                    </TouchableOpacity>
                            </View>
                        </Modal>


                        <TouchableOpacity style = {styles.modalToggle} onPress = {() => setModalOpen(true)}>
                            <Text style = {styles.testerText}> Search </Text>
                        </TouchableOpacity>

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
                />  */}
                        
        
                     
                     </View>
                     </View>
             </View>
             )

    
}
{/* <TouchableOpacity onPress={() => navigation.navigate('sResults')} >
<Text style = {styles.testerText}>Search</Text>
</TouchableOpacity>  */}

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
