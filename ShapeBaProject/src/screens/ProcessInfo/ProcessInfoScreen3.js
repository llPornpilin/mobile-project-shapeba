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

const ProcessInfoScreen3 = ({navigation}) => {
  const [selectedSex, setSelectedSex] = useState("male");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.GreenArea}>
          <Text style={styles.Letget}>Add Your Goal Weight</Text>
          <Text style={styles.Trackyour}>Fuel Your Body Wisely</Text>
        </View>
        <View style={styles.whiteArea}>
          <View style={styles.uiContainer}>
            <View style={styles.uiItem}>
              <View style={styles.circle}>
                <Text style={styles.uiText}>1</Text>
              </View>
            </View>
            <View style={styles.uiItem}>
              <View style={styles.line}></View>
            </View>
            <View style={styles.uiItem2}>
              <View style={styles.circle2}>
                <Text style={styles.uiText2}>2</Text>
              </View>
            </View>
            <View style={styles.uiItem}>
              <View style={styles.line}></View>
            </View>
            <View style={styles.uiItem3}>
              <View style={styles.circle3}>
                <Text style={styles.uiText3}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.Allinput}>
            <View style={styles.inputRowContainer}>
              <View style={{ flex: 1 }}>
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
                  value=""
                  placeholder=""
                />
              </View>
            </View>
            <View style={styles.inputRowContainer}>
              <View style={{ flex: 1, marginLeft: 10 }}>
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
                <Picker
                  selectedValue={selectedSex}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedSex(itemValue)
                  }
                  style={{
                    backgroundColor: "#f0f0f0",
                    marginTop: 20,
                    borderRadius: 50,
                    width: "98%",
                  }}
                  mode="dropdown"
                >
                  <Picker.Item
                    label="Little or no exercise"
                    value="Little or no exercise"
                  />
                  <Picker.Item
                    label="1-3 times/week"
                    value="1-3 times/week"
                  />
                  <Picker.Item
                    label="4-5 times/week"
                    value="4-5 times/week"
                  />
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
            onPress={() => navigation.navigate("DashboardDayScreen")}
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
    flex: 2,
    width: "100%",
    backgroundColor: "#025146",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteArea: {
    flex: 2,
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
    marginBottom: 20,
    marginTop: -30,
  },
  uiItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
  uiItem2: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
  uiItem3: {
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
  circle2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  circle3: {
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
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  uiText2: {
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  uiText3: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputGowieght: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    width: "100%",
  },
  inputRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "80%",
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 50,
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
});

export default ProcessInfoScreen3;
