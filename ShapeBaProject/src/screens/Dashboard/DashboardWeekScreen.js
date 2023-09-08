import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const listFood = (food, gram, cal) => {
    return (
        <View className="flex-row justify-between  ">
            <View className="flex-row gap-6 pl-3 items-center">
                <Text className="font-normal text-base text-darkgray">{food}</Text>
            </View>
            <Text className="font-normal text-base text-darkgray mr-3">{gram} g {cal} cals</Text>
        </View>
    )
}

const DashboardWeekScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.content, styles.c2]}>

                    </View>
                    <View style={[styles.content, styles.c1]}>
                        <Text className="text-white text-base font-bold p-2 pl-4" >Food Highest in calories</Text>
                        <View style={[styles.content, styles.c3]}>
                            <View className="gap-4">
                                {listFood("Oatmeal", 150, 780)}
                                <View className="border-b  border-Darkgray opacity-50" />
                                {listFood("Oatmeal", 150, 780)}
                                <View className="border-b  border-Darkgray opacity-50" />
                                {listFood("Oatmeal", 150, 780)}
                                <View className="border-b  border-Darkgray opacity-50" />
                                {listFood("Oatmeal", 150, 780)}

                            </View>
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

    },
    c1: {
        backgroundColor: '#EC744A',
        elevation: 10,

        // height: 200
    },

    c2: {
        backgroundColor: 'white',
        elevation: 10,
        height: 250
    },
    c3: {
        backgroundColor: 'white',
        marginTop: 0,
        marginBottom: -20,
        height: 300,
        paddingTop: 20
    },
});

export default DashboardWeekScreen;