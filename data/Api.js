import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from '../styles/style';

const URL = "https://opendata.zoneatlas.com/oulu/objects.json";

export default function Api() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState();
  const [item, setItem] = useState([""]);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [info, setInfo] = useState("");
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [geoLat, setGeoLat] = useState("");
  const [geoLon, setGeoLon] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryColour, setCategoryColour] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mediaIcon, setMediaIcon] = useState("");
  const [mediaIconPath, setMediaIconPath] = useState("");
  const [MediaIconPathThumbnailPath, setMediaIconPathThumbnailPath] = useState("");
  const [mediaDescription, setMediaDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const [json, setJson] = useState([]);
  const [event, setEvent] = useState([]);
  
  useEffect(()=> {
    fetch(URL)
        .then(response => response.json())
        .then ((json) => {
          // A loop here that goes through json length
          let i = 0;
            setId(json[i].id);
            setTitle(json[i].title);
            setCategory(json[i].Categories[0].title);
            setTag(json[i].Tags[0].title);
            setTag(tag + json[i].Tags[1].title); // Might not work?
            setInfo(json[i].content);
            setOpening(json[i].activeTimeStart);
            setClosing(json[i].activeTimeEnd);
            setCategoryId(json[i].Categories[0].id);
            setCategoryIcon(json[i].Categories[0].icon);
            setCategoryColour(json[i].Categories[0].color);
            setGeoLat(json[i].geo.coordinates[0]);
            setGeoLon(json[i].geo.coordinates[1]);
            setAddress(json[i].meta.streetAddress);
            setPostalCode(json[i].meta.postalCode);
            setMediaIcon(json[i].Media[0].title);
            setMediaIconPath(json[i].Media[0].path);
            setMediaDescription(json[i].Media[0].description);
            setMediaIconPathThumbnailPath(json[i].Media[0].thumbnailPath);
            // setDateStart(json[i].meta.eventDates.startDate); Goes into an ending loop of loading if json doesn't have certain path
            // setDateEnd(json[i].meta.eventDates.endDate);
            setEvent([{id: id, title: title, category: category, tag: tag, info: info, opening: opening, closing: closing,
              categoryId: categoryId, categoryIcon: categoryIcon, categoryColour: categoryColour, getLat: geoLat, getLon: geoLon, 
              address: address, postalCode: postalCode, mediaIcon: mediaIcon, mediaIconPath: mediaIconPath,
              mediaDescription: mediaDescription, MediaIconPathThumbnailPath: MediaIconPathThumbnailPath}]);
              // Push event into json array here. Return json filtered json in return once it works
            console.log(event);
            setError(null);
            setIsLoading(false);
        }, (error) => {
            setError("Error retrieving activity!");
            setIsLoading(false);
            console.log(error);
        });
  },[refresh])

  if (isLoading) {
    return <View style={styles.container}><ActivityIndicator size="large"/></View>
  } else if (error) {
    return <View style={styles.container}><Text>{error}</Text></View>
  } else {
    return (
        <View style={styles.container}>
          <Text>Id {id}</Text>
          <Text>Title {title}</Text>
          <Text>Category {category}</Text>
          <Text>Category id {categoryId}</Text>
          <Text>Tag {tag}</Text>
          <Text>Info {info}</Text>
          <Text>Opening {opening}</Text>
          <Text>Closing {closing}</Text>
          <Text>Category icon {categoryIcon}</Text>
          <Text>Category colour {categoryColour}</Text>
          <Text>Geo location latitude {geoLat}</Text>
          <Text>Geo location longitude {geoLon}</Text>
          <Text>Street address {address}</Text>
          <Text>Postal code {postalCode}</Text>
          <Text>Media icon {mediaIcon}</Text>
          <Text>Media icon path {mediaIconPath}</Text>
          <Text>Media icon path thumbnail {MediaIconPathThumbnailPath}</Text>
          <Text>Media description {mediaDescription}</Text>
          <Text>Starting date {dateStart}</Text>
          <Text>Ending date {dateEnd}</Text>
        </View>
    );
  }
}