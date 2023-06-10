import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

