import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Api from '../data/ApiFullJson';
import { QueryContext } from '../data/Contexts';
import FetchData from '../data/ApiFullJson';

const INITIAL_LATITUDE = 65.0800;
const INITIAL_LONGITUDE = 25.4800;
const INITIAL_LATITUDE_DELTA = 0.0922;
const INITIAL_LONGITUDE_DELTA = 0.0421;

//const URL = "https://opendata.zoneatlas.com/oulu/objects.json";

export default function Home() {
  const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
  const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingContext, setIsLoadingContext] = useState(true);

  const contextValue = useContext(QueryContext);


  const [markers, setMarkers] = useState([])

  


  useEffect(() => {
    // Set isLoading to false when data is fetched and saved to contextValue
    if (contextValue && Object.keys(contextValue).length > 0) {
      setIsLoadingContext(false);
      console.log('loged from useEffect after check that context value is not empty: '+contextValue[0])
    }
  }, [contextValue]);
 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      try {
        if (status !== 'granted') {
          setIsLoading(false);
          console.log('Geolocation failed');
          return;
        }
        const location = await Location.getLastKnownPositionAsync(
          {accuracy: Location.Accuracy.High});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsLoading(false);
      }
      catch(error) {
        alert(error);
        setIsLoading(false);
      }
    })();
  }, [])

  if (isLoadingContext){
    return <View style={styles.container}>
    <Text>Retrieving data...</Text>
    </View>
  }

  else if (isLoading) {
    return <View style={styles.container}>
      <Text>Retrieving location...</Text>
      </View>
  }


  else {
    console.log('log from Home.js'+ contextValue)
    return (
      
      <View style={styles.container}>
        
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: INITIAL_LATITUDE,
            longitude: INITIAL_LONGITUDE,
            latitudeDelta: INITIAL_LATITUDE_DELTA,
            longitudeDelta: INITIAL_LONGITUDE_DELTA
          }}
          // mapType="satellite"
          >
          <Marker
            title="Testing"
            coordinate={{latitude: latitude, longitude: longitude}}
            >
          </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - Constants.statusBarHeight
  }
});
