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
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const ProcessInfoScreen1 = () => {
  const [selectedSex, setSelectedSex] = useState("male");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.blueArea}>
          <Image
            source={require("../../../assets/img/Icon.jpg")}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.blueAreaText}>chiffon m</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 20,
            marginTop: 10,
            backgroundColor: "#F7F7FB",
          }}
        >
          <View style={styles.scope}>
            <View style={styles.progress}></View>
          </View>
        </View>
        <View style={styles.whiteArea}>
          <View style={styles.inputRowContainer}>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.inputL}>
                <Text
                  style={{
                    color: "#025146",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginLeft: 15,
                    marginTop: 6,
                  }}
                >
                  TDEE
                </Text>
                <Text
                  style={{
                    color: "#979797",
                    fontWeight: "semi-bold",
                    fontSize: 13,
                    marginLeft: 15,
                    marginTop: 6,
                  }}
                >
                  (total daily energy expenditure)
                </Text>
                <Text
                  style={{
                    color: "#025146",
                    fontWeight: "bold",
                    fontSize: 18,
                    marginTop: 6,
                    marginLeft: 15,
                  }}
                >
                  2500 cals
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.inputR}>
                <Text
                  style={{ color: "#EC744A", fontWeight: "bold", fontSize: 15 }}
                >
                  Personal Information
                </Text>
                <Image
                  source={require("../../../assets/img/Persernal.jpg")}
                  style={(styles.img, { width: 25, height: 35, marginTop: 28 })}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.switchFrame}>
              <Image
                source={require("../../../assets/img/notification.jpg")}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.switchText}>Notification</Text>
              <Switch
                style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }], marginRight:10 }}
                trackColor={{ false: "#D9D9D9", true: "#31A82E" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View>
       <TouchableOpacity style={styles.btn1} onPress={()=> props.navigations.navigate("#")}>
           <Text style={{color: "#EC744A", fontWeight: 'bold', fontSize: 15}}>Sign In</Text>
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
    backgroundColor: "#F7F7FB",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  blueArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    marginTop: -150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  blueAreaText: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#025146",
    marginBottom: -50,
  },
  whiteArea: {
    flex: 2,
    width: "92%",
    backgroundColor: "#F7F7FB",
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  img: {
    width: 110,
    height: 110,
    marginTop: 120,
  },
  icon: {
    width: 25,
    height: 35,
    marginTop: 3,
    marginLeft:10
  },
  progress: {
    backgroundColor: "#025146",
    borderRadius: 35,
    paddingVertical: 65,
    paddingHorizontal: 50,
    width: "83%",
    marginLeft: 33,
    marginTop: 20,
    marginBottom: -50,
  },
  inputContainer: {
    flex: 1,
    margin: 10,
  },
  inputRowContainer: {
    flexDirection: "row",
    margin: 10,
  },
  inputL: {
    marginTop: -175,
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 20,
    paddingVertical: 23,
    paddingHorizontal: 15,
    elevation: 3,
  },
  inputR: {
    marginTop: -175,
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 3,
  },
  switchContainer: {
    marginTop: -30,
  },
  switchFrame: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 10,
    alignItems: "center",
    elevation: 3,
  },
  switchText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#025146",
    marginRight: 135,
    marginLeft: 10
  },
  btn1: {
    paddingVertical:9,
    paddingHorizontal:55,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    flexDirection: 'column',
    elevation:3
  },
});
