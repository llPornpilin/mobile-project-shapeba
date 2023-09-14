import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/img/Icon.jpg")}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />

      <Text style={styles.LabelUsername}>User Name</Text>
      <TextInput
        style={styles.inputUsername}
        value="Lingling123"
        placeholder="Enter UserName"
      />
      <Text style={styles.LabelPassword}>Password</Text>
      <TextInput
        style={styles.inputPassword}
        secureTextEntry
        value="Lingling123"
        placeholder="Enter Password"
      />
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => props.navigations.navigate("#")}
      >
        <Text style={styles.btnText1}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => props.navigations.navigate("#")}
      >
        <Text style={styles.btnText2}>Sign in with google</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => props.navigations.navigate("#")}
        >
          <Text style={{ color: "#EC744A", fontWeight: "bold", marginLeft: 6 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  LabelUsername: {
    color: "#575757",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 5,
    marginRight: 245,
    marginTop: 50,
  },
  inputUsername: {
    marginTop: 10,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 30,
    height: 45,
    width: 340,
    padding: 15,
  },
  LabelPassword: {
    color: "#575757",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 30,
    marginRight: 250,
    marginBottom: 5,
  },
  inputPassword: {
    marginTop: 10,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 30,
    height: 45,
    width: 340,
    padding: 15,
  },
  btn1: {
    marginTop: 20,
    height: 50,
    width: 340,
    borderRadius: 30,
    backgroundColor: "#EC744A",
    marginBottom: 10,
    elevation: 5,
    marginTop: 60,
  },
  btn2: {
    marginTop: 10,
    height: 50,
    width: 340,
    borderRadius: 30,
    borderColor: "#025146",
    backgroundColor: "#FFFFFF",
    elevation: 5,
  },
  btn3: {
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  btnText1: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
  },
  btnText2: {
    color: "#EC744A",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
  },
  orText: {
    color: "#575757",
    fontWeight: "normal",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
