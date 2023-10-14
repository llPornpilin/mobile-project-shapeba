import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { progressCircle } from "./ProcessInfoScreen1";
import { useDispatch, useSelector } from "react-redux";
import { setaccomplish } from "../../store/slice/processInfoSlice1";
import { processInfoSelector } from "../../store/slice/processInfoSlice1";


const ProcessInfoScreen2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const processInfo = useSelector(processInfoSelector);

  const handleSelectGoal = (selectedGoal) => {
    dispatch(setaccomplish(selectedGoal));
    navigation.navigate("ProcessInfoScreen3");
  };
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
          {progressCircle(1, "white", "#EC744A")}
          <View style={styles.line}></View>
          {progressCircle(2, "#EC744A", "white")}
          <View style={styles.line}></View>
          {progressCircle(3, "white", "#EC744A")}
        </View>
        <View>
          <Text
            style={{
              ...styles.ifont,
              fontWeight: "bold",
              marginLeft: 5,
              color: "#575757",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            What do you want to accomplish?
          </Text>
        </View>

        {/* input */}
        <View style={{ marginLeft: 55 }}>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.inputbetween}
              onPress={() => handleSelectGoal("Maintain weight")}
            >
              <Text style={styles.inputText}>Maintain</Text>
              <Text style={styles.inputText}>weight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRowContainer}>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.inputL}
                onPress={() => handleSelectGoal("Lose weight")}
              >
                <Text style={styles.inputText}>Lose</Text>
                <Text style={styles.inputText}>weight</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.inputR}
                onPress={() => handleSelectGoal("Gain weight")}
              >
                <Text style={styles.inputText}>Gain</Text>
                <Text style={styles.inputText}>weight</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flex: 3,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    alignItems: "center",
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
    marginBottom: 30,
    marginTop: 40,
  },
  uiItem: {
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
  inputbetween: {
    marginTop: 25,
    backgroundColor: "#1AA3BA",
    color: "#333",
    borderRadius: 20,
    height: 90,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 90,
  },
  inputR: {
    marginTop: 30,
    backgroundColor: "#FBBB57",
    color: "#333",
    borderRadius: 20,
    height: 90,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputL: {
    marginTop: 30,
    backgroundColor: "#EF8055",
    color: "#333",
    borderRadius: 20,
    height: 90,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
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
  inputContainer: {
    width: "45%",
  },
  inputText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn3: {
    paddingVertical: -2,
    paddingHorizontal: 15,
    borderRadius: 14,
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#025146",
  },
});

export default ProcessInfoScreen2;
