import React from 'react';
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
import { 
  useFonts,
  NanumBrushScript_400Regular 
} from '@expo-google-fonts/nanum-brush-script';
import { AppLoading } from 'expo';
//home page of Lazy Cook's Directory

const ListItem = ({ item }) => { // this is for the creators fav section
  return (
    <View style={styles.item}>
        <TouchableOpacity
          onPress={() => Alert.alert('Input these ingredients in the search bar for the recipe 😁 ',item.ingredients)}
          >
          <Text style={styles.itemText}>{item.text}</Text>
          <Image source={{ uri: item.imageurl }} style={styles.logo} style={styles.itemPhoto} resizeMode="cover"/>
      </TouchableOpacity>

    </View>
  );
};



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



export default () => {
  
  // let [fontsLoaded, error] = useFonts({
  //   NanumBrushScript_400Regular
  // });

  // if (!fontsLoaded){
  //   return <AppLoading/>;
  // }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.introCard}>
        <Card.Content> 
          <Title style ={{fontFamily:"NanumBrushScript_400Regular", fontSize:25}}>Welcome to the Lazy Cooks' Directory</Title>
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