import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Modal, Image } from 'react-native';

import { Marker } from 'react-native-maps';
import MapView from "react-native-map-clustering";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import LoadingIndicator from '../components/LoadingIndicator';
import FilterMenu from '../components/FilterMenu';
import Search from '../components/Search';
import ShotDescription from '../components/ShotDescription';
import { styles } from '../styles/style';


import fullData from '../data/fullData.json';



const INITIAL_LATITUDE = 65.0800;
const INITIAL_LONGITUDE = 25.4800;
const INITIAL_LATITUDE_DELTA = 0.0922;
const INITIAL_LONGITUDE_DELTA = 0.0421;

export default function Home() {
  const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
  const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);

  const [selectedShot, setSelectedShot] = useState(null); // Track selected shot for modal
  const [modalVisible, setModalVisible] = useState(false);

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
          { accuracy: Location.Accuracy.High });
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsLoading(false);
      }
      catch (error) {
        alert(error);
        setIsLoading(false);
      }
    })();
    const filteredLocations = fullData.filter(location => (
      location.title && location.geo && location.geo.coordinates &&
      location.geo.coordinates.length === 2
    ));
    setLocations(filteredLocations)
  }, [])


  const handleMarkerPress = (shot) => {
    setSelectedShot(shot);
    setModalVisible(true);
  }

  if (isLoading) {
    return <LoadingIndicator />
  }
  else {
    return (
      <View style={styles.container}>
        <Search />
        <FilterMenu />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: INITIAL_LATITUDE,
            longitude: INITIAL_LONGITUDE,
            latitudeDelta: INITIAL_LATITUDE_DELTA,
            longitudeDelta: INITIAL_LONGITUDE_DELTA
          }}
          clusterColor = {'#E10069'}
          showsUserLocation={true}

        // mapType="satellite"
        >
          {locations.map((location) => {
            // Check if latitude and longitude are valid numbers
            const latitude = parseFloat(location.geo.coordinates[0]);
            const longitude = parseFloat(location.geo.coordinates[1]);

            if (isNaN(latitude) || isNaN(longitude)) {
              // Skip rendering marker if latitude or longitude is NaN
              return null;
            }

            // Render marker for valid location
            return (
              <Marker
                key={location.id}
                title={location.title}
                coordinate={{
                  latitude: latitude,
                  longitude: longitude
                }}
                pinColor={'#E10069'}
                onPress={() => handleMarkerPress(location)}
              />
            );
          })}
        </MapView>
        <ShotDescription 
          visible = {modalVisible}
          onRequestClose={() => setModalVisible(false)}
          selectedShot={selectedShot}
        />

      </View>
    );
  }
}
