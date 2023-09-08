import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DonutChartContainer from '../../components/donutChart';


const DashboardDayScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard Day</Text>
            <DonutChartContainer />
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