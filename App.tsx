import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Logo } from './src/Components';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from './src/navigation/AuthTabs';
import { HotelDetailsScreen } from './src/Screens';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <NavigationContainer>
      <Authentication/>
    </NavigationContainer>
  );
};

export default App;

