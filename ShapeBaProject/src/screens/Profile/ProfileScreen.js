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
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, Header } from "react-native-elements";

const ProcessInfoScreen1 = () => {
  const [selectedSex, setSelectedSex] = useState("male");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F7F7FB", alignItems: "center", flex:1 }}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/img/Icon.jpg")}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.name,{fontWeight:'bold', fontSize:23, color:'#025146'}}>chiffon m</Text>
      </View>
      <View style={styles.progress}></View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputL}>
          <Text
            style={{
              color: "#025146",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            TDEE
          </Text>
          <Text
            style={{
              color: "#979797",
              fontWeight: "semi-bold",
              fontSize: 13,
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
            }}
          >
            2500 cals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputR}>
          <Text style={{ color: "#EC744A", fontWeight: "bold", fontSize: 15 }}>
            Personal Information
          </Text>
          <Image
            source={require("../../../assets/img/Persernal.jpg")}
            style={(styles.img, { width: 25, height: 35, marginTop: 28 })}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.switchFrame}>
        <Image
          source={require("../../../assets/img/notification.jpg")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.switchText}>Notification</Text>
        <Switch
          style={{
            transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
            marginLeft:140,
          }}
          trackColor={{ false: "#D9D9D9", true: "#31A82E" }}
          thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => props.navigations.navigate("#")}
      >
        <Text
          style={{
            color: "#EC744A",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProcessInfoScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FB",
    alignItems: "center",
  },

  img: {
    width: 110,
    height: 110,
    // marginTop: 0,
  },
  icon: {
    width: 25,
    height: 35,
    marginTop: 3,
    marginLeft: 20,
  },
  progress: {
    backgroundColor: "#025146",
    borderRadius: 30,
    width: 350,
    height: 120,
    marginTop: 20,
    padding: 20,
  },
  inputContainer: {
    marginTop: 25,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputL: {
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 20,
    elevation: 3,
    height: 150,
    width: "45%",
    padding: 20,
    marginRight: 10,
  },
  inputR: {
    backgroundColor: "#FFFFFF",
    color: "#333",
    borderRadius: 20,
    elevation: 3,
    height: 150,
    width: "45%",
    padding: 20,
    marginLeft: 10,
  },

  switchFrame: {
    height:50,
    width:350,
    margin:30,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    alignItems: "center",
    elevation: 3,
  },
  switchText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#025146",
    marginLeft:10,
  },
  btn1: {
    height: 45,
    width:180,
    backgroundColor: "#FFF",
    borderRadius: 30,
    elevation: 3,
    marginTop:20
  },
  header: {
    height: 170,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation:5
  },
});
