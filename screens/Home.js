import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

let locations = [{
  "id": 244, "geo": {
    "crs": {
      "type": "name",
      "properties": {
        "name": "EPSG:4326"
      }
    },
    "type": "Point",
    "coordinates": [
      65.01884726883974,
      25.479098876314033
    ]
  }
}, {
  "id": 8, "geo": {
    "crs": {
      "type": "name",
      "properties": {
        "name": "EPSG:4326"
      }
    },
    "type": "Point",
    "coordinates": [
      65.02117817080591,
      25.46183242848834
    ]
  }
}, {
  "id": 9,
  "type": "Point",
  "geo": {
    "crs": {
      "type": "name",
      "properties": {
        "name": "EPSG:4326"
      }
    },
    "type": "Point",
    "coordinates": [
      65.0208886133949,
      25.46155877823356
    ]
  }
}, {
  "id": 12,
  "type": "Point",
  "geo": {
    "crs": {
      "type": "name",
      "properties": {
        "name": "EPSG:4326"
      }
    },
    "type": "Point",
    "coordinates": [
      65.02090589788989,
      25.460933442460377
    ]
  }
}];

const INITIAL_LATITUDE = 65.0800;
const INITIAL_LONGITUDE = 25.4800;
const INITIAL_LATITUDE_DELTA = 0.0922;
const INITIAL_LONGITUDE_DELTA = 0.0421;

export default function Home() {
  const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
  const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [])

  if (isLoading) {
    return <View style={styles.container}>
      <Text>Retrieving location...</Text>
    </View>
  }
  else {
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
          {locations.map((location) => (
            <Marker
              key={location.id}
              title={`${location.id}. location`}
              coordinate={{
                latitude: location.geo.coordinates[0],
                longitude: location.geo.coordinates[1]
              }}
            />
          ))}
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