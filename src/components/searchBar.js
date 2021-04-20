import { Navigation, Timeline } from '@material-ui/icons';
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
import SResults from '../screens/sResults';
import { Image } from 'native-base';

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
    ]);
    //database recipes
    const [recipes,setrecipes] = useState([]);

    //containing imgredients from db
    const[firestoredb, setfirestoredb] = useState([]);
    
    const[updated,setupdated] = useState([]);
    //when cliking the ingredients, function recieve key, filter item with that key out of array and return new array

    const[finalrecipes, setfinalrecipes] = useState([]);

    const [information, setinformation] = useState([]);
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
    const search = (ingredients,recipes,firestoredb,updated,finalrecipes) =>{
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
                setupdated(()=>{
                    return updatedlist
                })
            }
        }
         for(let i in updated){
            const newquery = col.where('name', '==', updated[i])
            newquery.get().then(snapshot=>{
                snapshot.docs.forEach(doc=>{
                    dbingredients.push(doc.data().ingredients)
                    setfirestoredb(()=>{
                        return dbingredients
                    })
                })
            })
        }
        for(let i in updated){
            for(let j in firestoredb){
                //checking if userInputArray length is less and or requal to the length of each array of ingredients in firestoredb array
                if(userInputArray.length <= firestoredb[j].length){
                    //if it is then push the name of the recipe name that it was looping on
                    finalarray.push(updated[i])
                    setfinalrecipes(()=>{
                        return finalarray
                    })  
                }
            }
         } 
         if(finalrecipes && finalrecipes.length==0)
         Alert.alert("No matching recipes")
        


    }
    const modall = (item,information) =>{
        let info = [];
        setmodaltwo(true)
        const firestore = firebase.firestore();
        const col = firestore.collection("Recipes")
        const query =col.where('name','==', item).get().then((snapshot)=>{
            snapshot.docs.forEach(doc =>{
                //im storing the document data in the info array
                info.push(doc.data().name)
                //and now im put the information in the info array into the information array which is this==> const [information,setinformation] = useState([]);
                setinformation(()=>{
                    return info
                })
            
            })
        })
        let otherinfo = [];
        const querytwo =col.where('name','==', item).get().then((snapshot)=>{
            snapshot.docs.forEach(doc =>{
                //im storing the document data in the info array
                otherinfo.push(doc.data().preparation)
                //and now im put the information in the info array into the information array which is this==> const [information,setinformation] = useState([]);
                setinformationtwo(()=>{
                    return otherinfo
                })
            
            })
        })
        let timee = [];
        const querythree =col.where('name','==', item).get().then((snapshot)=>{
            snapshot.docs.forEach(doc =>{
                //im storing the document data in the info array
                timee.push(doc.data().duration)
                //and now im put the information in the info array into the information array which is this==> const [information,setinformation] = useState([]);
                settime(()=>{
                    return timee
                })
            
            })
        })
        let quantityy = [];
        const queryfour =col.where('name','==', item).get().then((snapshot)=>{
            snapshot.docs.forEach(doc =>{
                quantityy.push(doc.data().quantity)
                setquantityy(()=>{
                    return quantityy
                })
            
            })
        })  
        let imageSource = [];
        const queryfive =col.where('name','==', item).get().then((snapshot)=>{
            snapshot.docs.forEach(doc =>{
                imageSource.push(doc.data().image)
                setimageSource(()=>{
                    return imageSource
                })
            
            })
        }) 
        let ingredienttt = [];
        const querysix =col.where('name','==', item).get().then((snapshot)=>{
            snapshot.docs.forEach(doc =>{
                ingredienttt.push(doc.data().image)
                setingredienttt(()=>{
                    return ingredienttt
                })
            
            })
        }) 


    }
    const[informationtwo,setinformationtwo] = useState([]);
    const[time,settime] = useState([]);
    const [quantityy, setquantityy] = useState([]);
    const [imageSource, setimageSource] = useState([]);
    const [ingredienttt, setingredienttt] = useState([]);


    //console.log(information)
    const navigation = useNavigation(); 
    //modal for displaying recipes
    const [modalOpen, setModalOpen] = useState(false);
    //modal for displaying instructions for recipes
    const [modaltwo, setmodaltwo] = useState(false);
   
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.searchInput} placeholder = "Insert Ingredients here... "
                    onChangeText={changeHandler}/> 

                     <TouchableOpacity style={styles.button} onPress={()=> submit(text)}>
                        <Text style={styles.text}>Add</Text> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress= {()=> search(ingredients,recipes,firestoredb,updated,finalrecipes)}>
                        <Text style={styles.text}>Search</Text> 
                    </TouchableOpacity>

                    <Modal visible = {modalOpen} animationType='slide'>
                        <View style = {styles.ModalContent}>
                            <Text style={styles.Title}>Results </Text>
                                <FlatList
                                data = {finalrecipes}
                                renderItem={({item})=>(
                                    <TouchableOpacity onPress={ ()=> modall(item,information)}>
                                    <Text style = {styles.itemText}>{item}</Text>
                                    </TouchableOpacity>
                                )}/>
                                      <TouchableOpacity style = {{...styles.modalToggle}} onPress = {() => setModalOpen(false)}>
                                     <Text style = {styles.testerText}> Back to Home </Text>
                                     </TouchableOpacity>
                                {/* ========module2=========== */}
                            <Modal visible = {modaltwo} animationType='slide'>
                      
                             <View>
                                 <ScrollView>
                                    {/* <Image source ={{uri: imageSource}}/> */}
                                    <Text style = {styles.textResults}>{information}</Text>
                                    <Text style = {styles.textResults}>prep:  {informationtwo}</Text>
                                    <Text style = {styles.textResults}> duration :{time}</Text>
                                    <Text style = {styles.textResults}>quantity: {quantityy}</Text>
                                    <FlatList 
                                    data = {{ingredienttt}}
                                    renderItem = {({item}) => (
                                        <Text style = {styles.flatListItem}>{item}</Text>
                                    )}
                                    />
                                    </ScrollView>
                                </View>
                           
                            <TouchableOpacity style = {{...styles.modalToggle}} onPress = {() => setmodaltwo(false)}>
                                <Text style = {styles.testerText}> Go Back </Text>
                                </TouchableOpacity>
                            </Modal>
                            </View>
                   </Modal>


                        <TouchableOpacity style = {styles.button} onPress = {() => setModalOpen(true)}>
                            <Text style = {styles.testerText}> Results </Text>
                        </TouchableOpacity>   

    
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
        paddingVertical: 10,
        paddingHorizontal: 32,
        margin: 5,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.75,
        color: 'white',
      },
      textResults: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.75,
        color:'black',
        margin: 10,
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
      },
      textSearch:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.85,
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
        borderWidth:1,
        borderColor: '#f3f3f3',
        borderRadius: 10,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,

      },
      ModalClose:{
          flex:1,
      },
      flatListItem:{
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: '#f3f5f3',
      },
      itemText:{
          paddingHorizontal:30,
          paddingVertical: 5,
          margin: 5,
          backgroundColor: '#f3f5f3',
          fontSize: 18,
      }
      
})