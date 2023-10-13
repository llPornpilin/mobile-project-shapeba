import React, { useState } from 'react'
import {
    Modal, TouchableWithoutFeedback,
    StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView, Pressable
} from 'react-native';
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { db, collection, getDocs, getDoc, addDoc, doc, query, where } from '../../firebase-cofig';


const UpdateBottomSheet = (props) => {
    //props
    const info = props.menuInfo;
    const bottomSheetModalRef = props.bottomSheetModalRef;
    const snapPoints = ["60%",];
    const [name, setName] = useState("");
    const [cal, setCal] = useState("");
    const [size, setSize] = useState("");
    const [u_id, setU_id] = useState("01");
    setName(info.name);
    console.log(info)
    console.log("name", name)

    const isOpen = props.isOpen;
    const closeModal = () => {
        bottomSheetModalRef.current?.close();
        setTimeout(() => {
            props.setIsOpen(false);
        }, 200);
        // setCal("");
        // setSize("");
        // setName("");
    }
    return (
        <SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 30, }}
                onDismiss={() => props.setIsOpen(false)}
            >
                <View className="p-8">
                    <Text className="text-xl mb-8 font-semibold">
                        Edit My Menu
                    </Text>
                    <View className="bg-white p-3" style={[styles.textInput, styles.textInputCreate]}>
                        <Text className="text-base" style={{ justifyContent: 'flex-start' }}>Menu Name :</Text>
                        <TextInput
                            style={{ flex: 1 }}
                            className="h-15 pl-3 pr-3"
                            underlineColorAndroid="transparent"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View className="bg-white p-3 mt-3" style={[styles.textInput, styles.textInputCreate]}>
                        <Text className="text-base" style={{ justifyContent: 'flex-start' }}>Serving Size :</Text>
                        <TextInput
                            style={{ flex: 1 }}
                            className="h-15 pl-3 pr-3"
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                            value={size}
                            onChangeText={(text) => setSize(text)}
                        />
                        <Text className="text-base" style={{ justifyContent: 'flex-end' }}>g.</Text>
                    </View>
                    <View className="bg-white p-3 mt-3" style={[styles.textInput, styles.textInputCreate]}>
                        <Text className="text-base" style={{ justifyContent: 'flex-start' }}>Calories :</Text>
                        <TextInput
                            style={{ flex: 1 }}
                            className="h-15 pl-3 pr-3"
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                            value={cal}
                            onChangeText={(text) => setCal(text)}
                        />
                        <Text className="text-base" style={{ justifyContent: 'flex-end' }}>cals.</Text>
                    </View>

                    <View className="flex-row justify-center">
                        <TouchableOpacity className="bg-white" style={[styles.button, { marginRight: 25 }]} onPress={closeModal}>
                            <Text className="font-bold text-Orange text-lg">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-Orange" style={[styles.button, { marginLeft: 25 }]} >
                            <Text className="font-bold text-white text-lg">Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </Background> */}
            </BottomSheetModal>
        </SafeAreaView>

    )
}

export default UpdateBottomSheet

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
        underlineColorAndroid: "transparent",
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBlockColor: '#4B4B4B',
    },
})