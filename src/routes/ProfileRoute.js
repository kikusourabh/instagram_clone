import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import PostDetails from '../screens/PostDetails';
import Friends from '../screens/Friends';

const Stack = createStackNavigator();
function ProfileRoute() {

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
            <Stack.Screen name="Friends" component={Friends} />
        </Stack.Navigator>
    );
}

export default ProfileRoute;