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

// Page
// import SignUpScreen from './SignUpScreen';


const SignInScreen = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../../assets/img/Icon.jpg")}
          style={{ width: '100%', height: '100%', resizeMode: 'contain', alignSelf: 'center' }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>FullName</Text>
        <TextInput
          style={styles.input}
          value="Lingling123"
          placeholder="Enter Fullname"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>User Name</Text>
        <TextInput
          style={styles.input}
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
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Comfirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value="Lingling123"
          placeholder="Confirm Password"
        />
      </View>
      <TouchableOpacity style={styles.btn1} onPress={() => props.navigations.navigate("#")}>
        <Text style={styles.btnText1}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>or</Text>
      </View>
      <TouchableOpacity style={styles.btn2} onPress={() => props.navigations.navigate("#")}>
        <Text style={styles.btnText2}>Sign up with google</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity style={styles.btn3} onPress={() => props.navigations.navigate("#")}>
          <Text style={{ color: "#EC744A", fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    marginBottom: 0.2,
    marginTop: 10
  },
  inputContainer: {
    marginBottom: 10,
    width: '80%',
  },
  inputLabel: {
    color: '#575757',
    fontWeight: 'bold',
    fontSize: 17,
  },
  input: {
    marginTop: 2,
    backgroundColor: '#f0f0f0',
    color: '#333',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  btn1: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 30,
    backgroundColor: '#EC744A',
    marginBottom: 2,
    flexDirection: 'column'
  },
  btn2: {
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 100,
    borderRadius: 30,
    borderColor: '#025146',
    backgroundColor: '#FFFFFF',
    marginBottom: 1,
    flexDirection: 'column',
    elevation: 5
  },
  btn3: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  btnText1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  btnText2: {
    color: '#EC744A',
    fontWeight: 'bold',
    fontSize: 15
  },
  orContainer: {
    marginTop: 0.2,
    marginBottom: 0.2
  },
  orText: {
    color: '#575757',
    fontWeight: 'normal',
    fontSize: 20
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  }
});

export default SignInScreen
