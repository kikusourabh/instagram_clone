import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Feeds from '../screens/Feeds';
import Search from '../screens/Search';
import AddPost from '../screens/AddPost';
import ActivityList from '../screens/ActivityList';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IOIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import FWIcon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../cofig/Colors';
import ProfileRoute from './ProfileRoute';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();
function HomeRoute() {
    return (


        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconname;
                        if (route.name === "Feeds") {
                            // materialcommunityicon
                            focused ?
                                iconname = "home-variant" :
                                iconname = "home-variant-outline"
                            return <MCIcon name={iconname} size={size} color={color} />
                        }
                        if (route.name === "Search") {
                            // ionicons
                            focused ?
                                iconname = "search-sharp" :
                                iconname = "search-outline"
                            return <IOIcon name={iconname} size={size} color={color} />
                        }
                        if (route.name === "AddPost") {
                            // feather
                            iconname = "plus-square"
                            return <FIcon name={iconname} size={size} color={color} />
                        }
                        if (route.name === "ActivityList") {
                            // ionicon
                            focused ?
                                iconname = "heart-sharp" :
                                iconname = "heart-outline"
                            return <IOIcon name={iconname} size={size} color={color} />

                        }
                        if (route.name === "ProfileRoute") {
                            // FontAwsome
                            focused ?
                                iconname = "user-circle" :
                                iconname = "user-circle-o"
                            return <FWIcon name={iconname} size={size} color={color} />

                        }


                    },
                })}
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: Colors.acent,
                    inactiveTintColor: Colors.acent,
                }}
            >
                <Tab.Screen name="Feeds" component={Feeds} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="AddPost" component={AddPost} />
                <Tab.Screen name="ActivityList" component={ActivityList} />
                <Tab.Screen name="ProfileRoute" component={ProfileRoute} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default HomeRoute;