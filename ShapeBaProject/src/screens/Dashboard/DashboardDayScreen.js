import { StatusBar } from 'expo-status-bar';
import { Easing, runTiming, useFont, useValue } from "@shopify/react-native-skia";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, PixelRatio, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import { useFocusEffect } from "@react-navigation/native";
//component
import DonutChart from "../../components/DonutChart";
import React, { useState, useRef } from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import TapToStart from '../ProcessInfo/TapToStart';
import BottomSheet from '../../components/MealBottomSheet';
import Calendar from '../../components/Calendar';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from "react-native-modern-datepicker";

//redux
import { useDispatch, useSelector } from 'react-redux';
import { frontEndSelector, setOpenStartDatePicker } from '../../store/slice/frontEndSlice';
import { userSelector, getUserId } from '../../store/slice/userSlice'
//firebase
import { db, collection, getDocs, addDoc, doc, deleteDoc, updateDoc, query, where, } from '../../../firebase-cofig';
import { set } from 'react-hook-form';


const listMeal = (icon, meal, cal, navigation) => {
    return (
        <TouchableOpacity className="flex-row justify-between" onPress={() => navigation.navigate('DetailMealsScreen', { header: meal })}>
            <View className="flex-row gap-5 pl-3 items-center">
                <Image source={icon}
                    style={{ width: 40, height: 40 }} />
                <Text className="font-medium text-base text-Darkgray">{meal}</Text>
            </View>
            <Text className="font-medium text-base text-Darkgray mr-4 mt-2">{cal} cals</Text>
        </TouchableOpacity>
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
//for Donut Chart
const radius = PixelRatio.roundToNearestPixel(80);
const STROKE_WIDTH = 6;

//main
const DashboardDayScreen = ({ navigation }) => {
    const targetPercentage = 85 / 100;
    const animationState = useValue(0);
    //for BottomSheet
    const [isOpen, setIsOpen] = useState(false);
    const bottomSheetModalRef = useRef(null);
    const [titleMeal, setTitleMeal] = useState("");
    //get data from redux
    const dispatch = useDispatch();
    const frontEndStore = useSelector(frontEndSelector);
    const userStore = useSelector(userSelector);
    const [dailyMenu, setDailyMenu] = useState([]);

    const [carb, setCarb] = useState(0);
    const [fat, setFat] = useState(0);
    const [protein, setProtein] = useState(0);
    const [cal, setCal] = useState(0);

    const [breakfast, setBreakfast] = useState({});
    const [brunch, setBrunch] = useState({});
    const [lunch, setLunch] = useState({});
    const [afternoonlunch, setAfternoonlunch] = useState({});
    const [dinner, setDinner] = useState({});
    const [afterdinner, setAfterdinner] = useState({});



    //for DatePicker
    const openStartDatePicker = frontEndStore.openStartDatePicker;
    const handleOnPressStartDate = () => {
        dispatch(setOpenStartDatePicker(!openStartDatePicker));
    };


    if (titleMeal != "") {
        // console.log(titleMeal)
        navigation.navigate('DetailMealsScreen', { header: titleMeal })
        setTitleMeal("")
        //close modal
        bottomSheetModalRef.current?.close();
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    }

    //open modal
    const handlePresentModal = () => {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }
    //close modal
    const closeModal = () => {
        bottomSheetModalRef.current?.close();
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    }



    animationState.current = 0;
    runTiming(animationState, targetPercentage, {
        duration: 1250,
        easing: Easing.inOut(Easing.cubic),
    });

    // Get Daily meal by User ID
    const getDailyMenuById = async () => { // Pass the user ID as an argument
        try {
            const userId = await getUserId()
            const currentDate = new Date();
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based, so we add 1 to get the correct month.
            const year = currentDate.getFullYear();
            const today = `${day}/${month}/${year}`;
            console.log("get daily menu", userId)

            const querySnapshot = await getDocs(query(collection(db, "dailyMeal"), where("user_id", "==", userId), where("dateInfo.date", "==", today))); // Use the user's ID passed as an argument
            console.log("Total menu: ", querySnapshot.size);
            const tempDoc = [];
            querySnapshot.forEach((doc) => {
                tempDoc.push({ ...doc.data(), key: doc.id });
            });
            console.log("tempdoc ", tempDoc)
            // Flatten the array if each category is an array of meals
            const meals1 = tempDoc.map((day) => day["breakfast"]);
            const meals2 = tempDoc.map((day) => day["brunch"]);
            const meals3 = tempDoc.map((day) => day["lunch"]);
            const meals4 = tempDoc.map((day) => day["afternoonlunch"]);
            const meals5 = tempDoc.map((day) => day["dinner"]);
            const meals6 = tempDoc.map((day) => day["afterdinner"]);
            setBreakfast(await extractNutrition(meals1.flat()))
            setBrunch(await extractNutrition(meals2.flat()))
            setLunch(await extractNutrition(meals3.flat()))
            setAfternoonlunch(await extractNutrition(meals4.flat()))
            setDinner(await extractNutrition(meals5.flat()))
            setAfterdinner(await extractNutrition(meals6.flat()))

        } catch (error) {
            console.error("Error fetching user menu: ", error);
        }

    }

    const extractNutrition = async (meal) => {
        console.log("meal", meal)
        //calculate total nutrition & calories
        const totalNutrition = meal.reduce((acc, food) => {
            if (!food) return acc;
            // Convert the values to numbers for calculations
            const calories = parseFloat(food.calories);
            const fat = parseFloat(food.fat_total_g);
            const protein = parseFloat(food.protein_g);
            const carbohydrates = parseFloat(food.carbohydrates_total_g);

            // Sum the values
            acc.calories += calories;
            acc.fat += fat;
            acc.protein += protein;
            acc.carbohydrates += carbohydrates;

            return acc;
        }, { calories: 0, fat: 0, protein: 0, carbohydrates: 0 });
        console.log("Total Nutrition:", totalNutrition);
        return totalNutrition;
    }

    useFocusEffect(
        React.useCallback(() => {
            getDailyMenuById();
            return () => {
                // Clear the menu state when the component is unfocused
                setDailyMenu([]);
            };
        }, [])
    );

    const font = useFont(require("../../../assets/font/Roboto-Bold.ttf"), 20);
    const smallerFont = useFont(require("../../../assets/font/Roboto-Bold.ttf"), 20);

    if (!font || !smallerFont) {
        return <View />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView >
                <View style={
                    styles.container}>
                    <View style={openStartDatePicker ? styles.blur : null}></View>
                    <Calendar openStartDatePicker={openStartDatePicker} handleOnPressStartDate={handleOnPressStartDate} />

                    {/* Bottom sheet jaa */}
                    <Button title="Present Modal" onPress={handlePresentModal} />
                    {/* <BottomSheet bottomSheetModalRef={bottomSheetModalRef} isOpen={isOpen} setIsOpen={setIsOpen} setTitleMeal={setTitleMeal} /> */}
                    <Text>{frontEndStore.favorite} </Text>
                    <View style={[styles.content, styles.c1]}>
                        <View style={styles.ringChartContainer}>
                            <DonutChart
                                backgroundColor="white"
                                radius={radius}
                                strokeWidth={STROKE_WIDTH}
                                percentageComplete={animationState}
                                targetPercentage={targetPercentage}
                                font={font}
                                smallerFont={smallerFont}
                            />
                        </View>

                        <View style={styles.progress}>
                            <View>
                                <Text className="text-white text-[10px] pb-1" >168 g</Text>
                                <ProgressBar progress={0.9} color={"#EC744A"} className="h-1 rounded" />
                                <Text className="text-white text-[10px] pt-1" >Carb</Text>
                            </View>
                            <View>
                                <Text className="text-white text-[10px] pb-1" >84 g</Text>
                                <ProgressBar progress={0.5} color={"#FBBB57"} className="h-1 rounded" />
                                <Text className="text-white text-[10px] pt-1" >Fat</Text>
                            </View>
                            <View>
                                <Text className="text-white text-[10px] pb-1" >152 g</Text>
                                <ProgressBar progress={0.7} color={"#57DB54"} className="h-1 rounded" />
                                <Text className="text-white text-[10px] pt-1" >Protien</Text>
                            </View>


                        </View>
                    </View>
                    {/* <Button title={"TabToStart Page"} onPress={() => navigation.navigate('TapToStart')}></Button> */}

                    <View style={[styles.content, styles.c2]}>
                        <Text className="font-bold p-5 text-lg text-Orange " >MEALS TODAY</Text>

                        <View className="gap-4">
                            {listMeal(require("../../../assets/img/icons8-sunny-side-up-eggs-96.png"), "BreakFast", breakfast.calories, navigation)}
                            <View className="border-b  border-Darkgray opacity-20" />
                            {listMeal(require("../../../assets/img/icons8-vegetarian-food.png"), "Brunch", brunch.calories, navigation)}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-thanksgiving-96.png"), "Lunch", lunch.calories, navigation)}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-pie-96.png"), "Afternoon Lunch", afternoonlunch.calories, navigation)}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-steak-96.png"), "Dinner", dinner.calories, navigation)}
                            <View className="border-b border-Darkgray opacity-20 " />
                            {listMeal(require("../../../assets/img/icons8-vegan-food-96.png"), "After Dinner", afterdinner.calories, navigation)}
                        </View>


                    </View>
                    <View style={[styles.content, styles.c2]}>
                        <Text className="font-bold pt-5 pl-5 text-lg text-Orange " >RECOMMEND</Text>
                        <View className="flex-row gap-4 p-5 ">
                            {btnRecom(require('../../../assets/img/drink.png'), "Drink", navigation)}
                            {btnRecom(require('../../../assets/img/dessert.png'), "Dessert", navigation)}
                            {btnRecom(require('../../../assets/img/main.png'), "Main Dish", navigation)}
                            {btnRecom(require('../../../assets/img/fruit.png'), "Fruit", navigation)}

                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomSheet bottomSheetModalRef={bottomSheetModalRef} isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} setTitleMeal={setTitleMeal} />
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
        elevation: 5,

    },
    c1: {
        backgroundColor: '#025146',
        height: 220,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
    },
    c2: {
        backgroundColor: 'white',
    },
    ringChartContainer: {
        width: radius * 2,
        height: radius * 2,
        marginTop: 10,
    },
    button: {
        marginTop: 5,
        backgroundColor: "orange",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 10,
    },
    progress: {
        gap: 20,
        width: 100,
        justifyContent: 'center',
    },
    blur: {
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
    }
});

export default DashboardDayScreen;