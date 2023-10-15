import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { progressCircle } from "./ProcessInfoScreen1";
import {
  setGoalweight,
  setActivitylevel,
  setAge
} from "../../store/slice/processInfoSlice1";
import { useDispatch, useSelector } from "react-redux";
import { processInfoSelector } from "../../store/slice/processInfoSlice1";
import { calculateTDEE } from "../../store/slice/processInfoSlice1";


const ProcessInfoScreen3 = ({ navigation }) => {
  const [selectedSex, setSelectedSex] = useState("male");
  const dispatch = useDispatch();
  const processInfo = useSelector(processInfoSelector);

  // เพิ่มฟังก์ชัน handleCalculateTDEE เพื่อคำนวณ TDEE
  const handleCalculateTDEE = () => {
    // dispatch(setAge(25));
    const tdee = calculateTDEE(processInfo);
    // ทำอะไรกับค่า tdee ที่ได้ต่อไป
    // ...
  };

  const handleGoalChange = (text) => {
    dispatch(setGoalweight(text));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.GreenArea}>
          <Text style={styles.Letget}>Add Your Goal Weight</Text>
          <Text style={styles.Trackyour}>Fuel Your Body Wisely</Text>
        </View>
        <View style={styles.whiteArea}>
          <View style={styles.uiContainer}>
            {progressCircle(1, "white", "#EC744A")}
            <View style={styles.line}></View>
            {progressCircle(2, "white", "#EC744A")}
            <View style={styles.line}></View>
            {progressCircle(3, "#EC744A", "white")}
          </View>
          <View style={styles.Allinput}>
            <View style={styles.inputRowContainer}>
              <Text
                style={{
                  ...styles.inputLabel,
                  fontWeight: "bold",
                  marginLeft: 5,
                  color: "#575757",
                  marginTop: 30,
                  marginLeft: 13,
                  fontSize: 16,
                }}
              >
                Goal Weight
              </Text>
              <TextInput
                style={styles.inputGowieght}
                value={processInfo.goalweight} // นำค่า goalweight มาจาก Redux state
                onChangeText={(text) => dispatch(setGoalweight(text))} // เมื่อมีการเปลี่ยนแปลงใน TextInput ให้ dispatch action setGoalweight
                keyboardType="number-pad"
                maxLength={3}
              />
            </View>
            <View style={styles.inputRowContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 5,
                  color: "#575757",
                  marginTop: 10,
                  fontSize: 16,
                }}
              >
                Activity Level
              </Text>
              <View
                style={
                  Platform.OS === "ios"
                    ? styles.pickerContainerIOS
                    : styles.pickerContainerAndroid
                }
              >
                <Picker
                  selectedValue={processInfo.activitylevel}
                  onValueChange={(itemValue) =>
                    dispatch(setActivitylevel(itemValue))
                  }
                  style={
                    Platform.OS === "ios"
                      ? styles.pickerIOS
                      : styles.pickerAndroid
                  }
                  mode="dropdown"
                >
                  <Picker.Item
                    label="Little or no exercise"
                    value="Little or no exercise"
                  />
                  <Picker.Item label="1-3 times/week" value="1-3 times/week" />
                  <Picker.Item label="4-5 times/week" value="4-5 times/week" />
                  <Picker.Item
                    label="Intense exercise 6-7 times/week"
                    value="Intense exercise 6-7 times/week"
                  />
                  <Picker.Item
                    label="Very intense exercise daily"
                    value="Very intense exercise daily"
                  />
                </Picker>
              </View>
            </View>
          </View>

          <View style={styles.signupContainer}>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => {
                navigation.navigate("TapToStart");
                handleCalculateTDEE();
              }}
            >
              <Image
                source={require("../../../assets/img/Arrow.jpg")}
                style={(styles.img, { width: 35, height: 35 })}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  GreenArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#025146",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteArea: {
    flex: 1.7,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  Letget: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
    paddingRight: 70,
    paddingLeft: 30,
  },
  Trackyour: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    paddingRight: 130,
    marginBottom: 30,
  },
  uiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: -20,
  },
  uiItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  line: {
    height: 2,
    width: 65,
    backgroundColor: "#EC744A",
  },
  uiText: {
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputGowieght: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 25,
    height: 55,
    width: 330,
  },
  inputRowContainer: {
    marginBottom: 40,
    width: "100%",
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 10,
    marginLeft: 260,
  },
  btn3: {
    paddingVertical: -2,
    paddingHorizontal: 15,
    borderRadius: 14,
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#025146",
  },
  pickerContainerIOS: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    width: "330",
  },
  pickerIOS: {
    height: 50,
    width: "330%",
  },
  pickerContainerAndroid: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    overflow: "hidden",
    width: 330,
  },
  pickerAndroid: {
    height: 50,
    width: "330",
    color: "#333",
  },
});

export default ProcessInfoScreen3;
