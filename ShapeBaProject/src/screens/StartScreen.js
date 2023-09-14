import { translate } from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";


const StartScreen = ({navigation}) => {
  const [scaleAnimate] = useState(new Animated.Value(0))
  React.useEffect(() => {
    Animated.spring(
      scaleAnimate,
      {
        toValue: 1,
        friction: 2,
        useNativeDriver: true
      }
    ).start();
  }, [])
  
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/img/Icon.jpg")}
        style={[styles.img, { transform: [{ scale: scaleAnimate }] }]}
        resizeMode="contain"
      />

      <View>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate('SignInNavigator')}
        >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}>
          Sign In
        </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('SignUpNavigator')}
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
