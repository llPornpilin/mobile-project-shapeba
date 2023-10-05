import * as React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

const History = () => {
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
      }}
    >
      <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea>
          <ScrollView>
            <Text>This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            </Text>
            <Text>This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            </Text>
            <Text>This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            </Text>
            <Text>This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            This is a scrollable area
            </Text>

          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
    </View>
  );
};

export default History;