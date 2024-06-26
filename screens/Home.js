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
import { LanguageContext, QueryContext } from '../data/Contexts';

const INITIAL_LATITUDE = 65.0800;
const INITIAL_LONGITUDE = 25.4800;
const INITIAL_LATITUDE_DELTA = 0.0922;
const INITIAL_LONGITUDE_DELTA = 0.0421;

export default function Home({ route }) {
  const { json } = useContext(QueryContext)

  const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
  const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [selectedShot, setSelectedShot] = useState(null); // Track selected shot for modal
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(fullData); // for searching

  const { language } = useContext(LanguageContext);
  const [alertButton, setAlertButton] = useState("Ok");
  const [alertHeader, setAlertHeader] = useState("Virhe on tapahtunut");
  const [alertContent, setAlertContent] = useState("Sinun sijaintia ei voitu saavuttaa.");

  const [mapRegion, setMapRegion] = useState({
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
    latitudeDelta: INITIAL_LATITUDE_DELTA,
    longitudeDelta: INITIAL_LONGITUDE_DELTA
  });

  useEffect(() => {
    if (language == "en") {
      setAlertButton("Ok");
      setAlertHeader("An error has occured");
      setAlertContent("Cannot retrieve your location.");
    } else if (language == "fi") {
      setAlertButton("Ok");
      setAlertHeader("Virhe on tapahtunut");
      setAlertContent("Sinun sijaintia ei voitu saavuttaa.");
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
        Alert.alert(alertHeader, alertContent, [{
          text: alertButton, style: "cancel",
        }
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

  useEffect(() => {
    console.log(route.params);
    if (route.params && route.params.item) {
      // If item parameter is passed, set selectedShot to the passed item
      setSelectedShot(route.params.item);

      // Set the map region to focus on the selected event location
      setLatitude(route.params.item.geo.coordinates[0]);
      setLongitude(route.params.item.geo.coordinates[1]);

      // Calculate the difference between the initial latitude and the selected location's latitude
    const latitudeDelta = Math.abs(INITIAL_LATITUDE - route.params.item.geo.coordinates[0]) * 0.05;

    // Calculate the difference between the initial longitude and the selected location's longitude
    const longitudeDelta = Math.abs(INITIAL_LONGITUDE - route.params.item.geo.coordinates[1]) * 0.05;

    setMapRegion({
      latitude: route.params.item.geo.coordinates[0],
      longitude: route.params.item.geo.coordinates[1],
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    });
    }
  }, [route.params]);

  const handleMarkerPress = (shot) => {
    setSelectedShot(shot);
    setModalVisible(true);
  }

  if (isLoading) {
    return <LoadingScreen />
  }
  else {
    return (
      <View style={styles.container}>

        <MapView
          style={styles.map}
          region={mapRegion}
          onRegionChange={() => { }}
          onRegionChangeComplete={() => { }}
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

            const markerColor = location.id === selectedShot?.id ? colors.mainColor : colors.secondaryColor;

            // Render marker for valid location
            return (
              <Marker
                key={location.id}
                title={language === "en" ? "Selected marker" : "Valitsemasi kohde"}
                coordinate={{
                  latitude: latitude,
                  longitude: longitude
                }}
                pinColor={markerColor}
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
