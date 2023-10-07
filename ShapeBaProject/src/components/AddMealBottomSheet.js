import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, 
StyleSheet, View, Text, TouchableOpacity, TextInput, Animated, useWindowDimensions, SafeAreaView, Pressable} from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider, Background } from "@gorhom/bottom-sheet";

// ---------------------- Create Own Menu ---------------------------------
export const CreateMealBottomModal = ( props ) => {
    //props
    const bottomSheetModalRef = props.bottomSheetModalRef; 
    const snapPoints = ["60%",];
    
    const isOpen = props.isOpen;
    const closeModal = () => {
        bottomSheetModalRef.current?.close();
        setTimeout(() => {
            props.setIsOpen(false);
        }, 200);
    }

    const handleModalDismiss = () => {
        bottomSheetModalRef.current?.dismiss();
    };

    return (
        <SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints} s
                backgroundStyle={{ borderRadius: 30,}}
                onDismiss={() => props.setIsOpen(false)}
            >
                <View className="p-8">
                    <Text className="text-xl mb-8 font-semibold">
                        Create My Menu
                    </Text>
                    <View className="bg-white p-3" style={[styles.textInput, styles.textInputCreate]}>
                        <Text className="text-base" style={{justifyContent: 'flex-start'}}>Menu Name :</Text>
                        <TextInput
                        style={{flex: 1}}
                        className="h-15 pl-3 pr-3"
                        underlineColorAndroid="transparent"
                    // onChangeText={servingSize => setServingSize(servingSize)}
                    // value={servingSize}
                        />
                    </View>
                    <View className="bg-white p-3 mt-3" style={[styles.textInput, styles.textInputCreate]}>
                        <Text className="text-base" style={{justifyContent: 'flex-start'}}>Serving Size :</Text>
                        <TextInput
                            style={{flex: 1}}
                            className="h-15 pl-3 pr-3"
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                        // onChangeText={servingSize => setServingSize(servingSize)}
                        // value={servingSize}
                    />
                        <Text className="text-base" style={{justifyContent: 'flex-end'}}>g.</Text>
                    </View>
                    <View className="bg-white p-3 mt-3" style={[styles.textInput, styles.textInputCreate]}>
                        <Text className="text-base" style={{justifyContent: 'flex-start'}}>Calories :</Text>
                        <TextInput
                            style={{flex: 1}}
                            className="h-15 pl-3 pr-3"
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                        // onChangeText={servingSize => setServingSize(servingSize)}
                        // value={servingSize}
                    />
                        <Text className="text-base" style={{justifyContent: 'flex-end'}}>cals.</Text>
                    </View>
                
                    <View className="flex-row justify-center">
                        <TouchableOpacity className="bg-white" style={[styles.button, {marginRight: 25}]} onPress={this.close}>
                            <Text className="font-bold text-Orange text-lg">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-Orange" style={[styles.button, {marginLeft: 25}]} onPress={this.close}>
                            <Text className="font-bold text-white text-lg">Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </Background> */}
            </BottomSheetModal>
        </SafeAreaView>
    )
}
// ---------------------- Add Menu ---------------------------------
export const AddMealBottomModal = ( props ) => {
    //props
    const bottomSheetModalRef = props.bottomSheetModalRef;
    const {onTouchOutside, title} = props
    const snapPoints = ["40%"];

    const isOpen = props.isOpen;
    const closeModal = () => {
        bottomSheetModalRef.current?.close();
        setTimeout(() => {
            props.setIsOpen(false);
        }, 200);
    }
    

    const renderOutsideTouchable = (onTouch) => {
        const view = <View style={{flex: 1, width: '100%'}} />
        if (!onTouch) return view
        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    return (
        // <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        //         {renderOutsideTouchable(onTouchOutside)}
        <SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints} s
                backgroundStyle={{ borderRadius: 30, marginBottom: 0}}
                animationType={'fade'}
                // onDismiss={() => props.setIsOpen(false)}
            >
                
                <View className="p-8">
                    <Text className="text-xl mb-8 font-semibold">
                        Menu Name
                    </Text>
                    <View className="bg-white p-3" style={styles.textInput}>
                        <Text className="text-base" style={{justifyContent: 'flex-start'}}>Serving Size :</Text>
                        <TextInput
                            style={{flex: 1}}
                            className="h-15 pl-3 pr-3"
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                        // onChangeText={servingSize => setServingSize(servingSize)}
                        // value={servingSize}
                        />
                        <Text className="text-base" style={{justifyContent: 'flex-end'}}>g.</Text>
                    </View>
                    
                    <View className="flex-row justify-center">
                        <TouchableOpacity className="bg-white" style={[styles.button, {marginRight: 25}]} onPress={this.close}>
                            <Text className="font-bold text-Orange text-lg">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-Orange" style={[styles.button, {marginLeft: 25}]} onPress={this.close}>
                            <Text className="font-bold text-white text-lg">Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheetModal>
        </SafeAreaView>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        width: "100%",

    },
    title: {
        fontWeight: "900",
        letterSpacing: 0.5,
        fontSize: 16,
        color: "white",
    },
    button: {
        padding: 5,
        marginTop: 30,
        borderRadius: 30,
        width: '40%',
        alignItems: 'center',
        marginBottom: 30,
        elevation: 3,
        underlineColorAndroid:"transparent",
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBlockColor: '#4B4B4B',
    },
});
