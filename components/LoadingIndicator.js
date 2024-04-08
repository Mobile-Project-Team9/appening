import * as React from 'react';
import { ActivityIndicator as RNActivityIndicator, MD2Colors } from 'react-native-paper';
import { styles } from '../styles/style';

const LoadingIndicator = () => (
  <RNActivityIndicator animating={true} color={"#E10069"} size={124} style={styles.indicator}/>
);

export default LoadingIndicator;