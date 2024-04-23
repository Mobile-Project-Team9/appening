import * as React from 'react';
import { View, Text, Image } from "react-native";
import { styles } from '../styles/style';
import Login from '../screens/Login'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();  

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.containerLoading}>
      <Image style={styles.loadingImage} source={require("../assets/oulu.jpeg")}/>
      <View style={styles.loadingTextView}>
        <Text style={styles.loadingTextMain}>Tervetuloa Ouluun</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
