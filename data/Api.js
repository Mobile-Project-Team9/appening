import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';

const URL = "https://opendata.zoneatlas.com/oulu/objects.json";

export default function Api() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState();
  const [categories, setCategories] = useState([])
  const [item, setItem] = useState([])
  
  useEffect(()=> {
    fetch(URL)
      .then(response => response.json())
      .then ((json) => {
        json.forEach((i) => {
          setItem(json[i].title);
          //setCategories([...categories, item]);
          console.log(item);
        })
        //setTitle(categories[0].title)
        //console.log(categories);
        setError(null);
        setIsLoading(false);
      },(error) => {
        setError("Error retrieving activity!");
        setIsLoading(false);
        console.log(error);
      })
  },[refresh])




  if (isLoading) {
    return <View style={styles.container}><ActivityIndicator size="large"/></View>
  } else if (error) {
    return <View style={styles.container}><Text>{error}</Text></View>
  } else {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>{title}</Text>
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
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },  
  activity: {
    marginBottom: 10,
  }
});