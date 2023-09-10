import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image 
          source={require("../../assets/img/Icon.jpg")} 
          style={{width: '100%', height: '100%', resizeMode: 'contain', alignSelf: 'center'}}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>User Name</Text>
        <TextInput
          style={styles.input}
          value="Lingling123"
          placeholder="Enter UserName"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry
          value="Lingling123"
          placeholder="Enter Password"
        />
      </View>
      <TouchableOpacity style={styles.btn1} onPress={()=> props.navigations.navigate("#")}>
        <Text style={styles.btnText1}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or</Text>
      </View>
      <TouchableOpacity style={styles.btn2} onPress={()=> props.navigations.navigate("#")}>
        <Text style={styles.btnText2}>Sign in with google</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity style={styles.btn3} onPress={()=> props.navigations.navigate("#")}>
          <Text style={{color: "#EC744A", fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 180,
        height: 180,
        overflow: 'hidden', 
        marginBottom: 10,
        marginTop: 15
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
      marginTop: 10,
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
      borderColor:'#025146',
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
      marginTop: 10,
      marginBottom: 10
    },
    orText: {
      color: '#575757',
      fontWeight: 'normal',
      fontSize: 20
    },
    signupContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    }
});
