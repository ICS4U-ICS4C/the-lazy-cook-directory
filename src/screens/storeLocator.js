import React from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, Platform } from 'react-native';

//import {request, PERMISSIONS} from 'react-native-permissions';
//import Geolocation from '@react-native-community/geolocation';


export default class App extends React.Component {
  places = {
    miscoordinates: [
      { latitude: 43.7343, longitude: -79.6359 },
      { latitude: 43.5789, longitude: -79.5437 },
      { latitude: 43.4829, longitude: -79.6261 },
      { latitude: 43.5222, longitude: -79.6818 },
      { latitude: 43.5879, longitude: -79.8097 }
    ],
    walcoordinates: [
      { name: 'Walmart', latitude: 43.5955, longitude: -79.642 },
      { name: 'Walmart', latitude: 43.6144, longitude: -79.5784 },
      { name: 'Walmart', latitude: 43.6099, longitude: -79.6924 },
      { name: 'Walmart', latitude: 43.5475, longitude: -79.6808 },
      { name: 'Walmart', latitude: 43.5616, longitude: -79.7093 },
      { name: 'Walmart', latitude: 43.7285, longitude: -79.6434 }
    ],
    foocoordinates: [
      { name: 'Food Basics', latitude: 43.5855, longitude: -79.6165 },
      { name: 'Food Basics', latitude: 43.6059, longitude: -79.6268 },
      { name: 'Food Basics', latitude: 43.6287, longitude: -79.6028 },
      { name: 'Food Basics', latitude: 43.5218, longitude: -79.6518 }
    ],
    freshcoordinates: [
      { name: 'FreshCo', latitude: 43.579, longitude: -79.613 },
      { name: 'FreshCo', latitude: 43.614, longitude: -79.5857 },
      { name: 'FreshCo', latitude: 43.5627, longitude: -79.6437 },
      { name: 'FreshCo', latitude: 43.5408, longitude: -79.6841 },
      { name: 'FreshCo', latitude: 43.7274, longitude: -79.6374 }
    ],
    nocoordinates: [
      { name: 'Daniels No Frills', latitude: 43.5969, longitude: -79.6671 },
      { name: 'Marcs No Frills', latitude: 43.6182, longitude: -79.6168 },
      { name: 'Dinos No Frills', latitude: 43.5974, longitude: -79.6029 },
      { name: 'Chris & Stacys No Frills', latitude: 43.6005, longitude: -79.5653 },
      { name: 'Dinos No Frills', latitude: 43.5927, longitude: -79.7432 }
    ],
    oceanscoordinates: [
      { name: 'Oceans', latitude: 43.6027, longitude: -79.6492 }
    ],
    adoniscoordinates: [
      { name: 'Adonis', latitude: 43.5796, longitude: -79.6821 },
      { name: 'Adonis', latitude: 43.6040, longitude: -79.5880 }
    ]
  };
//componentDidMount() {
  //this.requestPermission();
//}
 
//requestPermission = async () => {
  //if(Platform.OS === 'ios') {
    //var input = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//console.log('Iphone: '+ input);

    //if(input === 'granted'){
      //this.LocatePosition();
    //}
  //} else {
    //var input_a = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//console.log('Android '+ input_a);

    //if(input_a === 'granted'){
      //this.LocatePosition();  
    //}
 // }
//}

 //LocatePosition = () => {
    //Geolocation.getCurrentPosition(
      //position => {
      //console.log(JSON.stringify(position));
    //}
    //)
  //};



  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          styles={StyleSheet.absoluteFillObject}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={{
            latitude: 43.59531,
            longitude: -79.64057,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
          }}>
        <Polygon
         coordinates={this.places.miscoordinates}
         fillColor={'rgba(167, 238, 201, 0.3)'}
        />

          {this.places.walcoordinates.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Image source={require('../icons/walmartpin.png')}
              style={{width: 26, height: 35}}
              />
              

            </Marker>
          ))}

          {this.places.foocoordinates.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Image source={require('../icons/foodbasicspin.png')}
              style={{width: 26, height: 35}}
              />
            </Marker>
          ))}

          {this.places.freshcoordinates.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Image source={require('../icons/freshcopin.png')}
              style={{width: 26, height: 35}}
              />
            </Marker>
          ))}

          {this.places.nocoordinates.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Image source={require('../icons/nofrillspin.png')}
              style={{width: 26, height: 35}}
              />
            </Marker>
          ))}

          {this.places.oceanscoordinates.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Image source={require('../icons/oceans.pin.png')}
              style={{width: 26, height: 35}}
              />
            </Marker>
          ))}

          {this.places.adoniscoordinates.map((marker) => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Image source={require('../icons/adonispin.png')}
              style={{width: 26, height: 35}}
              />
            </Marker>
          ))}

        </MapView>

      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});