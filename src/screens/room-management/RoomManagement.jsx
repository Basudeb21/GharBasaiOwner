import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoomStats from './components/RoomStats'
import RoomPrimaryDetailsCard from '../../components/RoomPrimaryDetailsCard'
import Colors from '../../constants/Colors'

const RoomManagement = () => {
    const roomData = [
        {
            roomNo: '101',
            capacity: 2,
            color: Colors.DELUX_ROOM,
            type: 'deluxe',
            rent: 2500,
            status: 'paid',
        },
        {
            roomNo: '102',
            capacity: 3,
            color: Colors.LUXURY_ROOM,
            type: 'luxury',
            rent: 4000,
            status: 'unpaid',
        },
        {
            roomNo: '103',
            capacity: 1,
            color: Colors.NORMAL_ROOM,
            type: 'normal',
            rent: 1500,
            status: 'vacant',
        },
        {
            roomNo: '101',
            capacity: 2,
            color: Colors.DELUX_ROOM,
            type: 'deluxe',
            rent: 2500,
            status: 'paid',
        },
        {
            roomNo: '102',
            capacity: 3,
            color: Colors.LUXURY_ROOM,
            type: 'luxury',
            rent: 4000,
            status: 'paid',
        },
        {
            roomNo: '103',
            capacity: 1,
            color: Colors.NORMAL_ROOM,
            type: 'normal',
            rent: 1500,
            status: 'unpaid',
        },
        {
            roomNo: '104',
            capacity: 5,
            color: Colors.DELUX_ROOM,
            type: 'deluxe',
            rent: 5500,
            status: 'paid',
        },
        {
            roomNo: '105',
            capacity: 3,
            color: Colors.LUXURY_ROOM,
            type: 'luxury',
            rent: 4200,
            status: 'vacant',
        },
        {
            roomNo: '106',
            capacity: 1,
            color: Colors.NORMAL_ROOM,
            type: 'normal',
            rent: 1600,
            status: 'paid',
        },
    ];

    return (
        <ScrollView style={{ backgroundColor: Colors.PAGE_COLOR }}>
            <RoomStats />
            <View>
                {roomData.map((room, index) => (
                    <RoomPrimaryDetailsCard key={index} data={room} screenType="RoomManagement" />
                ))}
            </View>
        </ScrollView>
    )
}

export default RoomManagement
