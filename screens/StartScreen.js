import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


import Login from '../screens/Login';




export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../pic/oulu2026.png')}
    />
      <View >
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8} 
          onPress={() => navigation.navigate()}
        >
         
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          activeOpacity={0.8} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: 300,
    height:80,
   
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  loginButton: {
    height: 45,
    width: 120,
    
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  skipButton: {
  

  },
  skipText: {
  
    fontSize:20,
    textAlign:'center',
    padding:20,
    left:120,
    

  },
});
