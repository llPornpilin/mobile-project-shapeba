import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#fff', flex:0.8}}>
      <Image
        source={require("../../assets/img/Icon.jpg")}
        style={styles.img}
        resizeMode="contain"
      />
      </View>
      <View>
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => props.navigations.navigate("#")}
      >
        <Text style={styles.textbtn1}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => props.navigations.navigate("#")}
      >
        <Text style={styles.textbtn2}>
          Sign Up
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 260,
    width: 250,
    marginTop:100
  },
  btn1: {
    height: 50,
    width: 340,
    borderRadius: 30,
    backgroundColor: "#025146",
  },
  btn2: {
    marginTop: 25,
    height: 50,
    width: 340,
    borderRadius: 30,
    borderColor: "#025146",
    backgroundColor: "#FFFFFF",
    elevation: 5,
  },
  textbtn1: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
  },
  textbtn2: {
    color: "#025146",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
  },
});
export default StartScreen;
