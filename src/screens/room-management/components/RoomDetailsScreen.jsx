import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Colors from '../../../constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Header from '../../../components/Header';

const RoomDetailsScreen = ({ route }) => {
    const { roomType } = route.params;

    const getRoomDetails = (type) => {
        switch (type) {
            case 'deluxe':
                return {
                    occupied: 18,
                    available: 12,
                    total: 30,
                    name: 'Deluxe Rooms'
                };
            case 'luxury':
                return {
                    occupied: 22,
                    available: 8,
                    total: 30,
                    name: 'Luxury Rooms'
                };
            case 'normal':
                return {
                    occupied: 15,
                    available: 15,
                    total: 30,
                    name: 'Normal Rooms'
                };
            default:
                return {
                    occupied: 0,
                    available: 0,
                    total: 0,
                    name: 'Unknown'
                };
        }
    };

    const roomDetails = getRoomDetails(roomType);

    const roomData = [
        {
            name: 'Occupied',
            count: roomDetails.occupied,
            color: Colors.OCCUPIED,
            legendFontColor: '#7F7F7F',
            legendFontSize: 12
        },
        {
            name: 'Available',
            count: roomDetails.available,
            color: Colors.RENTABLE,
            legendFontColor: '#7F7F7F',
            legendFontSize: 12
        }
    ];

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

    return (
        <View>
            <Header title={roomDetails.name} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>{roomDetails.name} Status</Text>
                    <Text style={styles.subtitle}>Total: {roomDetails.total} rooms</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.chartWrapper}>
                            <PieChart
                                data={roomData}
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
                            <View style={styles.statItem}>
                                <View style={[styles.colorBox, { backgroundColor: Colors.OCCUPIED }]} />
                                <Text style={styles.statText}>Occupied: {roomDetails.occupied}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <View style={[styles.colorBox, { backgroundColor: Colors.RENTABLE }]} />
                                <Text style={styles.statText}>Available: {roomDetails.available}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

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
    chartStyle: {
        marginLeft: moderateScale(-10),
    },
    statsContainer: {
        width: '40%',
        paddingLeft: moderateScale(5),
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
        color: '#333',
        textAlign: 'center',
        width: '100%',
    },
    subtitle: {
        fontSize: moderateScale(14),
        marginBottom: verticalScale(20),
        color: '#555',
        textAlign: 'center',
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
});

export default RoomDetailsScreen;