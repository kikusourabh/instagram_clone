import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';

const Stack = createStackNavigator();
function AuthRoute() {
  return (

    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>

  );
}

export default AuthRoute;
