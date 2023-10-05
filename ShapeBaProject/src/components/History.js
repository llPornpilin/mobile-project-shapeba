import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

const History = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
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
          paddingLeft:20,
          marginBottom:10
        }}
      >
      <Image
        source={require("../../assets/img/icons8-history-100.png")}
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
      <Portal>
        <Dialog
          style={{ backgroundColor: "#fff" }}
          visible={visible}
          onDismiss={hideDialog}
        >
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default History;
