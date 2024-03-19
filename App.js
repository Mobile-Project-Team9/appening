import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/style';

import TestDataAtlas from './data/TestDataAtlas';


// const URL = "https://opendata.zoneatlas.com/oulu/objects.json";

export default function App() {
  

  return (
    <QueryContext.Provider value={{queryResult, setQueryResult}}>
      <View style={styles.container}>
        <TestDataAtlas/>
      </View>
    </QueryContext.Provider>
  );
}
