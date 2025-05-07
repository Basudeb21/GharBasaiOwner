import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationStrings from '../constants/NavigationStrings';
import { Dashboard, Home, Others } from '../screens';
import Colors from '../constants/Colors';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Feather from 'react-native-vector-icons/dist/Feather'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'




import { verticalScale } from 'react-native-size-matters';
import RoomDetailsStack from '../navigation/RoomDetailsStack';
import BookingRoomStack from '../navigation/BookingRoomStack';


const BottomNavbar = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.navBar,
                tabBarActiveTintColor: Colors.ACTIVE_NAVIGATION_COLOR,
                tabBarInactiveTintColor: Colors.DISABLED_NAVIGATION_COLOR,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={NavigationStrings.HOME}
                component={Home}
                options={{
                    tabBarLabel: NavigationStrings.HOME,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="home"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.DASHBOARD}
                component={Dashboard}
                options={{
                    tabBarLabel: NavigationStrings.DASHBOARD,
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="dashboard"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={NavigationStrings.ROOM}
                component={RoomDetailsStack}
                options={{
                    tabBarLabel: NavigationStrings.ROOM,
                    tabBarIcon: ({ focused }) => (
                        <Fontisto
                            name="room"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={NavigationStrings.BOOKING}
                component={BookingRoomStack}
                options={{
                    tabBarLabel: NavigationStrings.BOOKING,
                    tabBarIcon: ({ focused }) => (
                        <Fontisto
                            name="ticket-alt"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={NavigationStrings.OTHERS}
                component={Others}
                options={{
                    tabBarLabel: NavigationStrings.OTHERS,
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="menu"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />





        </Tab.Navigator>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({
    navBar: {
        paddingVertical: verticalScale(5)
    }

})