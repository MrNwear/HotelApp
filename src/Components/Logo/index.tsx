import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

interface LogoProps {}

const Logo = (props: LogoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>H.</Text>
    </View>
  );
};

export default Logo;

