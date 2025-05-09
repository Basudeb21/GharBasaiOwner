import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AutoImageSlider from '../../../components/AutoImageSlider'
import Header from '../../../components/Header'
import RoomDetailsCard from './RoomDetailsCard'
import FacilityCard from '../../../components/FacilityCard'
import { verticalScale } from 'react-native-size-matters'

const RoomDetailsPage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' }
        });

        return () => {
            navigation.getParent()?.setOptions({
                tabBarStyle: {
                    paddingVertical: verticalScale(5)
                }
            });
        };
    }, [navigation]);
    return (
        <View>
            <Header title={"Hotel Details View"} theme='BASIC' />
            <ScrollView style={styles.scroll}>
                <AutoImageSlider />
                <RoomDetailsCard />
                <FacilityCard />
            </ScrollView>

        </View>
    )
}

export default RoomDetailsPage

const styles = StyleSheet.create({
    scroll: {
        marginBottom: verticalScale(60)
    }
})