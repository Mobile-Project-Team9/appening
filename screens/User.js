import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/style';
// ... other imports for displaying user information, etc. (if needed)

export default function User() {
  const route = useRoute();
  const { eventName, fullData } = route.params; // Access event data passed from EventList

  return (
    <View style={styles.container}>
      <Text>Event Name: {eventName}</Text>
      <Text>Event Name: {fullData}</Text>
      
    </View>
  );
}
