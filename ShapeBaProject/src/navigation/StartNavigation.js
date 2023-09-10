import React from 'react';

// Navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Page
import StartScreen from '../screens/StartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProcessInfoScreen1 from '../screens/ProcessInfo/ProcessInfoScreen1';
import ProcessInfoScreen2 from '../screens/ProcessInfo/ProcessInfoScreen2';
import ProcessInfoScreen3 from '../screens/ProcessInfo/ProcessInfoScreen3';

import DashboardDayScreen from '../screens/Dashboard/DashboardDayScreen';

const StartStack = createNativeStackNavigator();
export default function StartNavigator() {
    return (
        <NavigationContainer>
            <StartStack.Navigator>
                <StartStack.Screen name="StartScreen" component={StartScreen}/>
                <StartStack.Screen name="SignInScreen" component={SignInScreen}/>
                <StartStack.Screen name="SignUpScreen" component={SignUpScreen}/>
                <StartStack.Screen name="ProcessInfoScreen1" component={ProcessInfoScreen1}/>
                <StartStack.Screen name="ProcessInfoScreen2" component={ProcessInfoScreen2}/>
                <StartStack.Screen name="ProcessInfoScreen3" component={ProcessInfoScreen3}/>
                <StartStack.Screen name="DashboardDayScreen" component={DashboardDayScreen}/>
            </StartStack.Navigator>
        </NavigationContainer>
    )
}
