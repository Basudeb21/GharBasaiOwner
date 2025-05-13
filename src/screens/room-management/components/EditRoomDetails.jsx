import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeaturedImg from '../micro-comps/FeaturedImg'
import Header from '../../../components/Header'

const EditRoomDetails = () => {
    return (
        <View>
            <Header title={"Edit HomeStay Details"} />
            <FeaturedImg />
        </View>
    )
}

export default EditRoomDetails

const styles = StyleSheet.create({})