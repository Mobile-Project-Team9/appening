import { View, Text, Button } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'

/* Used for rendering location of th event on the map. */

export default function ShowOnMap({buttonName, navigation}) {
    const showOnMap = (item) => {
        navigation.navigate('Home'); // Navigate to Home component with coordinates as props
      };

  return (
    <View>
      <Button title={buttonName} color={colors.secondaryColor} onPress={() => showOnMap()}></Button>
    </View>
  )
}