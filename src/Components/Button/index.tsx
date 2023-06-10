import * as React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './style';
import {Colors} from '../../utils/colors';
import {ActivityIndicator} from 'react-native-paper';

interface ButtonProps {
  title: string;
  leftIcon?: React.ComponentType;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?:StyleProp<TextStyle>;
  isLoading?: boolean;
  [key: string]: any;
}

const Button = (props: ButtonProps) => {
  const {title, leftIcon, onPress, disabled, style, isLoading,titleStyle, ...rest}: any =
    props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: disabled ? Colors.description : Colors.primary},
        style,
      ]}
      disabled={disabled || isLoading}
      onPress={onPress}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {leftIcon ? <View>{leftIcon()}</View> : null}
          <Text style={[styles.title,titleStyle]}>{title || 'Button'}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
