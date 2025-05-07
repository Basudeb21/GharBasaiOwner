import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home, Dashboard, Booking, Others, RoomManagement } from '../screens';
import BottomNavbar from '../components/BottomNavbar';
import NavigationStrings from '../constants/NavigationStrings';
const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomNavbar} />
            <Stack.Screen name={NavigationStrings.HOME} component={Home} />
            <Stack.Screen name={NavigationStrings.BOOKING} component={Booking} />
            <Stack.Screen name={NavigationStrings.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={NavigationStrings.OTHERS} component={Others} />
            <Stack.Screen name={NavigationStrings.ROOM} component={RoomManagement} />
        </Stack.Navigator>
    )
}

export default MainStack