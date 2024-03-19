import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/style';

import TestDataAtlas from './data/TestDataAtlas';
import { QueryContext } from './data/Contexts';
import Home from './screens/Home';




export default function App() {
  

  return (
   <QueryContext.Provider>
      <View style={styles.container}>
        <Home/>
      </View>
   </QueryContext.Provider>
  );
}
