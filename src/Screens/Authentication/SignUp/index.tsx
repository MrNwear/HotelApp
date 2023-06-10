import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button, Input } from '../../../Components';
import styles from './style';

interface SignUpScreenProps {}

const SignUpScreen = (props: SignUpScreenProps) => {
  const [passwordShown, setPasswordShown]=React.useState(false);
  const onShowPasswordPress=()=>{
      setPasswordShown(!passwordShown);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
        <ScrollView>

    <View style={styles.container}>
    <Text style={styles.label}>Username</Text>

    <Input placeholder='Enter Username' style={styles.textInput} />
    <Text style={styles.label}>Email</Text>

    <Input placeholder='Enter Email' style={styles.textInput} />

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

    <Button title='Sign Up' style={{marginTop:20}}/>
  </View>
  </ScrollView>

  </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

