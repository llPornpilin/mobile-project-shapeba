import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native-elements';

const RecmFood = ({ item }) => {
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

const btnRecom = (icon, text, navigation) => {
    return (
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate('RecommendScreen')}>
            <Image source={icon}
                style={{ width: 55, height: 55 }} />
            <Text className="mt-2 font-medium text-Darkgray">{text}</Text>
        </TouchableOpacity>
    );
}


const RecommendScreen = ({ navigation }) => {
    const data = [
        { name: 'Oatmeal', gram: 150, cal: 780 },
        { name: 'Tuna rice', gram: 150, cal: 780 },
        { name: 'Salad bacon', gram: 150, cal: 780 },
        { name: 'Chocmint', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu', gram: 150, cal: 780 },
        { name: 'Bingsu55', gram: 150, cal: 780 },

    ];
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <Header backgroundColor="#025146" containerStyle={styles.header}
                        leftComponent={
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }} onPress={() => navigation.goBack()}>
                                    <AntDesign name="leftcircleo" size={25} color="white" />
                                </TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 20, width: '200%', fontWeight: 'bold' }}>Recommend</Text>
                            </View>
                        }

                    >
                    </Header>

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
        height: '18%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 100,
        width: '100%',
        paddingLeft: 20,
        flexDirection: 'row',

    },
});

export default RecommendScreen;