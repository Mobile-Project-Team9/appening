import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/style'

export default function User() {
  return (
    <View>
      <Text style ={styles.label}>My travel plan</Text>
      <Text style ={styles.label}>Schedule</Text>
    </View>
  )
}