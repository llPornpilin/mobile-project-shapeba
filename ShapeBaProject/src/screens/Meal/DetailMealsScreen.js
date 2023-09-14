import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Button, Header } from 'react-native-elements';

// Page
import AddMealsScreen from './AddMealsScreen';


const DetailMealsScreen = ({navigation}) => {
    const renderData = ({item}) => {
        return (
            <View style={{borderBottomWidth: 1, borderColor: '#A4A4A4'}}>
                <Text clssName="mt-10">{item.name}</Text>
            </View>
        )
    }
    const allMeals = [
        {
          id: 1,
          name: 'meals1',
        },
        {
          id: 2,
          name: 'meals2',
        },
        {
          id: 3,
          name: 'meals3',
        },
    ];
    return (
        <View>
            <Header backgroundColor="#025146" containerStyle={styles.header}>
                <Text>Breakfast</Text>
                <Text>720 cals</Text>
            </Header>
            <View style={{padding: 20}}>
                <FlatList data={allMeals} renderItem={renderData} keyExtractor={item => {return item.id}}/>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Button title='Add more meal' onPress={() => navigation.navigate('AddMealsScreen')}></Button>
            </View>
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
    header: {
        backgroundColor: '#025146',
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
  });

  export default DetailMealsScreen;