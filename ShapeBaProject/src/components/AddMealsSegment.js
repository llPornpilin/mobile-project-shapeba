import { StyleSheet, View, Text, FlatList, Modal, Pressable, TouchableHighlight} from 'react-native';
import React, { Component, useState, useRef, useEffect } from "react";

// segmant tab
import SegmentedControlTab from "react-native-segmented-control-tab";
// renderItemSeparator
import { renderItemSeparator } from '../screens/Meal/DetailMealsScreen'
// Swipeable
import SwipeableFlatList from 'react-native-swipeable-list';
// Icon
import { FontAwesome, Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';
// Bottom Modal
import { AddMealBottomModal, CreateMealBottomModal } from './AddMealBottomSheet';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addMealSelector } from '../store/slice/mealsSlice';
import { setMenus, delMenu } from '../store/slice/mealsSlice';
// Database
import { db, collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from '../../firebase-cofig'


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
const myMeals = [
    { id: 1, name: 'My meals1' },
    { id: 2, name: 'My meals2' },
    { id: 3, name: 'My meals3' },
    { id: 4, name: 'My meals4' },
    { id: 5, name: 'My meals5' },
    { id: 6, name: 'My meals6' },
    { id: 7, name: 'My meals7' },
    { id: 8, name: 'My meals8' },
    { id: 9, name: 'My meals9' },
    { id: 10, name: 'My meals10' },
    { id: 11, name: 'My meals11' },
    { id: 12, name: 'My meals12' },
    { id: 13, name: 'My meals13' },
    { id: 14, name: 'My meals14' },
];

// Swipe Menu
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

// Segment เปลี่ยนหน้า
const AddMealsSegment = (props) => {

    // for Redux
    const dispatch = useDispatch()
    const allMenusStore = useSelector(addMealSelector)
    const allMenus = allMenusStore.allMenus

    // search props from header
    const search = props.search
    console.log("search menu: ", search)

    // test API
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => dispatch(setMenus(data)))
        
    //     console.log("all Menu " + JSON.stringify(allMenus, null, 2))
    // }, [])

    // MyMenu from Database
    const searchMenu = async (searchMenuName) => {
        try {
            const myMenusDatabase = await getDocs(collection(db, "user"))
            const tempDoc = []
            myMenusDatabase.forEach(menu => {
                for (const menuItem of menu.data().myMenu) {
                    if (menuItem.name === searchMenuName) {
                        tempDoc.push({ ...menuItem, key: menu.id });
                        dispatch(setMenus(tempDoc))
                        break;
                    }
                }
            });
            console.log("searched menu from database => ", tempDoc)

            if (tempDoc.length == 0) {
                console.log("\nnot found menu !")
            }
        }
        catch (error) {
            console.error("Error occurred while searching the database:", error);
        }
        
    }

    // ----------------------- Nutrition API ------------------------
    useEffect(() => {
        var query = '1lb brisket and fries';
        if (search != "") {
            fetch('https://api.api-ninjas.com/v1/nutrition?query=' + search, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'wIvbYEMaum9wtqjsPbj5ZA==ABsp5fb3TdHYbd0m',
                'Content-Type': 'application/json',
            },
            })
                .then(response => response.json())
                .then(result => dispatch(setMenus(result)))
                .catch((error) => {
                    console.log("not found menu in API")
                    searchMenu(search);
            });
        }
        else {
            dispatch(delMenu())
        }
    }, [search])
    console.log("allMenu from nutrial API : ", allMenus)
    // -----------------------------------------------------------------


    // select segment
    const [selectedIndex, setSelectIndex] = useState(0)

    // add meal bottom sheet
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const bottomSheetModalRefAdd = useRef(null);
    
    // create own menu bottom sheet
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const bottomSheetModalRefCreate = useRef(null);

    const handlePresentModalAdd = () => {
        console.log(isOpenAdd)
        bottomSheetModalRefAdd.current?.present();
        setTimeout(() => {
            setIsOpenAdd(true);
        }, 100);
    }
    const handlePresentModalCreate = () => {
        console.log(isOpenCreate)
        bottomSheetModalRefCreate.current?.present();
        setTimeout(() => {
            setIsOpenCreate(true);
        }, 100);
    }

    const handleIndexChange = (index) => {
        setSelectIndex(index)
    }
    const renderData = ({ item }) => {
        return (
            <TouchableHighlight style={styles.touchable} underlayColor="#F7F7FB" onPress={handlePresentModalAdd}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text className="mb-5 mt-5 text-base font-semibold" style={{ flex: 1 }}>{item.name}</Text>
                    <AntDesign name="plus" size={15} color="black" style={{paddingRight: 10}} />
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{flex: 1, alignItems: 'center', width: '100%', marginBottom: 20, paddingTop: 30}}>
            <SegmentedControlTab
                tabsContainerStyle={{ width: '80%', borderRadius: 30, overflow: 'hidden', marginBottom: 30}}
                tabStyle={{ borderWidth: 0, backgroundColor: '#F7F7FB'}}
                firstTabStyle={{ marginRight: 5, borderRadius: 30, borderColor: 'white'}}
                lastTabStyle={{ marginLeft: 5, borderRadius: 30, borderColor: 'white'}}
                tabTextStyle={{ color: '#EC744A', fontWeight: 'bold' }}
                activeTabStyle={{ backgroundColor: '#EC744A' }}
                selectedIndex={ selectedIndex }
                allowFontScaling={false}
                values={["All", "My Menu"]} 
                onTabPress = { handleIndexChange }
            />
            {/* เงื่อนไขแสดงหน้า All menu หรือ My menu */}
            {
                selectedIndex === 0 ? 
                    // All
                    <FlatList 
                        style={{ padding: 40, paddingTop: 5, width: '100%' }}
                        // data={allMeals}
                        data={allMenus}
                        renderItem={renderData}
                        keyExtractor={item => item.name}
                        ItemSeparatorComponent={renderItemSeparator}
                    /> : 
                    // My Menu
                    <View style={{width: '100%'}}>
                        <SwipeableFlatList
                            keyExtractor={(item) => item.id.toString()}
                            data={myMeals}
                            renderItem={renderData}
                            maxSwipeDistance={240}
                            renderQuickActions={({ index, item }) => QuickActions(index, item)}
                            contentContainerStyle={{ padding: 40, paddingTop: 5, width: '100%' }}
                            shouldBounceOnMount={false}
                            ItemSeparatorComponent={renderItemSeparator}
                            onSwipeableOpen={false}
                        />
                        {/* Add My Menu Button */}
                        <TouchableHighlight 
                            className="bg-Orange w-14 h-14 rounded-full justify-center items-center"
                            style={{position: 'absolute', right: 30, bottom: 80, elevation: 3}}
                            underlayColor="#EF8E6D"
                            onPress={handlePresentModalCreate}
                        >
                            <FontAwesome5 name="plus" size={20} color="white" />
                        </TouchableHighlight>
                    </View>
            }
            <AddMealBottomModal isOpen={isOpenAdd} setIsOpen={setIsOpenAdd} bottomSheetModalRef={bottomSheetModalRefAdd} />
            <CreateMealBottomModal isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} bottomSheetModalRef={bottomSheetModalRefCreate} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        backgroundColor: 'white'
    }
});

export default AddMealsSegment;