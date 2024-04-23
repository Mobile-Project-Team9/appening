import React, { useState, useEffect, useContext } from 'react';
import { Alert, View } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from "react-native-map-clustering";
import * as Location from 'expo-location';
import LoadingScreen from '../screens/LoadingScreen';
import FilterMenu from '../components/FilterMenu';
import Search from '../components/Search';
import ShotDescription from '../components/ShotDescription';
import { styles, colors } from '../styles/style';

import fullData from '../data/fullData.json';
import { QueryContext } from '../data/Contexts';

const INITIAL_LATITUDE = 65.0800;
const INITIAL_LONGITUDE = 25.4800;
const INITIAL_LATITUDE_DELTA = 0.0922;
const INITIAL_LONGITUDE_DELTA = 0.0421;

export default function Home() {
  const { json } = useContext(QueryContext)

  const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
  const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [selectedShot, setSelectedShot] = useState(null); // Track selected shot for modal
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(fullData); // for searching
  const [selectedCategory, setSelectedCategory] = useState(null); // for filtering by category
  const [categories, setCategories] = useState([]);

  const language = "fin"; // Add context here
  const [alertButton1, setAlertButton1] = useState("Ok");
  const [alertButton2, setAlertButton2] = useState("Virhe on tapahtunut");
  const [alertButton3, setAlertButton3] = useState("Sinun sijaintia ei voitu saavuttaa.");

  useEffect(() => {
    if (language == "eng") {
      setAlertButton1("Ok");
      setAlertButton2("An error has occured");
      setAlertButton3("Cannot retrieve your location.");
    } else if (language == "fin") {
      setAlertButton1("Ok");
      setAlertButton2("Virhe on tapahtunut");
      setAlertButton3("Sinun sijaintia ei voitu saavuttaa.");
    }
  }, [])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      try {
        if (status !== 'granted') {
          setIsLoading(false);
          return;
        }
        const location = await Location.getLastKnownPositionAsync(
          { accuracy: Location.Accuracy.High });
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsLoading(false);
      }
      catch (error) {
        Alert.alert(alertButton2, alertButton3, [{
            text: alertButton1, style: "cancel",}
        ]);
        setIsLoading(false);
      }
    })();

    const filteredLocations = json.filter(location => (
      location.title && location.geo && location.geo.coordinates &&
      location.geo.coordinates.length === 2
    ));

    setLocations(filteredLocations)
  }, [])

  useEffect(() => {
    setFilteredLocations(json)
  }, [json])

  const handleMarkerPress = (shot) => {
    setSelectedShot(shot);
    setModalVisible(true);
  }

  if (isLoading) {
    return <LoadingScreen/>
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
          clusterColor={colors.secondaryColor}
          showsUserLocation={true}
        >
          {filteredLocations.map((location) => {
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
                pinColor={colors.secondaryColor}
                onPress={() => handleMarkerPress(location)}
              />
            );
          })}
        </MapView>
        <View style={styles.searchContainer}>
          <Search />
          <FilterMenu />
        </View>
        <ShotDescription
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          selectedShot={selectedShot}
        />
      </View>
    );
  }
}
