import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import DonutChartContainer from '../../components/donutChart';
import { Ionicons } from '@expo/vector-icons';


const listMeal = (icon, meal, cal) => {
    return (
        <View className="flex-row justify-between  ">
            <View className="flex-row gap-6 pl-3 items-center">
                <Ionicons name={icon} size={24} color="black" />
                <Text className="font-bold text-lg text-darkgray">{meal}</Text>
            </View>
            <Text className="font-bold text-lg text-darkgray mr-3">{cal} cals</Text>
        </View>


    )
}
const btnRecom = (icon, text) => {
    return (
        <TouchableOpacity className="items-center">
            <Image source={icon}
                style={{ width: 55, height: 55 }} />
            <Text className="mt-2">{text}</Text>
        </TouchableOpacity>
    );
}

const DashboardDayScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.content, styles.c1]}>

                    </View>

                    <View style={[styles.content, styles.c2]}>
                        {/* <View className="bg-white w-80 h-100 rounded-3xl mt-5"> */}
                        <Text className="font-bold p-5 text-lg text-Orange " >MEALS TODAY</Text>

                        <View className="gap-4">
                            {listMeal("time-outline", "BreakFast", "1120")}
                            <View className="border-b  border-Darkgray opacity-50" />
                            {listMeal("time-outline", "Brunch", "1120")}
                            <View className="border-b border-Darkgray opacity-50 " />
                            {listMeal("time-outline", "Lunch", "1120")}
                            <View className="border-b border-Darkgray opacity-50 " />
                            {listMeal("time-outline", "Afternoon Lunch", "1120")}
                            <View className="border-b border-Darkgray opacity-50 " />
                            {listMeal("time-outline", "Dinner", "1120")}
                        </View>


                    </View>
                    <View style={[styles.content, styles.c2]}>
                        <Text className="font-bold pt-5 pl-5 text-lg text-Orange " >RECOMMEND</Text>
                        <View className="flex-row gap-5 p-4 ">
                            {btnRecom(require('../../../assets/image/drink.png'), "Drink")}
                            {btnRecom(require('../../../assets/image/dessert.png'), "Dessert")}
                            {btnRecom(require('../../../assets/image/main.png'), "Main Dish")}
                            {btnRecom(require('../../../assets/image/fruit.png'), "Fruit")}

                        </View>
                    </View>

                    {/* <DonutChartContainer /> */}

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
        elevation: 10,

    },
    c1: {
        backgroundColor: '#025146',
        height: 200
    },
    c2: {
        backgroundColor: 'white',
    }
});

export default DashboardDayScreen;