import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const StartNewGoalScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Start New Goal</Text>
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

  export default StartNewGoalScreen;