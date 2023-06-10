import * as React from 'react';
import {  View, KeyboardAvoidingView, Platform, ScrollView,Text } from 'react-native';
import { Button, Input } from '../../../Components';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

interface SignInScreenProps {}

const SignInScreen = (props: SignInScreenProps) => {
    const [passwordShown, setPasswordShown]=React.useState(false);
    const navigation:any=useNavigation();
    const onShowPasswordPress=()=>{
        setPasswordShown(!passwordShown);
    }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
        <ScrollView>

    <View style={{ flex: 1,marginHorizontal:25,marginVertical:40 }}>
    <Text style={styles.label}>Username Or Email</Text>

    <Input placeholder='Enter Username or Email' />

    <Text style={styles.label}>Password</Text>
    <Input
                  autoCapitalize="none"
                  placeholder="Password"
                  style={styles.textInput}
                  icon={!passwordShown ? 'eye-off' : 'eye'}
                  onPressIcon={onShowPasswordPress}
                  secureTextEntry={!passwordShown}
                //   error={errors.new_password}
                />
    <Text style={{alignSelf:'flex-end',marginVertical:30}}>
        Forget Password ?
    </Text>
    <Button title='Sign In' onPress={()=>navigation.navigate('HomeStack',{screen:'Home'})} />
  </View>
  </ScrollView>

  </KeyboardAvoidingView>
  );
};

export default SignInScreen;
