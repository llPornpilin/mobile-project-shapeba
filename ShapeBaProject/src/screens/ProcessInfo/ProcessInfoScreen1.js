import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Calendar from "../../components/Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  processInfoSelector,
  // setSelectedStartDate,
  setSelectedSex,
  setWeight,
  setHeight,
  setOpenStartDatePicker,
  setBirthdate, // เพิ่ม import setBirthdate
  setAge,
} from "../../store/slice/processInfoSlice1";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Dropdown } from 'react-native-element-dropdown';

export const progressCircle = (number, color, textcolor) => {
  return (
    <View style={styles.uiItem}>
      <View style={[styles.circle, { backgroundColor: color, elevation: 3 }]}>
        <Text style={[styles.uiText, { color: textcolor }]}>{number}</Text>
      </View>
    </View>
  );
};

const SignupSchema = Yup.object().shape({
  weight: Yup.number()
    // .min(1, 'Too Short!')
    // .max(3, 'Too Long!')
    .required("Enter Your Weight !"),
  height: Yup.number()
  .required("Enter Your Height !"),
  birthdate: Yup.date()
  .required("Enter Your BirthDate !"),
  selectedSex: Yup.string()
    .notOneOf(["default"], "Select Sex !")
    .required("Select Sex !"),
});

const ProcessInfoScreen1 = ({ navigation }) => {
  const dispatch = useDispatch();
  const processInfo = useSelector(processInfoSelector);

  const openStartDatePicker = processInfo.openStartDatePicker;
  const handleOnPressStartDate = () => {
    dispatch(setOpenStartDatePicker(!openStartDatePicker));
  };

  const sex = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'FeMale' },
];

  return (
    <Formik
      initialValues={{
        weight: processInfo.weight,
        height: processInfo.height,
        birthdate: processInfo.birthdate,
        selectedSex: processInfo.selectedSex,
      }}
      validationSchema={SignupSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.blueArea}>
            <View>
              <Text style={styles.Texttop}>Let’s Get Start</Text>
            </View>
            <View>
              <Text style={styles.Textbottom}>Track Your Daily Intake</Text>
            </View>
          </View>
          <View style={styles.whiteArea}>
            <View style={styles.uiContainer}>
              {progressCircle(1, "#EC744A", "white")}
              <View style={styles.line}></View>
              {progressCircle(2, "white", "#EC744A")}
              <View style={styles.line}></View>
              {progressCircle(3, "white", "#EC744A")}
            </View>
            <View style={styles.Allinput}>
              <View style={styles.inputRowContainer}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <Text
                    style={{
                      ...styles.inputLabel,
                      fontWeight: "bold",
                      marginLeft: 5,
                      color: "#575757",
                      marginTop: 30,
                    }}
                  >
                    Weight
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.weight}
                    onChangeText={(text) => {
                      handleChange("weight")(text);
                      dispatch(setWeight(text));
                    }}
                    keyboardType="number-pad"
                    maxLength={3}
                  />
                  {errors.weight && (
                    <Text style={styles.errorsText}>{errors.weight}</Text>
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      ...styles.inputLabel,
                      fontWeight: "bold",
                      marginLeft: 5,
                      color: "#575757",
                      marginTop: 30,
                    }}
                  >
                    Height
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={processInfo.height}
                    onChangeText={(text) => {
                      handleChange("height")(text);
                      dispatch(setHeight(text));
                    }}
                    keyboardType="number-pad"
                    maxLength={3}
                  />
                  {errors.height && (
                    <Text style={styles.errorsText}>{errors.height}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputRowContainer}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      ...styles.inputLabel,
                      fontWeight: "bold",
                      marginLeft: 5,
                      color: "#575757",
                      marginTop: 30,
                    }}
                  >
                    Birth Date
                  </Text>
                  <View>
                    <TouchableOpacity onPress={handleOnPressStartDate}>
                      <TextInput
                        style={styles.input}
                        value={values.birthdate}
                        editable={false}
                        placeholder=""
                      />
                    </TouchableOpacity>
                    {errors.birthdate && (
                      <Text style={styles.errorsText}>{errors.birthdate}</Text>
                    )}

                    <Calendar
                      openStartDatePicker={processInfo.openStartDatePicker}
                      handleOnPressStartDate={handleOnPressStartDate}
                      setSelectedStartDate={(date) =>
                        dispatch(setBirthdate(date))
                      }
                    />
                  </View>
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginLeft: 5,
                      color: "#575757",
                      marginTop: 30,
                    }}
                  >
                    Sex
                  </Text>
                  <Dropdown
                        style={styles.dropdownStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={sex}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder=""
                        value={values.selectedSex}
                        onChange={(item) => {
                          handleChange("selectedSex")(item.value);
                          dispatch(setSelectedSex(item.value)); // ส่งไปยัง Redux store
                        }}
                    />
                     {errors.selectedSex && <Text style={styles.errorsText}>{errors.selectedSex}</Text>}
                </View>
              </View>
            </View>
            <View style={styles.signupContainer}>
              <TouchableOpacity
                style={styles.btn3}
                onPress={() => navigation.navigate("ProcessInfoScreen2")}
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
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  blueArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#025146",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  Texttop: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 5,
    paddingRight: 115,
  },
  Textbottom: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    paddingRight: 125,
    marginBottom: 30,
  },
  uiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 10,
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
    backgroundColor: "#EC744A",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 2,
    width: 65,
    backgroundColor: "#EC744A",
  },
  uiText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 10,
    width:160,
    height:50
  },
  inputRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
    width: "80%",
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 40,
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
    marginTop: 20,
  },
  img: {
    width: 35,
    height: 35,
  },
  pickerContainerIOS: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    width: "100%",
  },
  pickerIOS: {
    height: 50,
    width: "100%",
  },
  pickerContainerAndroid: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    overflow: "hidden",
    width: "100%",
  },
  pickerAndroid: {
    height: 50,
    width: "100%",
    color: "#333",
  },
  errorsText: {
    fontSize: 12,
    color: "#C03232",
    marginLeft: 7,
    marginTop: 5,
  },
  dropdownStyle: {
    borderRadius: 25,
    paddingLeft: 15,
    backgroundColor: "#f0f0f0",
    height: 50,
    marginTop: 20,
    width:160,
},
});

export default ProcessInfoScreen1;
