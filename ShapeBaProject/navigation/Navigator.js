import React from 'react';

// Navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Page
import TestPage from '../screens/Test';
import StartScreen from '../screens/StartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProcessInfoScreen1 from '../screens/ProcessInfoScreen1';
import ProcessInfoScreen2 from '../screens/ProcessInfoScreen2';
import ProcessInfoScreen3 from '../screens/ProcessInfoScreen3';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import DashboardDayScreen from '../screens/DashboardDayScreen';
import DashboardWeekScreen from '../screens/DashboardWeekScreen';
import DashboardMonthScreen from '../screens/DashboardMonthScreen';
import DetailMealsScreen from '../screens/DetailMealsScreen';
import AddMealsScreen from '../screens/AddMealsScreen';
import AddMyMealsScreen from '../screens/AddMyMealsScreen';
import RecommendScreen from '../screens/RecommendScreen';
import StartNewGoalScreen from '../screens/StartNewGoalScreen';

const Stack = createNativeStackNavigator();

export default function TestNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TestPage'>
                <Stack.Screen name="TestPage" component={TestPage} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="ProcessInfoScreen1" component={ProcessInfoScreen1} />
                <Stack.Screen name="ProcessInfoScreen2" component={ProcessInfoScreen2} />
                <Stack.Screen name="ProcessInfoScreen3" component={ProcessInfoScreen3} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
                <Stack.Screen name="DashboardDayScreen" component={DashboardDayScreen} />
                <Stack.Screen name="DashboardWeekScreen" component={DashboardWeekScreen} />
                <Stack.Screen name="DashboardMonthScreen" component={DashboardMonthScreen} />
                <Stack.Screen name="DetailMealsScreen" component={DetailMealsScreen} />
                <Stack.Screen name="AddMealsScreen" component={AddMealsScreen} />
                <Stack.Screen name="AddMyMealsScreen" component={AddMyMealsScreen} />
                <Stack.Screen name="RecommendScreen" component={RecommendScreen} />
                <Stack.Screen name="StartNewGoalScreen" component={StartNewGoalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
