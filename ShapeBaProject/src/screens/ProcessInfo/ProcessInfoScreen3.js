import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const ProcessInfoScreen3 = () => {
    return (
        <View style={styles.container}>
            <Text>Goal Weight, Activity Level</Text>
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

  export default ProcessInfoScreen3;