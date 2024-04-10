import { View, Text } from 'react-native'
import React from 'react'
import FilterMenu from '../components/FilterMenu';
//import { styles } from '../styles/style'
import Login from './Login'
import Filter3 from '../components/Filter/Filter1';

//import Register from './Register';

 //<Text style ={styles.label}>My travel plan</Text>
  //<Text style ={styles.label}>Schedule</Text>
export default function User() {
 
  return (
    <>
    <View>
      <Filter3/>
    </View>
    <View>
      <Login/>
    </View>
    </>
  )
}