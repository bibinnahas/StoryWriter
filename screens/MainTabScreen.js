import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        // style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={DetailStackScreen}
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="ExploreScreen"
            component={ExploreStackScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        } 
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen}
            options={{
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#009387" onPress={() =>
                            navigation.
                                openDrawer()
                        }></Icon.Button>)
            }} />
    </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
    <DetailStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
        <DetailStack.Screen name="Details" component={DetailScreen}
            options={{
                headerLeft: () => (
                    <Icon.Button name="anfroid-menu" size={25}
                        backgroundColor="#009387" onPress={() =>
                            navigation.
                                openDrawer()
                        }></Icon.Button>)
            }} />
    </DetailStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen}
            options={{
                headerLeft: () => (
                    <Icon.Button name="anfroid-menu" size={25}
                        backgroundColor="#009387" onPress={() =>
                            navigation.
                                openDrawer()
                        }></Icon.Button>)
            }} />
    </ProfileStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
    <ExploreStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
        <ExploreStack.Screen name="Explore" component={DetailScreen}
            options={{
                headerLeft: () => (
                    <Icon.Button name="anfroid-menu" size={25}
                        backgroundColor="#009387" onPress={() =>
                            navigation.
                                openDrawer()
                        }></Icon.Button>)
            }} />
    </ExploreStack.Navigator>
);