import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/style'
import Login from './Login';
import Register from './Register';


export default function User() {
  //<Text style ={styles.label}>My travel plan</Text>
  //<Text style ={styles.label}>Schedule</Text>
  return (
    <View>
     
      <Login/>
      <Register/>
    </View>
  )
}