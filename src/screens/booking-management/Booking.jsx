import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookingChart from './component/BookingChart'
import RoomPrimaryDetailsCard from '../../components/RoomPrimaryDetailsCard'
import Colors from '../../constants/Colors'

const Booking = () => {
    const roomData = [
        {
            roomNo: '101',
            capacity: 2,
            color: Colors.PAID_ROOM,
            status: 'deluxe',
            type: 'paid',
            rent: 2500,
        },
        {
            roomNo: '102',
            capacity: 3,
            color: Colors.UNPAID_ROOM,
            status: 'luxury',
            type: 'unpaid',
            rent: 4000,
        },
        {
            roomNo: '103',
            capacity: 1,
            color: Colors.VACENT_ROOM,
            status: 'normal',
            type: 'vacant',
            rent: 1500,
        },
        {
            roomNo: '101',
            capacity: 2,
            color: Colors.PAID_ROOM,
            status: 'deluxe',
            type: 'paid',
            rent: 2500,
        },
        {
            roomNo: '102',
            capacity: 3,
            color: Colors.PAID_ROOM,
            status: 'luxury',
            type: 'paid',
            rent: 4000,
        },
        {
            roomNo: '103',
            capacity: 1,
            color: Colors.UNPAID_ROOM,
            status: 'normal',
            type: 'unpaid',
            rent: 1500,
        },
        {
            roomNo: '104',
            capacity: 5,
            color: Colors.PAID_ROOM,
            status: 'deluxe',
            type: 'paid',
            rent: 5500,
        },
        {
            roomNo: '105',
            capacity: 3,
            color: Colors.VACENT_ROOM,
            status: 'luxury',
            type: 'vacant',
            rent: 4200,
        },
        {
            roomNo: '106',
            capacity: 1,
            color: Colors.PAID_ROOM,
            status: 'normal',
            type: 'paid',
            rent: 1600,
        },
    ];


    return (
        <ScrollView style={{ backgroundColor: Colors.PAGE_COLOR }}>
            <BookingChart />
            <View>
                {roomData.map((room, index) => (
                    <RoomPrimaryDetailsCard key={index} data={room} screenType="Booking" />
                ))}
            </View>
        </ScrollView>
    )
}

export default Booking
