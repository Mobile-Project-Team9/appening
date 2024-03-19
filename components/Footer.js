import { View, Text } from 'react-native'
import React from 'react'
import styles from "../styles/style";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Made by students for a mobile project.</Text>
      <Text style={styles.text}>The students involved: Msaed Al-jebut, Eetu Huotari, Aku Nikula, Mariia Zhivonitko.</Text>
    </View>
  )
}