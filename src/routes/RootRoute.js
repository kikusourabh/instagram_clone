import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthRoute from './AuthRoute';
import HomeRoute from './HomeRoute';

function RootRoute() {
    const loginToken = useSelector(state => state.Auth.token);
    if (!loginToken) {
        return (
            <NavigationContainer>
                <AuthRoute />
            </NavigationContainer>
        );
    } else {
        return (

            <HomeRoute />

        );
    }

}

export default RootRoute;
