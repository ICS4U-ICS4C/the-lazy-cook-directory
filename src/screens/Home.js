import React, {useState} from 'react';
import { Alert } from 'react-native'; 
import {StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import SearchBar from '../components/searchBar';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import {AppLoading} from 'expo';




//importing componenets used in this program

//home page of Lazy Cook's Directory


const FEATURED = [ 
  /** data for creator's favourite recipe section that is 
   * displayed at the bottom of the home page */ 
  {
   title: 'Creators Picks',
   horizontal: true,
   data: [
     {
       key: '1',
       text: 'Abeers Fav',
       imageurl: 'https://assets.bonappetit.com/photos/5aa9665c275dc52331d9184b/5:7/w_2445,h_3423,c_limit/pantry-pasta.jpg',
       ingredients: "pasta"
     },
     {
       key: '2',
       text: 'Amats Fav',
       imageurl: 'https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg',
       ingredients: "flour, egg, water, yeast, tomato sauce, cheese"
     },

     {
       key: '3',
       text: 'Jasmines Fav',
       imageurl: 'https://natashaskitchen.com/wp-content/uploads/2020/07/BLT-Sandwich-Recipe-4.jpg',
       ingredients: "tomato, lettuce, bacon, bread, mayonaisse"
     }
   ],
 }
];

const ListItem = ({ item }) => {
   /**this is for the creators fav section
    * 
    * When the user presses on the image the recipes displayed
    * an Alet will pop up, stating the ingredients the user
    * has to search to retrieve the recipe
    * 
    * item.text means to retrive the item 'text' from the data above stored in FEATURED
    * same with imageurl(the url of the image on screen) and ingredients
    * */ 
  return (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => Alert.alert('Input these ingredients in the search bar for the recipe 😁 ',item.ingredients)}>
          <Text style={styles.itemText}>{item.text}</Text>
          <Image source={{ uri: item.imageurl }} style={styles.logo} style={styles.itemPhoto} resizeMode="cover"/>
      </TouchableOpacity>

    </View>
  );
};


// const fetchFonts = ()=> {
//   return Font.loadAsync({
//     'NanumPenScript_400Regular': require('../fonts/NanumBrushScript-Regular.ttf')
//   });
// };

export default () => {
  // const [dataLoaded,setDataLoaded] = useState(false);

  // if (!dataLoaded){
  //   return (
  //     <AppLoading
  //     startAsync = {fetchFonts}
  //     onFinish={() => setDataLoaded(true)}
  //     />
  //   );
  // }

  return (
    /**
     * in the Card, the instructions are listed as well as a note to the user. Below the note is the 
     * search bar component being called from searchBar.js. It calls the search bar along with buttons
     * accompanying the functionality of the search bar. 
     * 
     * After the card is a section list which is where the Creator's Fav section is displayed.
     * It calls the data from FEATURED
     * the title for this compartment is called by 'section.title'
     * The flatList is the list of the creator's favourite recipe. Its set to be horizontal
     * and can be scrolled horizontally however the scroll bar is not visible. 
     * The if statement is to prevent the duplicate vertical version of the list from appearing
     */
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.introCard}>
        <Card.Content> 
          <Title style ={{fontSize:25}}>Welcome to the Lazy Cooks' Directory</Title>
          <Paragraph>Input the ingredients you want to cook with and we'll give you a recipe you thought was never possible with minimal ingredients!</Paragraph>
          <Paragraph> Note: for seasonings aside from salt and paper, please write "seasoning", the type will be specified in the recipe.</Paragraph>
          <SearchBar/>
        </Card.Content>
      </Card>

      <SafeAreaView style={{ flex: 1 }}> 

        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={FEATURED}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ section, item }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
      </ScrollView>
    </View>
  );
};


//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  introCard:{
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 25,
    color: 'black',
    marginTop: 20,
  },
  item: {
    marginHorizontal: 15,
    paddingTop:20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor:'black',
    borderRadius: 10
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 3
  },
  itemText: {
    color: 'white',
    marginLeft: 8,
    marginBottom: 3,
    fontSize:18
  },
});