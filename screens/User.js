import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/style';

export default function User() {
  const route = useRoute();
  const { eventName } = route.params; 

 


  return (
    <View>
      <Text>Event Name: {eventName.title}</Text> 
    </View>
  );
}


