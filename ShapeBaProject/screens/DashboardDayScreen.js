import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const DashboardDayScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard Day</Text>
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

  export default DashboardDayScreen;