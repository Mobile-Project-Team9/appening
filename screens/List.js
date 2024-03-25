import { View, Text, ScrollView, FlatList } from 'react-native';
import { React, useContext } from 'react';
import { Card } from "react-native-paper";
import styles from '../styles/style';

import json from "../data/Api";
import { QueryContext } from '../data/Contexts';

export default function List() {
  const {json} = useContext(QueryContext);
  let i = 0;

  function Item({ json }){
    console.log("Json: " + json);
    
    return(
      <View>
        <ScrollView>
            <Card>
            <View style={styles.container}>
              <Text>Id {json[i].id}</Text>
              <Text>Title {json[i].title}</Text>
              <Text>Category {json[i].category}</Text>
              <Text>Category id {json[i].categoryId}</Text>
              <Text>Tag {json[i].tag}</Text>
              <Text>Info {json[i].info}</Text>
              <Text>Opening {json[i].opening}</Text>
              <Text>Closing {json[i].closing}</Text>
              <Text>Category icon {json[i].categoryIcon}</Text>
              <Text>Category colour {json[i].categoryColour}</Text>
              <Text>Geo location latitude {json[i].geoLat}</Text>
              <Text>Geo location longitude {json[i].geoLon}</Text>
              <Text>Street address {json[i].address}</Text>
              <Text>Postal code {json[i].postalCode}</Text>
              <Text>Media icon {json[i].mediaIcon}</Text>
              <Text>Media icon path {json[i].mediaIconPath}</Text>
              <Text>Media icon path thumbnail {json[i].mediaIconPathThumbnailPath}</Text>
              <Text>Media description {json[i].mediaDescription}</Text>
              <Text>Starting date {json[i].dateStart}</Text>
              <Text>Ending date {json[i].dateEnd}</Text>
            </View>
            </Card>
          </ScrollView>
      </View>
    )
  }

  return (
    <View>
      <Text>List</Text>
      <FlatList data={json} renderItem={({ item }) => <Item json={item}/> }/>  
    </View>
  )
}