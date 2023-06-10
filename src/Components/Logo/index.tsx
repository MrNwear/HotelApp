import * as React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import styles from './style';

interface LogoProps {
  style?:StyleProp<ViewStyle>,
  textStyle?:StyleProp<TextStyle>

}

const Logo = (props: LogoProps) => {
  const {style,textStyle}=props
  return (
    <View style={[styles.container,style]}>
      <Text style={[styles.text,textStyle]}>H.</Text>
    </View>
  );
};

export default Logo;

