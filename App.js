import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/style';


import Api from "./data/Api";
import { useContext, useState } from 'react';
import { QueryContext } from './data/Contexts';

export default function App() {
  const [queryResult, setQueryResult] = useState([])

  return (
    <QueryContext.Provider value={{queryResult, setQueryResult}}>
      <View style={styles.container}>
        <Api/>
      </View>
    </QueryContext.Provider>
  );
}
