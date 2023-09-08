import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
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

const DashboardDayScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View className="bg-green w-80 h-60 rounded-3xl mt-5">

                    </View>
                    {/* <View style={styles.shadowCard}> */}
                    <View className="bg-white w-80 h-100 rounded-3xl mt-5">
                        <Text className="font-bold p-5 text-lg text-orange " >MEALS TODAY</Text>

                        <View className="gap-4">
                            {listMeal("time-outline", "BreakFast", "1120")}
                            <View className="border-b  border-darkgray opacity-50" />
                            {listMeal("time-outline", "Brunch", "1120")}
                            <View className="border-b border-darkgray opacity-50 " />
                            {listMeal("time-outline", "Lunch", "1120")}
                            <View className="border-b border-darkgray opacity-50 " />
                            {listMeal("time-outline", "Afternoon Lunch", "1120")}
                            <View className="border-b border-darkgray opacity-50 " />
                            {listMeal("time-outline", "Dinner", "1120")}
                        </View>


                    </View>
                    {/* </View> */}

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

});

export default DashboardDayScreen;