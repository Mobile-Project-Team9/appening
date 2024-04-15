import * as React from 'react';
import { View, Text, Image } from "react-native";
import { styles } from '../styles/style';

const LoadingScreen = () => (
  <View style={styles.containerLoading}>
    <Image style={styles.loadingImage} source={require("../assets/oulu.jpeg")}/>
    <View style={styles.loadingTextView}>
      <Text style={styles.loadingTextMain}>Tervetuloa Ouluun</Text>
      <Text style={styles.loadingText}>Sivu latautuu, odota hetki</Text>
    </View>
  </View>
);

export default LoadingScreen;