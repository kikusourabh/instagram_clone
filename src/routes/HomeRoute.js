import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Feeds from '../screens/Feeds';
import Search from '../screens/Search';
import AddPost from '../screens/AddPost';
import ActivityList from '../screens/ActivityList';
import Profile from '../screens/Profile';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IOIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import FWIcon from 'react-native-vector-icons/FontAwesome';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import { View, Image } from 'react-native';
import { Colors } from '../cofig/Colors';
import { Styles } from '../cofig/Styles';

const Tab = createBottomTabNavigator();
function HomeRoute() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 44, backgroundColor: Colors.white }} />
            <View style={{ height: 56, paddingStart: 16, paddingEnd: 16, backgroundColor: Colors.white, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <SLIcon name="camera" size={30} color={Colors.acent} />
                </View>
                <View style={{ flex: 7, alignItems: 'center' }}>
                    <Image
                        resizeMode="contain"
                        style={([Styles.logo, { height: 35, width: "30%" }])}
                        width={"90%"}
                        source={require('../assets/Instagram_logo.png')}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <FIcon name="send" size={30} color={Colors.acent} />
                </View>
            </View>
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
                            if (route.name === "Profile") {
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
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default HomeRoute;