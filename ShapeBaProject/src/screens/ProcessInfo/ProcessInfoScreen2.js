import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ProcessInfoScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueArea}>
        <View>
          <Text style={styles.Letget}>Set Your Goal</Text>
        </View>
        <View>
          <Text style={styles.Trackyour}>Nutrition at a Glance</Text>
        </View>
      </View>
      <View style={styles.whiteArea}>
        <View style={styles.uiContainer}>
          <View style={styles.uiItem}>
            <View style={styles.circle}>
              <Text style={styles.uiText1}>1</Text>
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
        <View>
          <Text
            style={{
              ...styles.ifont,
              fontWeight: "bold",
              marginLeft: 5,
              color: "#575757",
              marginTop: 15,
            }}
          >
            What do you want to accomplish?
          </Text>
        </View>

        {/* input */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.inputbetween}>
          <Text
                style={{ color: "#FFFFFF", fontWeight: "semi-bold", fontSize: 15 }}
              >
                Maintain
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "semi-bold", fontSize: 15, marginLeft:9 }}
              >
                weight
              </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRowContainer}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.inputL}>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "semi-bold", fontSize: 15,marginLeft:5 }}
              >
                Lose
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "semi-bold", fontSize: 15 }}
              >
                weight
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.inputR}>
            <Text
                style={{ color: "#FFFFFF", fontWeight: "semi-bold", fontSize: 15, marginLeft:6 }}
              >
                Gain
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontWeight: "semi-bold", fontSize: 15}}
              >
                weight
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signupContainer}>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => props.navigations.navigate("#")}
        >
          <Image
            source={require("../../../assets/img/Arrow.jpg")}
            style={(styles.img, { width: 35, height: 35 })}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueArea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#025146",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteArea: {
    flex: 1.95,
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
    paddingRight: 120,
  },
  Trackyour: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    paddingRight: 145,
    marginBottom: 30,
  },
  uiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 15,
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
    backgroundColor: "#EC744A",
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
  uiText1: {
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  uiText2: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  uiText3: {
    color: "#EC744A",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputbetween: {
    marginTop: 25,
    backgroundColor: "#1AA3BA",
    color: "#333",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  inputR: {
    marginTop: 15,
    backgroundColor: "#FBBB57",
    color: "#333",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  inputL: {
    marginTop: 15,
    backgroundColor: "#EF8055",
    color: "#333",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  inputRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  ifont: {
    fontSize: 16,
    marginBottom: 8,
  },
  signupContainer: {
    alignItems: 'center',
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
    borderColor: "#025146"
  }
});

export default ProcessInfoScreen1;
