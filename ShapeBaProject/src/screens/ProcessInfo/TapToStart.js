import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const label = (img, text) => {
    return (
        <View style={styles.c1}>
            <Image source={img} style={{ width: 50, height: 50 }}></Image>
            <Text className="font-bold text-base text-Green ml-3">{text}</Text>
        </View>
    );

}

const TapToStart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <Text className="font-bold text-2xl text-Green mt-5">TARGET WEIGHT</Text>
                <Text className="font-bold text-2xl text-Green">55 KG</Text>
                <Text className="font-bold text-lg text-Green">Your daily energy require</Text>
                <Text className="font-bold text-2xl text-Orange mt-3">2130 Cals / Day</Text>
                <Text className="font-bold text-sm text-Green mt-3">during 2 month</Text>
            </View>
            <View className="mt-11">
                {label(require("../../../assets/img/icons8-note.png"), "Record What You Eat")}
                {label(require("../../../assets/img/icons8-math.png"), "Calculate Calories")}
                {label(require("../../../assets/img/icons8-chart.png"), "Graph Summary ")}
                {label(require("../../../assets/img/icons8-fix.png"), "Customize menu list")}
            </View>
            <TouchableOpacity>
                <Text className="mb-5 mt-5 text-base font-semibold text-white">Tap to Start</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#025146',
        alignItems: 'center',

    },
    box1: {
        backgroundColor: 'white',
        width: "100%",
        height: "35%",
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    c1: {
        width: 290,
        height: 80,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
        // justifyContent: 'center',
    },
    img: {
        width: 50,
        height: 50,
    }
});

export default TapToStart