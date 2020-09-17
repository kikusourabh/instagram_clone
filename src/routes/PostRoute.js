import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PostsGrid from '../screens/PostsGrid';
import PostTagGrid from '../screens/PostTagGrid';
import { Colors } from '../cofig/Colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator()
function PostRoute() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconname;
                    if (route.name === 'Post') {
                        iconname = 'grid'
                    } else {
                        iconname = 'tooltip-account'
                    }
                    return <MCIcon name={iconname} size={25} color={color} />
                }
            })}
            tabBarOptions={{
                showLabel: false,
                showIcon: true,
                activeTintColor: Colors.acent,
                inactiveTintColor: Colors.inactive,
                indicatorStyle: { backgroundColor: Colors.acent }
            }}
        >
            <Tab.Screen name="Post" component={PostsGrid} />
            <Tab.Screen name="Tag" component={PostTagGrid} />
        </Tab.Navigator>
    )
}

export default PostRoute;