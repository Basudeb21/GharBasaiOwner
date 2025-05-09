import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import { PieChart } from 'react-native-chart-kit';

const RoomPieChart = (
    { data, targetScreen }
) => {
    const handleRoomPress = (roomType) => {
        navigation.navigate(targetScreen, { roomType });
    };

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#08130D',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
    };

    const screenWidth = Dimensions.get('window').width;

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Hotel Room Distribution</Text>
                <View style={styles.contentContainer}>
                    <View style={styles.chartWrapper}>
                        <PieChart
                            data={data}
                            width={moderateScale(screenWidth * 0.55)}
                            height={verticalScale(190)}
                            chartConfig={chartConfig}
                            accessor="count"
                            backgroundColor="transparent"
                            paddingLeft="35"
                            absolute
                            avoidFalseZero
                            hasLegend={false}
                            style={styles.chartStyle}
                        />
                    </View>
                    <View style={styles.statsContainer}>
                        {data.map((room, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.statItem}
                                onPress={() => handleRoomPress(room.type)}
                            >
                                <View style={[styles.colorBox, { backgroundColor: room.color }]} />
                                <Text style={styles.statText}>
                                    {room.name}: {room.count}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default RoomPieChart

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingVertical: verticalScale(20),
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: scale(15),
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(10),
        elevation: 3,
    },
    contentContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chartWrapper: {
        width: '58%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
    statsContainer: {
        width: '40%',
        paddingLeft: moderateScale(5),
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginBottom: verticalScale(20),
        color: '#333',
        textAlign: 'center',
        width: '100%',
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: verticalScale(8),
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
    },
    colorBox: {
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(4),
        marginRight: moderateScale(10),
    },
    statText: {
        fontSize: moderateScale(12),
        color: '#555',
    },
})