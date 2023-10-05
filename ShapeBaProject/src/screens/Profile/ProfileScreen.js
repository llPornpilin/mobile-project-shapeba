import React, { useState } from "react";
import CurrentWeightPopup from "../../components/CurrentWeight";
import { ProgressBar, MD3Colors } from "react-native-paper";
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
import { PaperProvider } from "react-native-paper";

const ProfileScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  
  const [selectedSex, setSelectedSex] = useState("male");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <ScrollView>
      <PaperProvider>
        <SafeAreaView
          style={{
            backgroundColor: "#F7F7FB",
            alignItems: "center",
            flex: 1,
            paddingBottom: 20,
          }}
        >
          <CurrentWeightPopup isVisible={visible} setVisible={setVisible}/>
          <View style={styles.header}>
            <Image
              source={require("../../../assets/img/Icon.jpg")}
              style={styles.img}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.name,
                { fontWeight: "bold", fontSize: 23, color: "#025146" },
              ]}
            >
              chiffon m
            </Text>
          </View>
          <View style={styles.progress}>
            <View
              style={
                (styles.progressbar,
                { flexDirection: "row", alignItems: "center" })
              }
            >
              <View style={{ marginRight: 10 }}>
                <Text style={{ color: "#fff" }}>Start</Text>
                <Text style={{ color: "#fff" }}>59 Kg</Text>
              </View>
              <View>
                <ProgressBar
                  progress={0.4}
                  color={"#EC744A"}
                  className="h-1 rounded"
                  style={{
                    width: 200,
                    height: 12,
                    marginTop: -5,
                  }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: "#fff" }}>Goal</Text>
                <Text style={{ color: "#fff" }}>50 Kg</Text>
              </View>
            </View>
          </View>
          <View style={styles.Details}>
            <View className="flex-row justify-between" style={styles.boxStyle}>
              <Image
                source={require("../../../assets/img/icons8-fire.png")}
                style={{ width: 25, height: 35, marginTop: -5 }}
                resizeMode="contain"
              />
              <Text className="mb-5 mr-40" style={styles.textStyle}>
                TDEE
              </Text>
              <Text className="mb-5" style={styles.textProgress}>
                2074 cals
              </Text>
            </View>
            <View
              className="flex-row justify-between mt-4"
              style={styles.boxStyle}
            >
              <Image
                source={require("../../../assets/img/icons8-shutdownpng.png")}
                style={{ width: 25, height: 35, marginTop: -5 }}
                resizeMode="contain"
              />
              <Text className="mb-5 mr-[135px]" style={styles.textStyle}>
                Start Weight
              </Text>
              <Text className="mb-5" style={styles.textProgress}>
                58 kg
              </Text>
            </View>
            <View className="flex-row justify-between" style={styles.boxStyle}>
              <Image
                source={require("../../../assets/img/icons8-goal-100.png")}
                style={{ width: 25, height: 35, marginTop: 15 }}
                resizeMode="contain"
              />
              <Text className="mb-5 mt-5 mr-[140px]" style={styles.textStyle}>
                Goal Weight
              </Text>
              <Text className="mb-5 mt-5" style={styles.textProgress}>
                50 kg
              </Text>
            </View>
            <View className="flex-row justify-between" style={styles.boxStyle}>
              <Image
                source={require("../../../assets/img/icons8-height-100.png")}
                style={{ width: 25, height: 35, marginTop: 15 }}
                resizeMode="contain"
              />
              <Text className="mb-5 mt-5 mr-[165px]" style={styles.textStyle}>
                Height
              </Text>
              <Text className="mb-5 mt-5" style={styles.textProgress}>
                170 cm
              </Text>
            </View>
            <View className="flex-row justify-between" style={styles.boxStyle}>
              <Image
                source={require("../../../assets/img/icons8-swimming-100.png")}
                style={{ width: 25, height: 35, marginTop: 15 }}
                resizeMode="contain"
              />
              <Text className="mb-5 mt-5 mr-[30px]" style={styles.textStyle}>
                Activity Level
              </Text>
              <Text className="mb-5 mt-5" style={styles.textProgress}>
                Little or no exercise
              </Text>
            </View>
            <View
              className="flex-row justify-between mt-4"
              style={styles.boxStyle}
            >
              <Image
                source={require("../../../assets/img/icons8-age-100.png")}
                style={{ width: 25, height: 35, marginTop: -5 }}
                resizeMode="contain"
              />
              <Text className="mb-5 mr-[205px]" style={styles.textStyle}>
                Age
              </Text>
              <Text className="mb-5" style={styles.textProgress}>
                21 yr
              </Text>
            </View>
          </View>
          <TouchableOpacity 
            onPress={showDialog}
            style={{
              width: 350,
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              borderRadius: 30,
              alignItems: "center",
              elevation: 3,
              paddingLeft: 20,
              marginTop: 15,
            }}
          >
            <Image
              source={require("../../../assets/img/icons8-weight-100.png")}
              style={{ width: 25, height: 35 }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "#025146",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                justifyContent: "flex-start",
                marginLeft: 5,
              }}
            >
              Current Weight
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.StartNewGoal}
            onPress={() => navigation.navigate('StartNewGoalScreen')}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Start New Goal
            </Text>
          </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 350,
                  height: 50,
                  backgroundColor: "white",
                  flexDirection: "row",
                  borderRadius: 30,
                  alignItems: "center",
                  elevation: 3,
                  paddingLeft:20,
                  marginBottom:10,
                  marginTop: 20
                }}
                onPress={() => navigation.navigate('HistoryScreen')}
          >
          <Image
            source={require("../../../assets/img/icons8-history-100.png")}
            style={{ width: 25, height: 35 }}
            resizeMode="contain"
          />
          <Text
              style={{
                color: "#025146",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                justifyContent:'flex-start',
                marginLeft:5
              }}
            >
              History
            </Text>
          </TouchableOpacity>
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
                marginLeft: 140,
              }}
              trackColor={{ false: "#D9D9D9", true: "#31A82E" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity
            style={styles.btnLogout}
            onPress={() => props.navigations.navigate("#")}
          >
            <Text
              style={{
                color: "#EC744A",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </PaperProvider>
    </ScrollView>
  );
};

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
  header: {
    height: 170,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 5,
  },
  progress: {
    backgroundColor: "#025146",
    borderRadius: 30,
    width: 350,
    height: 150,
    marginTop: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  Details: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 350,
    height: 380,
    marginTop: 20,
    padding: 20,
    elevation: 5,
  },
  switchFrame: {
    height: 50,
    width: 350,
    margin: 10,
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
    marginLeft: 10,
  },
  btnLogout: {
    height: 45,
    width: 180,
    backgroundColor: "#FFF",
    borderRadius: 30,
    elevation: 3,
    marginTop: 15,
    justifyContent: "center",
  },
  StartNewGoal: {
    backgroundColor: "#EC744A",
    borderRadius: 30,
    width: 350,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 1,
    elevation: 3,
  },
  boxStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#A4A4A4",
    paddingVertical: 0.1,
  },
  textStyle: {
    color: "#025146",
    fontWeight: "bold",
    fontSize: 16,
  },
  textProgress: {
    color: "#575757",
    fontWeight: "bold",
    fontSize: 16,
  },
  imagedetials: {
    width: 25,
    height: 35,
  },
});

export default ProfileScreen;
