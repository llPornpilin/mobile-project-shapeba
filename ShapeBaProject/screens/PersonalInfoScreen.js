import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const PersonalInfoScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Personal Info </Text>
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

  export default PersonalInfoScreen;