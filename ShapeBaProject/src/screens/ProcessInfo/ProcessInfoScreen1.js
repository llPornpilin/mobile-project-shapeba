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
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const ProcessInfoScreen1 = () => {
  const [selectedSex, setSelectedSex] = useState("male");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.blueArea}>
          <View>
            <Text style={styles.Letget}>Let’s Get Start</Text>
          </View>
          <View>
            <Text style={styles.Trackyour}>Track Your Daily Intake</Text>
          </View>
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
                  style={styles.inputWeight}
                  value=""
                  placeholder=""
                />
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
                  style={styles.inputHeight}
                  value=""
                  placeholder=""
                />
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
                <TextInput
                  style={styles.inputBirthDate}
                  value=""
                  placeholder=""
                />
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
                <Picker
                  selectedValue={selectedSex}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedSex(itemValue)
                  }
                  style={{
                    backgroundColor: "#f0f0f0",
                    marginTop: 20,
                    borderRadius: 50,
                  }}
                  mode="dropdown"
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.signupContainer}>
            <TouchableOpacity
              style={styles.btn3}
              onPress={() => props.navigation.navigate("#")}
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

export default ProcessInfoScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueArea: {
    flex: 5,
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
  Letget: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 5,
    paddingRight: 115,
  },
  Trackyour: {
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
    marginBottom: 20,
    marginTop: 30,
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
    backgroundColor: "#EC744A",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  uiText2: {
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  uiText3: {
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputWeight: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: "100%",
  },
  inputHeight: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    width: "100%",
  },
  inputBirthDate: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginRight: 10,
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
    marginTop: 20
  },
  img: {
    width: 35,
    height: 35
  }
});
