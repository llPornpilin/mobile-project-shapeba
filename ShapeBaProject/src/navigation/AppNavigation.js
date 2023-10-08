import { Image } from 'expo-status-bar';
import React, { useState } from "react";

// Navigate
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icon
import { Ionicons, AntDesign } from '@expo/vector-icons';
// Page
import DashboardDayScreen from '../screens/Dashboard/DashboardDayScreen';
import DashboardWeekScreen from '../screens/Dashboard/DashboardWeekScreen';
import DashboardMonthScreen from '../screens/Dashboard/DashboardMonthScreen';
import DetailMealsScreen from '../screens/Meal/DetailMealsScreen';
import AddMealsScreen from '../screens/Meal/AddMealsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import PersonalInfoScreen from '../screens/Profile/PersonalInfoScreen';
import StartNewGoalScreen from '../screens/Profile/StartNewGoalScreen';
import RecommendScreen from '../screens/Dashboard/RecommendScreen';
import TapToStart from '../screens/ProcessInfo/TapToStart';
import HistoryScreen from '../screens/Profile/HistoryScreen';
import InformationScreen from '../screens/Profile/InformationScreen';
//component
import BottomSheet from "../components/MealBottomSheet";
import { Button } from '@rneui/themed';
import { View, Text, TouchableOpacity } from 'react-native';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { frontEndSelector, setOpenStartDatePicker } from '../store/slice/frontEndSlice';

const MainStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// Navigator From Dashboard to AddMeal
function MainNavigator() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="bottomNavigate" component={BottomNavigate} />
            <MainStack.Screen name="DetailMealsScreen" component={DetailMealsScreen}
            />
            <MainStack.Screen name="AddMealsScreen" component={AddMealsScreen} />
            <MainStack.Screen name="RecommendScreen" component={RecommendScreen} />
            <MainStack.Screen name="TapToStart" component={TapToStart} />
        </MainStack.Navigator>
    )
}




// Navigator in Profile Page
function ProfileNavigate() {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <ProfileStack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
            <ProfileStack.Screen name="StartNewGoalScreen" component={StartNewGoalScreen} />
            <ProfileStack.Screen name="HistoryScreen" component={HistoryScreen}/>
            <ProfileStack.Screen name="InformationScreen" component={InformationScreen}/>
        </ProfileStack.Navigator>
    )
}

// topTab DashboardDay
function MyTopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="DashboardDayScreen" component={DashboardDayScreen}
                options={({ route }) => ({
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route)
                        // console.log(routeName)
                        if (routeName === 'DetailMealsScreen' || routeName === 'RecommendScreen') {
                            return { display: "none" }
                        }
                        return
                    })(route),
                    title: "Day"
                })}
            />
            <TopTab.Screen name="DashboardWeekScreen" component={DashboardWeekScreen} options={{ title: "Week" }} />
            <TopTab.Screen name="DashboardMonthScreen" component={DashboardMonthScreen} options={{ title: "Month" }} />
        </TopTab.Navigator>
    );
}
const headerLeft = () => {
    return (
        <View className="h-10 bg-pink">
            <Text className="text-xl font-bold ml-3">Chiffon!</Text>
            <Text className="text-sm font-bold ml-3 text-Darkgray">Friday, March 24</Text>
        </View>
    );
}

const btnPlus = () => {
    return (
        <View className="-mt-3" >
            <AntDesign name="pluscircle" size={45} color="#025146" />
        </View>
    );
}

function BottomNavigate() {
    //for DatePicker
    const dispatch = useDispatch();
    const frontEndStore = useSelector(frontEndSelector);
    const openStartDatePicker = frontEndStore.openStartDatePicker;
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerTitle: () => headerLeft(),
                headerRight: () => (
                    <TouchableOpacity className="mr-3" onPress={() => dispatch(setOpenStartDatePicker(!openStartDatePicker))}>
                        <AntDesign name="calendar" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    height: 80,
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },

            }}
        >
            <BottomTab.Screen name="Home" component={MyTopTabs}
                options={({ route }) => ({
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route)
                        // console.log(routeName)
                        if (routeName === 'DetailMealsScreen' || routeName === 'RecommendScreen') {

                            return { display: "none" }
                        }
                        return
                    })(route),
                    title: "Home",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="ios-home" size={size} color={color} />
                    },
                })}
            />
            <BottomTab.Screen name="DetailMealsScreen" component={DetailMealsScreen}
                options={{
                    tabBarIcon: () => btnPlus(),
                    presentation: "Modal",
                    headerShown: false,
                    title: ""
                }}
            />
            <BottomTab.Screen name="Profile" component={ProfileNavigate}
                options={({ route }) => ({
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route)
                        if (routeName == 'HistoryScreen' || routeName == 'StartNewGoalScreen' || routeName == 'InformationScreen')  {
                            return {display: "none"}
                        }
                        return
                    })(route),
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person-outline" size={size} color={color} />
                    },
                    headerShown: false,
                })}
            />
        </BottomTab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

