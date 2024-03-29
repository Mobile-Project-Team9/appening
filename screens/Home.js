import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Modal, Image } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

let locations = [
  {
  "id": 60,
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
  65.0106256,
  25.47538920419746
  ]
  },
  "title": "Oulun läänin Talousseuran talo",
  "slug": "oulun-laanin-talousseuran-talo",
  "content": "Vaaranpuistoa reunustava Oulun läänin Talousseuran talo edustaa funktionalismia ja kuuluu olennaisena osana harvojen Oulun keskustan 1930-luvun funkisrakennusten muodostamaan kokonaisuuteen. Rakennus on töölöläisfunkiksestaan tunnetun Jalmari Peltosen suunnittelema rakennus. Päärakennukseen liittyy matalampi siipi, jossa on autotalleja ja entinen talonmiehen asunto. Rakennuksessa on tehty useita muutos- ja purkutoimenpiteitä; se vaurioitui vuoden 1944 pommituksissa, ja muun muassa ravintola- ja majoitustoimintaa, asuminen ja Yleisradion studio ovat siirtyneet pois talosta. Vuosina 2005-2006 toteutettiin mittava korjaushanke, jonka suunnitteli Arkkitehdit m3 Oy. Rakennuksen ulkomuoto vastaa hyvin alkuperäisilmettä palauttavan korjauksen jälkeen.\n\n**Suunnittelija:** Arkkitehti Jalmari Peltonen\n\n**Valmistumisvuosi:** 1938\n",
  "activeTimeStart": null,
  "activeTimeEnd": null,
  "isInteractive": true,
  "isGeofenced": null,
  "isFeatured": null,
  "duration": 0,
  "priceLevel": null,
  "styleProperties": {},
  "buttons": [],
  "oEmbeds": [],
  "openingHours": null,
  "createdAt": "2022-10-17T06:24:30.509Z",
  "updatedAt": "2022-10-18T05:50:00.873Z",
  "Categories": [
  {
  "id": 24,
  "title": "Arkkitehtuuri",
  "slug": "arkkitehtuuri",
  "color": "#093665",
  "icon": "category/architecture"
  }
  ],
  "Media": [
  {
  "external": false,
  "id": 78,
  "title": "Oulun läänin talousseuran talo.jpeg",
  "type": "image/jpeg",
  "path": "https://zone-uploads-cdn.zoneatlas.com/oulu_c4j44wyo/b4dc0698-3580-45f1-9df4-a362796b39cb/oulun-la-a-nin-talousseuran-talo.jpeg",
  "altText": null,
  "description": null,
  "thumbnailPath": "https://zone-uploads-cdn.zoneatlas.com/oulu_c4j44wyo/b4dc0698-3580-45f1-9df4-a362796b39cb/oulun-la-a-nin-talousseuran-talo-thumbnail.jpeg"
  }
  ],
  "Tags": [
  {
  "id": 14,
  "title": "Paikallistuntemus",
  "type": "context"
  },
  {
  "id": 12,
  "title": "Historia",
  "type": "context"
  },
  {
  "id": 13,
  "title": "Arkkitehtuuri",
  "type": "context"
  }
  ],
  "meta": {
  "MapItemId": 60,
  "postalCode": "90100",
  "streetAddress": " Kauppurienkatu 23, Oulu, 90100"
  },
  "publisher": "Oulun kaupunki",
  "i18n": {
  "en": {
  "title": "House of Economic Association of Oulu County",
  "name": "House of Economic Association of Oulu County",
  "content": "The house of the Economic Association of Oulu County, bordering Vaaranpuisto, represents functionalism and is an essential part of the ensemble formed by the few 1930s funk buildings in the center of Oulu. The building is designed by Jalmari Peltonen, known for his industrial funk. The main building is joined by a lower wing with garages and the former caretaker's apartment. Several changes and demolition measures have been carried out in the building; it was damaged in the bombings of 1944, and, among other things, restaurant and accommodation operations, housing and Yleisradio's studio have moved out of the building. In 2005-2006, a major repair project was carried out, designed by Arkkitehdit m3 Ltd. The exterior of the building corresponds well to the original look after the repair.\n\n**Designer:** Architect Jalmari Peltonen\n\n**Year of construction:** 1938\n"
  }
  }
  },
  {
  "id": 62,
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
  65.0118057,
  25.4834253
  ]
  },
  "title": "1930-luvun funktionalismia rautatieasemaa vastapäätä",
  "slug": "rautatienkatu-8",
  "content": "Rautatienkatu 8 liittyy Oulun rautatieaseman ympäristöön 1920-40-luvuilla rakentuneeseen funktionalististen rakennusten ryhmään. Rakennuksen julkisivut on rapattu ja maalattu vaaleiksi. Kadunpuoleista sisäänkäyntiä on korostettu graniittireunuksella ja nyttemmin muutetulla lippakatoksella, jonka yläpuolella on funkikselle tyypillinen erkkeri. Sisäänkäynnin vieressä on myös pieni pyöreä ikkuna. Ullakolle on rakennettu lisäkerros. Rakennuksessa on toiminut alunperin hotelli Oulas. Tätä nykyä siinä on PSOAS:n opiskelija-asuntoja.\n\n**Suunnittelija:** Gustaf Strandberg\n\n**Valmistumisvuosi:** 1940\n",
  "activeTimeStart": null,
  "activeTimeEnd": null,
  "isInteractive": true,
  "isGeofenced": null,
  "isFeatured": null,
  "duration": 0,
  "priceLevel": null,
  "styleProperties": {},
  "buttons": [],
  "oEmbeds": [],
  "openingHours": null,
  "createdAt": "2022-10-17T06:32:31.552Z",
  "updatedAt": "2022-10-18T05:57:39.623Z",
  "Categories": [
  {
  "id": 24,
  "title": "Arkkitehtuuri",
  "slug": "arkkitehtuuri",
  "color": "#093665",
  "icon": "category/architecture"
  }
  ],
  "Media": [
  {
  "external": false,
  "id": 80,
  "title": "Rautatienkatu 8.jpeg",
  "type": "image/jpeg",
  "path": "https://zone-uploads-cdn.zoneatlas.com/oulu_c4j44wyo/93a94026-221a-4691-8b5b-b95239f26744/rautatienkatu-8.jpeg",
  "altText": null,
  "description": null,
  "thumbnailPath": "https://zone-uploads-cdn.zoneatlas.com/oulu_c4j44wyo/93a94026-221a-4691-8b5b-b95239f26744/rautatienkatu-8-thumbnail.jpeg"
  }
  ],
  "Tags": [
  {
  "id": 14,
  "title": "Paikallistuntemus",
  "type": "context"
  },
  {
  "id": 13,
  "title": "Arkkitehtuuri",
  "type": "context"
  },
  {
  "id": 12,
  "title": "Historia",
  "type": "context"
  }
  ],
  "meta": {
  "MapItemId": 62,
  "postalCode": "90100",
  "streetAddress": " Rautatienkatu 8, Oulu, 90100"
  },
  "publisher": "Oulun kaupunki",
  "i18n": {
  "en": {
  "title": "1930s functionalism opposite the train station",
  "name": "Rautatienkatu 8",
  "content": "Rautatienkatu 8 is part of the group of functionalist buildings built in the 1920s and 40s around Oulu's railway station. The facades of the building have been plastered and painted light. The entrance on the street side is highlighted with a granite border and a more recently modified hip roof, above which there is a bay window typical of functionalism. There is also a small round window next to the entrance. An additional floor has been built in the attic. Hotel Oulas originally operated in the building. Currently, it houses PSOAS student apartments.\n\n**Designer:** Gustaf Strandberg\n\n**Year of construction:** 1940\n"
  }
  }
  },];

const INITIAL_LATITUDE = 65.0800;
const INITIAL_LONGITUDE = 25.4800;
const INITIAL_LATITUDE_DELTA = 0.0922;
const INITIAL_LONGITUDE_DELTA = 0.0421;

export default function Home() {
  const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
  const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [])

  const handleMarkerPress = (shot) => {
    setSelectedShot(shot);
    setModalVisible(true);
  }

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
              title={location.title}
              coordinate={{
                latitude: location.geo.coordinates[0],
                longitude: location.geo.coordinates[1]
              }}
              onPress={() => handleMarkerPress(location)}
            />
          ))}
        </MapView>
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            {selectedShot && (
              <View>
                <Text style={styles.title}>{selectedShot.title}</Text>
                <Image />
                <Text style={styles.info}>{selectedShot.content}</Text>
                {/* Add more shot information here */}
                <Button
                  title="Close"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            )}
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    color: '#001E96',
  },
  info: {
    fontSize:15,

  }
});