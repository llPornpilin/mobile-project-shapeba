import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const StartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Start !</Text>
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

  export default StartScreen;