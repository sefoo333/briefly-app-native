import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabs from './_layout';
import Account from './Account';
import Invite from './Invite';
import Login from './login';
import Prope from './prope';

const Stack = createNativeStackNavigator();

export default function RootStack() {

  

  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="invite" component={Invite} />
      <Stack.Screen name="props" component={Prope} />
      
    </Stack.Navigator>
  );
}
