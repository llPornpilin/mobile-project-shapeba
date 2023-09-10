import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/Icon.jpg")}
        style={styles.img}
        resizeMode="contain"
      />
      <View>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => props.navigations.navigate("#")}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => props.navigations.navigate("#")}
        >
          <Text style={{ color: "#025146", fontWeight: "bold", fontSize: 20 }}>
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
    height: 200,
    width: 200,
    marginTop: 130,
  },
  btn1: {
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 30,
    marginVertical: 150,
    backgroundColor: "#025146",
    marginBottom: 20,
    flexDirection: "column",
  },
  btn2: {
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 30,
    borderColor: "#025146",
    backgroundColor: "#FFFFFF",
    marginBottom: 1,
    flexDirection: "column",
    elevation: 5,
  },
});
export default StartScreen;
