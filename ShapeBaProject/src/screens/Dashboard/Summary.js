import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';


const listMeal = (icon, meal, cal) => {
    return (
        <View className="flex-row justify-between" >
            <View className="flex-row gap-5 pl-3 items-center">
                <Image source={icon}
                    style={{ width: 40, height: 40 }} />
                <Text className="font-medium text-base text-Darkgray">{meal}</Text>
            </View>
            <Text className="font-medium text-base text-Darkgray mr-4 mt-2">{cal} cals</Text>
        </View>
    )
}

const Summary = ({ route, navigation }) => {
    const date = route.params.selectDate
    console.log("summary date: ", date)
    return (
        <View style={styles.container}>
            {/* header */}
            <View className="w-full h-14 flex justify-center pl-5">
                <View className="flex flex-row">
                    <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }} onPress={() => navigation.goBack()}>
                        <AntDesign name="leftcircleo" size={25} color="white" />
                    </TouchableOpacity>
                    {/* <Text className="text-lg text-white">{date} </Text> */}
                </View>
            </View>
            <Text className="font-bold text-2xl text-white mt-5 pb-2">Total Calories</Text>
            <Text className="font-bold text-2xl text-white  pb-2"> 1860</Text>
            <View className="flex flex-row mt-2">
                <Text className="font-bold text-lg text-white">Carb 100</Text>
                <Text className="font-bold text-lg text-white pl-3">Fat 100</Text>
                <Text className="font-bold text-lg text-white pl-3">Protien 100</Text>
            </View>
            <View style={styles.box2}>
                <Text className="font-bold p-5 text-lg text-Orange pb-6 pt-6" >MEALS SUMMARY</Text>
                <View className="w-full px-6">
                    <View className="gap-4">
                        {listMeal(require("../../../assets/img/icons8-sunny-side-up-eggs-96.png"), "BreakFast", 120)}
                        <View className="border-b  border-Darkgray opacity-20" />
                        {listMeal(require("../../../assets/img/icons8-vegetarian-food.png"), "Brunch", 210)}
                        <View className="border-b border-Darkgray opacity-20 " />
                        {listMeal(require("../../../assets/img/icons8-thanksgiving-96.png"), "Lunch", 500)}
                        <View className="border-b border-Darkgray opacity-20 " />
                        {listMeal(require("../../../assets/img/icons8-pie-96.png"), "Afternoon Lunch", 100)}
                        <View className="border-b border-Darkgray opacity-20 " />
                        {listMeal(require("../../../assets/img/icons8-steak-96.png"), "Dinner", 150)}
                        <View className="border-b border-Darkgray opacity-20 " />
                        {listMeal(require("../../../assets/img/icons8-vegan-food-96.png"), "After Dinner", 300)}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Summary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#025146',
        alignItems: 'center',
        position: 'relative',

    },
    content: {
        width: 320,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,

    },
    c2: {
        backgroundColor: '#025146',
        borderTopEndRadius: 0,
        borderBottomEndRadius: 0,
        height: 160,
        width: "40%",
        elevation: 10,
        padding: 15,
        justifyContent: 'center',
    },
    c3: {
        backgroundColor: 'white',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: 160,
        width: "40%",
        elevation: 10,
        padding: 15,
        justifyContent: 'center',
        alignContent: 'flex-start',
    },

    box2: {
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        borderTopEndRadius: 50,
        marginTop: 50,
        alignItems: 'center',
        // justifyContent: 'center',

    },
})