import React from 'react';
import {StyleSheet,Text,View,SectionList,SafeAreaView,Image,FlatList,} from 'react-native';
//import sResults from '../screens/sResults';
import SearchBar from '../components/searchBar';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.imageurl,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};
const FEATURED = [
  {
   title: 'Creators Picks',
   horizontal: true,
   data: [
     {
       key: '1',
       text: 'Abeers Fav',
       imageurl: 'https://assets.bonappetit.com/photos/5aa9665c275dc52331d9184b/5:7/w_2445,h_3423,c_limit/pantry-pasta.jpg',
     },
     {
       key: '2',
       text: 'Amats Fav',
       imageurl: 'https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg',
     },

     {
       key: '3',
       text: 'Jasmines Fav',
       imageurl: 'https://www.cookingclassy.com/wp-content/uploads/2017/12/chicken-broccoli-stir-fry-13.jpg',
     }
   ],
 }
];

export default () => {
  return (
    <Navigation/>
    <View style={styles.container}>
      <Card style={styles.introCard}>
      <Card.Content>
        <Title>Welcome to the Lazy Cooks' Directory</Title>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  introCard:{
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
    padding:10,
    backgroundColor:'white',
    borderRadius: 20
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  itemText: {
    color: 'black',
    marginTop: 5,
  },
});