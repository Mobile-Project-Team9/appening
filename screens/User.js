import { View, Text } from 'react-native'
import React from 'react'
import style from '../styles/style'

export default function User() {
  return (
    <View>
      <Text variant='headlineLarge' style ={style.label}> My week meaning</Text>
      <Text variant='headlineLarge' style ={style.label2}> Next week meaning</Text>
    </View>
  )
}