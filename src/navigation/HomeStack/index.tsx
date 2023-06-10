import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {  HomeScreen, HotelDetailsScreen } from '../../Screens';

export type HomeStackNavigatorParams = {
    HotelDetails: { identifier: string } | undefined;
    Home: { identifier: string } | undefined;
};
const Stack = createNativeStackNavigator<HomeStackNavigatorParams>();
export default function HomeStack(): ReactElement {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HotelDetails" component={HotelDetailsScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
    );
}
