import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const DashboardWeekScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard Week</Text>
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

  export default DashboardWeekScreen;