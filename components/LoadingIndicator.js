import * as React from 'react';
import { ActivityIndicator as RNActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingIndicator = () => (
  <RNActivityIndicator animating={true} color={MD2Colors.red800} />
);

export default LoadingIndicator;