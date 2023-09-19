import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable, useState, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { AntDesign, Entypo } from '@expo/vector-icons';
import SwipeableFlatList from 'react-native-swipeable-list';
import { FontAwesome, Feather } from '@expo/vector-icons';

// Page
import AddMealsScreen from './AddMealsScreen';
import { color } from 'd3';


const greenHeader = (navigation) => {
    return (
        <Header backgroundColor="#025146" containerStyle={styles.header}
            leftComponent={
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }} onPress={() => navigation.goBack()}>
                        <AntDesign name="leftcircleo" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, width: '200%', fontWeight: 'bold' }}>BreakFast</Text>
                </View>
            }
            // centerComponent={{icon: 'menu', color: '#fff', iconStyle: {color: 'white', paddingLeft: 90, marginTop: 5}}}
            rightComponent={
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 3, marginTop: 3 }}>
                        <Entypo name="flash" size={22} color="white" />
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, width: '150%', fontWeight: 'bold' }}>720 cals</Text>
                </View>
            }
        >
        </Header>
    )
}

export const DetailMealsPattern = ({ item }) => {
    return (
        <>
            <View style={{ paddingLeft: 10, backgroundColor: 'white' }}>
                <Text className="font-semibold mt-3 text-base">{item.name}</Text>
                <Text className="mb-3">100 g , 30 cals</Text>
            </View>
        </>
    )
}

const extractItemKey = item => {
    return item.id.toString();
};

export function renderItemSeparator() {
    return <View style={{ backgroundColor: '#A4A4A4', height: 1 }} />;
}

const DetailMealsScreen = ({ navigation, props }) => {
    // function delete meals
    const deleteItem = itemId => {
        // const newState = [...data];
        // const filteredState = newState.filter(item => item.id !== itemId);
        // return setData(filteredState);
    };

    // item in swipe
    const QuickActions = (index, qaItem) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                <View style={[styles.button, { backgroundColor: '#EF5353' }]}>
                    <Pressable>
                        <FontAwesome name="trash-o" size={28} color="white" />
                    </Pressable>
                </View>
                <View style={[styles.button, { backgroundColor: '#FBBB57' }]}>
                    <Pressable>
                        <Feather name="edit" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
        );
    };

    const allMeals = [
        { id: 1, name: 'meals1' },
        { id: 2, name: 'meals2' },
        { id: 3, name: 'meals3' },
        { id: 4, name: 'meals4' },
        { id: 5, name: 'meals5' },
        { id: 6, name: 'meals6' },
        { id: 7, name: 'meals7' },
        { id: 8, name: 'meals8' },
        { id: 9, name: 'meals9' },
        { id: 10, name: 'meals10' },
        { id: 11, name: 'meals11' },
        { id: 12, name: 'meals12' },
        { id: 13, name: 'meals13' },
        { id: 14, name: 'meals14' },
    ];

    return (
        <View style={styles.container}>
            {greenHeader(navigation)}
            <SwipeableFlatList
                keyExtractor={extractItemKey}
                data={allMeals}
                renderItem={({ item }) => (
                    <DetailMealsPattern item={item} />
                )}
                maxSwipeDistance={240}
                renderQuickActions={({ index, item }) => QuickActions(index, item)}
                contentContainerStyle={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}
                shouldBounceOnMount={false}
                ItemSeparatorComponent={renderItemSeparator}
                onSwipeableOpen={false}
            />
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 0, }}>
                <TouchableOpacity style={styles.btnAddMeal} onPress={() => navigation.navigate('AddMealsScreen')}>
                    <Text className="font-bold text-white" >Add More Meal</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },
    header: {
        backgroundColor: '#025146',
        height: '15%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 100,
        width: '100%',
        paddingLeft: 20,
        flexDirection: 'row'

    },
    btnAddMeal: {
        backgroundColor: '#EC744A',
        padding: 10,
        marginTop: 30,
        borderRadius: 20,
        width: '50%',
        alignItems: 'center',
        marginBottom: 30,
        elevation: 3
    },
    button: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default DetailMealsScreen;