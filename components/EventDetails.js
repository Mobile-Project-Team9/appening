import React from 'react';
import { View, Text } from 'react-native';

const EventDetails = ({ event }) => {
  return (
    <View>
      
      <Text>{event.content}</Text>
      {/* Add more details as needed */}
    </View>
  );
}

export default EventDetails;