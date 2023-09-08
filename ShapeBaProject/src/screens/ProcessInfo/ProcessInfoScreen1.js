import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const ProcessInfoScreen1 = () => {
    return (
        <View style={styles.container}>
            <Text>Weight Height BD Sex</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default ProcessInfoScreen1;