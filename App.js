import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/style';

import TestDataAtlas from './data/TestDataAtlas';
import { QueryContext } from './data/Contexts';




export default function App() {
  

  return (
   <QueryContext.Provider>
      <View style={styles.container}>
        <Api/>
      </View>
   </QueryContext.Provider>
  );
}
