import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { btnRecom } from './DashboardDayScreen';

export const RecmFood = ({ item }) => {
    return (
        <>
            <View className="flex-row justify-between p-4 gap-11">
                <View className="flex-row  items-center justify-center">
                    <Text className="font-medium text-base text-Darkgray">{item.name} </Text>
                    <Text className="font-medium text-xs text-Darkgray pt-1">{item.gram} g {item.cal} cals</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require("../../../assets/img/plus.png")}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

            </View>
            <View className="border-b  border-Darkgray opacity-20" />
        </>

    )
}


const RecommendScreen = () => {
    const data = [
        { name: 'Oatmeal', gram: 150, cal: 780 },
        { name: 'Tuna rice', gram: 150, cal: 780 },
        { name: 'Salad bacon', gram: 150, cal: 780 },
        { name: 'Chocmint', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },

    ];
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text className="flex text-white text-2xl font-medium ">Recommended</Text>
                    </View>

                    <View className="flex-row gap-4 p-5 ">
                        {btnRecom(require('../../../assets/img/drink.png'), "Drink")}
                        {btnRecom(require('../../../assets/img/dessert.png'), "Dessert")}
                        {btnRecom(require('../../../assets/img/main.png'), "Main Dish")}
                        {btnRecom(require('../../../assets/img/fruit.png'), "Fruit")}
                    </View>
                    <View className="pt-5">
                        {
                            data.map((item, index) => <RecmFood item={item} key={index} />)
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    header: {
        backgroundColor: '#025146',
        width: "100%",
        height: 150,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
});

export default RecommendScreen;