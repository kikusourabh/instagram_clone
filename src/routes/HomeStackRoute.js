import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import EditProfile from '../screens/EditProfile';
import PostDetails from '../screens/PostDetails';
import Friends from '../screens/Friends';
import HomeRoute from './HomeRoute';

const Stack = createStackNavigator();
function HomeStackRoute() {

    return (
        <NavigationContainer>

            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={HomeRoute} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="PostDetails" component={PostDetails} />
                <Stack.Screen name="Friends" component={Friends} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStackRoute;