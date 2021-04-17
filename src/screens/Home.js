import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import sResults from '../screens/sResults';
import SearchBar from '../components/searchBar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Category from '../components/category'
import bltFav from '../screens/bltFav'
// import BLTSandwich from '../icons/BLTSandwich.png'
//home page of Lazy Cook's Directory



export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
       <View style={styles.container}>
         <Card style={styles.introCard}>
         <Card.Content> 

           <Title>Welcome to the Lazy Cooks' Directory</Title>
           <Paragraph>Explicitly input the ingredients you want to cook with and we'll give you a recipes. </Paragraph>
           <Paragraph> Note: type 'seasoning' for seasonings except for salt and paper.</Paragraph>
           <SearchBar/>
         </Card.Content>
       </Card>
      

        <ScrollView scrollEventThrottle={16}>

                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Category imageUri={require('../icons/BLTSandwich.png')}
                            name="BLT Sandwich" link = {bltFav}
                        />

                    </ScrollView>
                </View>
              </ScrollView>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  introCard:{
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20, 
  },
  favHeader1:{
    flex:1,
    paddingLeft: 8,
  }
});

