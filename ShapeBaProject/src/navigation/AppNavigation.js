import { Image } from 'expo-status-bar';
import React, { useState } from "react";

// Navigate
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icon
import { Ionicons } from '@expo/vector-icons';
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
import { Button } from '@rneui/themed';

const MainStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// const DayStack = createBottomTabNavigator();

// function DashboardDayNav() {
//     return (
//         <DayStack.Navigator>
//             <DayStack.Screen name="DashboardDayScreen" component={DashboardDayScreen} />
//         </DayStack.Navigator>
//     )
// }

// Navigator From Dashboard to AddMeal
function MainNavigator() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
            <MainStack.Screen name="DashboardDayScreen" component={DashboardDayScreen} />
            <MainStack.Screen name="DetailMealsScreen" component={DetailMealsScreen} />
            <MainStack.Screen name="AddMealsScreen" component={AddMealsScreen} />
            <MainStack.Screen name="RecommendScreen" component={RecommendScreen} />
        </MainStack.Navigator>
    )
}




// Navigator in Profile Page
function ProfileNavigate() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <ProfileStack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
            <ProfileStack.Screen name="StartNewGoalScreen" component={StartNewGoalScreen} />
        </ProfileStack.Navigator>
    )
}

//topTab DashboardDay
function MyTopTabs() {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="MainNavigator" component={MainNavigator}  
        options={({route}) => ({
            tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route)
                console.log(routeName)
                if (routeName === 'DetailMealsScreen') {
                    
                    return { display: "none" }
                  }
                return
            })(route),
            title: "Day"
        })}
        />
        <TopTab.Screen name="DashboardWeekScreen" component={DashboardWeekScreen} options={{ title: "Week" }}/>
        <TopTab.Screen name="DashboardMonthScreen" component={DashboardMonthScreen} options={{ title: "Month" }}/>
      </TopTab.Navigator>
    );
  }

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator  
                screenOptions={{
                // headerShown: false,
            }}>
            <BottomTab.Screen name="Home" component={MyTopTabs} 
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name="ios-home" size={size} color={color} />
                    },
                }}
            />
            <BottomTab.Screen name="Profile" component={ProfileNavigate}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name="ios-star" size={size} color={color} />
                    },
                }}
            />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

