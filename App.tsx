import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;

