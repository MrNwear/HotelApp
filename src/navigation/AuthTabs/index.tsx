import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
 
import { Image, SafeAreaView,View } from "react-native";
import { HotelDetailsScreen, SignInScreen, SignUpScreen } from "../../Screens";
import { Logo } from "../../Components";
import { Colors } from "../../utils/colors";
export type AppStackNavigatorParams = {
    login: { identifier: string } | undefined;
    signUp: { identifier: string } | undefined;
};
const Tab = createMaterialTopTabNavigator<AppStackNavigatorParams>();

const Authentication = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{alignItems:'center',marginVertical:40}}>

      <Logo/>
      </View>
      <Tab.Navigator
          screenOptions={
           {
            tabBarIndicatorStyle:{backgroundColor:Colors.primary},
             tabBarStyle: { backgroundColor: Colors.white, },
           tabBarLabelStyle: { fontWeight:'500',fontSize:18 ,textTransform:'none'},
        }}
        
        
      >
        <Tab.Screen  name="login" component={SignInScreen} options={{title:'Log In'}} />
        <Tab.Screen name="signUp" component={SignUpScreen} options={{title:'Sign Up'}} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Authentication;