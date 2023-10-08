import * as React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

const History = (props) => {
  const isvisible = props.isVisible;
  const hideDialog = () => {
    props.setVisible((prev) => !prev);
  };

  return (
    <Portal>
      <Dialog
        style={{ backgroundColor: "white" }}
        visible={isvisible}
        onDismiss={hideDialog}
      >
        <Dialog.ScrollArea>
          <ScrollView>
            <Dialog.Content style={{}}>
              <Text
                style={{ color: "#025146", fontSize: 18, fontWeight: "bold" }}
              >
                Progress Weight
              </Text>
              <View
                style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}
              >
                <Text
                  style={{
                    marginLeft: 4,
                    color: "#025146",
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  Start:
                </Text>
                <Text style={{ marginLeft: 4, color: "#575757", fontSize: 17 }}>
                  59 Kg
                </Text>
              </View>
              <View
                style={{
                  height: 200,
                  width: 2,
                  backgroundColor: "#025146",
                  marginLeft: 25,
                  marginTop: 5,
                }}
              ></View>
              <View
                style={{ flexDirection: "row", marginTop: 5, marginLeft: 10 }}
              >
                <Text
                  style={{
                    marginLeft: 4,
                    color: "#025146",
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  Goal:
                </Text>
                <Text style={{ marginLeft: 4, color: "#575757", fontSize: 17 }}>
                  50 Kg
                </Text>
              </View>
            </Dialog.Content>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

export default History;
