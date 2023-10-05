import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

 const CurrentWeightPopup = (props) => {
   const visible  = props.isVisible
   console.log(props.isVisible);
  //  const [visible, setVisible] = React.useState(false);
  //  setVisible(isVisible)
   console.log("isVisible: " + visible)
   const hideDialog = () => {props.setVisible((prev)=>!prev)}

  return (
    <View
      style={{
        marginTop: 20,
        justifyContent:'center'
      }}
    >
     {/* <TouchableOpacity
            onPress={showDialog}
            style={{
              width: 180,
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              borderRadius: 30,
              alignItems: "center",
              elevation: 3,
              paddingLeft: 20,
              marginTop: 3,
            }}
          >
            <Image
              source={require("../../assets/img/icons8-weight-100.png")}
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
          </TouchableOpacity> */}
      <Portal>
        <Dialog
          style={{ backgroundColor: "#fff",justifyContent:'center', alignItems:'center' }}
          visible={visible}
          onDismiss={hideDialog}
        >
          <Dialog.Content
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/img/icons8-shutdownpng.png")}
              style={{ width: 25, height: 35, marginTop: -5 }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "#025146",
                marginLeft: 10,
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              Current Weight
            </Text>
            <TextInput
              style={{
                marginBottom: 30,
                marginLeft: 100,
                borderBottomWidth: 1,
                paddingTop: 10,
                paddingStart: 17,
                width: 45,
                borderColor: "#575757",
              }}
              keyboardType="numeric" // ตั้งค่าให้ใช้แป้นพิมพ์ตัวเลขเท่านั้น
              placeholder="0" // ตั้งค่า placeholder ถ้าต้องการ
            />
            <Text
              style={{
                color: "#025146",
                marginLeft: 10,
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              kg
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              style={{
                height: 40,
                width: 100,
                borderWidth: 2,
                borderColor: "#025146",
                backgroundColor: "#fff",
              }}
              onPress={hideDialog}
            >
              <Text style={{ color: "#025146", fontWeight: "bold" }}>
                Cancel
              </Text>
            </Button>
            <Button
              style={{ backgroundColor: "#025146", height: 40, width: 100 }}
              onPress={hideDialog}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Done</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CurrentWeightPopup;
