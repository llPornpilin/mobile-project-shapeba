import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';


const DashboardMonthScreen = () => {
    return (
        <SafeAreaView >
            <ScrollView >
                <View style={styles.container}>
                    <View style={[styles.content, styles.c1]}>
                        <View className="flex-row">
                            <View>
                                <Text className="text-Darkgray mt-6 ml-6">Average</Text>
                                <View className="ml-6 flex-row">
                                    <Text className="text-lg font-bold mr-2">1721 Cals</Text>
                                    <Image source={require('../../../assets/img/icons8-fire.png')}
                                        style={{ width: 20, height: 20, marginTop: 2 }} />
                                </View>
                            </View>
                            <View className="ml-5">
                                <Text className="text-Darkgray mt-6 ml-6">Goal</Text>
                                <View className="ml-6 flex-row">
                                    <Text className="text-lg font-bold mr-2">1650 Cals</Text>
                                </View>
                            </View>
                        </View>

                        <View className="">
                            <Text className="text-Darkgray text-xs text-right mt-8 mr-3">Goal</Text>

                        </View>
                        <View className="border-b  border-Darkgray opacity-50 " />
                        <View className="-mt-10 mr-5">

                        </View>


                    </View>
                    <View className="flex-row">
                        <View style={[styles.content, styles.c2]}>
                            <Text className="text-white text-base font-bold text-center">Your Progress</Text>
                            <Text className="text-white text-xl font-bold text-center mt-4">March</Text>
                            <Text className="text-white text-xl font-bold text-center">2023</Text>
                        </View>
                        <View style={[styles.content, styles.c3]}>
                            <Text className="text-Green text-base font-bold text-center">Reach Goal</Text>
                            <Text className="text-Green text-xl font-bold text-center mt-4">25/31</Text>
                            <Text className="text-Green text-xl font-bold text-center">Days</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
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

    },
    c1: {
        backgroundColor: 'white',
        elevation: 10,
        height: 300
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
    },

});

export default DashboardMonthScreen;