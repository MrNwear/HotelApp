import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import {  Text } from 'react-native-paper';
import { Colors } from '../../../utils/colors';
import { Button } from '../../../Components';

interface SignInScreenProps {}

const SignInScreen = (props: SignInScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginHorizontal:25 }}>
    <Text>Sign In Screen</Text>
    {/* Add your sign-in form and logic here */}

    <Button title='Sign In'/>
  </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {}
});
