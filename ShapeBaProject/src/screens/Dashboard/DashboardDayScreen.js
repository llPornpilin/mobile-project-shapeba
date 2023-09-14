import { StatusBar } from 'expo-status-bar';
import {
    Easing,
    runTiming,
    useFont,
    useValue,
} from "@shopify/react-native-skia";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, PixelRatio, Pressable } from 'react-native';
import DonutChart from "../../components/DonutChart";
import { useEffect } from 'react';


const listMeal = (icon, meal, cal) => {
    return (
        <View className="flex-row justify-between  ">
            <View className="flex-row gap-5 pl-3 items-center">
                <Image source={icon}
                    style={{ width: 40, height: 40 }} />
                <Text className="font-medium text-base text-Darkgray">{meal}</Text>
            </View>
            <Text className="font-medium text-base text-Darkgray mr-4 mt-2">{cal} cals</Text>
        </View>
    )
}
export const btnRecom = (icon, text) => {
    return (
        <TouchableOpacity className="items-center">
            <Image source={icon}
                style={{ width: 55, height: 55 }} />
            <Text className="mt-2 font-medium text-Darkgray">{text}</Text>
        </TouchableOpacity>
    );
}
//for Donut Chart
const radius = PixelRatio.roundToNearestPixel(80);
const STROKE_WIDTH = 7;
const DashboardDayScreen = () => {
    const targetPercentage = 85 / 100;
    const animationState = useValue(0);

    const animateChart = () => {
        animationState.current = 0;
        runTiming(animationState, targetPercentage, {
            duration: 1250,
            easing: Easing.inOut(Easing.cubic),
        });
    };

    const font = useFont(require("../../../assets/font/Roboto-Bold.ttf"), 20);
    const smallerFont = useFont(require("../../../assets/font/Roboto-Bold.ttf"), 20);

    if (!font || !smallerFont) {
        return <View />;
    }

    // useEffect(() => {
    //     animateChart()
    // })

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <View style={[styles.content, styles.c1]}>
                        {/* <DonutChartContainer /> */}
                        <View style={styles.ringChartContainer}>
                            <DonutChart
                                backgroundColor="white"
                                radius={radius}
                                strokeWidth={STROKE_WIDTH}
                                percentageComplete={animationState}
                                targetPercentage={targetPercentage}
                                font={font}
                                smallerFont={smallerFont}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={animateChart} style={styles.button}>
                        <Text style={styles.buttonText}>Animate !</Text>
                    </TouchableOpacity>

                    <View style={[styles.content, styles.c2]}>
                        {/* <View className="bg-white w-80 h-100 rounded-3xl mt-5"> */}
                        <Text className="font-bold p-5 text-lg text-Orange " >MEALS TODAY</Text>

                        <View className="gap-4">
                            {listMeal(require("../../../assets/img/icons8-sunny-side-up-eggs-96.png"), "BreakFast", "1120")}
                            <View className="border-b  border-Darkgray opacity-20" />
                            {listMeal(require("../../../assets/img/icons8-vegetarian-food.png"), "Brunch", "150")}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-thanksgiving-96.png"), "Lunch", "920")}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-pie-96.png"), "Afternoon Lunch", "310")}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-steak-96.png"), "Dinner", "830")}
                        </View>


                    </View>
                    <View style={[styles.content, styles.c2]}>
                        <Text className="font-bold pt-5 pl-5 text-lg text-Orange " >RECOMMEND</Text>
                        <View className="flex-row gap-4 p-5 ">
                            {btnRecom(require('../../../assets/img/drink.png'), "Drink")}
                            {btnRecom(require('../../../assets/img/dessert.png'), "Dessert")}
                            {btnRecom(require('../../../assets/img/main.png'), "Main Dish")}
                            {btnRecom(require('../../../assets/img/fruit.png'), "Fruit")}

                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FB',
        alignItems: 'center',

    },
    content: {
        width: 320,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        elevation: 5,

    },
    c1: {
        backgroundColor: '#025146',
        height: 220,
        justifyContent: 'center'
    },
    c2: {
        backgroundColor: 'white',
    },
    ringChartContainer: {
        width: radius * 2,
        height: radius * 2,
        marginLeft: 20,
        marginTop: 20
    },
    button: {
        marginTop: 40,
        backgroundColor: "orange",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 10,
    },
});

export default DashboardDayScreen;