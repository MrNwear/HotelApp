import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Colors } from '../../utils/colors';
import { Logo } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigatorParams } from '../../navigation';

interface SplashScreenProps {}

const SplashScreen = (props: SplashScreenProps) => {
    const navigation:NativeStackNavigationProp<AppStackNavigatorParams>=useNavigation()
    setTimeout(() => {
        navigation.replace('AuthTabs');
    }, 3000);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.primary,
            }}
        >
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor={Colors.primary}
            />
            <Logo style={{backgroundColor:Colors.white}} textStyle={{color:Colors.primary}}/>
          
        </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {}
});
