import { View, Text } from 'react-native';
import React from 'react';
import Api from "../data/Api";

export default function List() {
  return (
    <View style={{flex: 1}}>
      <Text>List</Text>
      <Api/>
    </View>
  )
}