import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NavigationStrings from '../constants/NavigationStrings';
import { Room, RoomDetails, RoomDetailsPage } from '../screens/room-management/components';
const RoomDetailsStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.ROOM} component={Room} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAILS} component={RoomDetails} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAIL_PAGE} component={RoomDetailsPage}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }}
            />
        </Stack.Navigator>
    )
}

export default RoomDetailsStack