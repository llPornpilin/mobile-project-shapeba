import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const RecommendScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Recommended Menu</Text>
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

  export default RecommendScreen;