import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/style';
import TestVisitFinland from './data/TestData';
import TestDataAtlas from './data/TestDataAtlas';

import Api from "./data/Api";

// const URL = "https://opendata.zoneatlas.com/oulu/objects.json";

export default function App() {


  return (
    <View style={styles.container}>
      <Api/>
    </View>
  );
}
