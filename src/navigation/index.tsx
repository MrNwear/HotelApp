import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthTabs   from './AuthTabs';
import HomeStack from './HomeStack';

export type AppStackNavigatorParams = {
    AuthTabs: { identifier: string } | undefined;
    HomeStack: { identifier: string } | undefined;
};
const Stack = createNativeStackNavigator<AppStackNavigatorParams>();
export default function AppStack(): ReactElement {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthTabs" component={AuthTabs} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
            </Stack.Navigator>
    );
}
