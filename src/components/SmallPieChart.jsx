import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { scale } from 'react-native-size-matters';
import Svg, { Circle } from 'react-native-svg';

const SmallPieChart = ({ percentage, label = "Loading...", color }) => {
    const radius = 35;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = percentage / 100;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <View style={styles.wrapper}>
            <View style={styles.chartContainer}>
                <Svg width={100} height={100}>
                    <Circle
                        stroke={Colors.DEACTIVE}
                        fill="none"
                        cx={50}
                        cy={50}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        stroke={color}
                        fill="none"
                        cx={50}
                        cy={50}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        rotation="-90"
                        origin="50,50"
                    />
                </Svg>

                <View style={styles.centerTextWrapper}>
                    <Text style={styles.percentageText}>{percentage}%</Text>
                </View>
            </View>

            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
};

export default SmallPieChart;

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: scale(10),
        alignSelf: "flex-start"
    },
    chartContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        position: 'relative',
    },
    centerTextWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentageText: {
        fontSize: scale(12),
        fontWeight: 'bold',
        color: Colors.BLACK,
    },
    labelText: {
        fontSize: scale(11),
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontWeight: '600',
        alignSelf: "center"
    },
});
