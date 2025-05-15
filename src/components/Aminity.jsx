import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Aminity = ({ label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

export default Aminity

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(18),
        paddingVertical: verticalScale(6),
        borderRadius: scale(100),
        marginStart: moderateScale(5)

    },
    label: {
        fontSize: scale(15),
        fontWeight: "500",
        color: Colors.WHITE,
    }
})