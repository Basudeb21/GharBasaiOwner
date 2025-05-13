import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'

const BottmAction = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Go To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottmAction

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    btn: {
        backgroundColor: Colors.YELLOW,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
    },
});
