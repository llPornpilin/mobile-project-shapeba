import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const AddMealsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add Meal From API</Text>
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

  export default AddMealsScreen;