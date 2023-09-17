import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { AntDesign, Entypo } from '@expo/vector-icons';

// Page
import AddMealsScreen from './AddMealsScreen';
import { color } from 'd3';


export const DetailMealsPattern = ({ item }) => {
    return (
        <>
            <View style={{borderBottomWidth: 0.5, borderColor: '#A4A4A4', paddingLeft: 10}}>
                <Text className="font-semibold mt-3 text-lg">{item.name}</Text>
                <Text className="mb-3">100 g , 30 cals</Text>
            </View>
        </>
    )
}

export const greenHeader = () => {
    return (
        <Header backgroundColor= "#025146" containerStyle={styles.header}
                leftComponent={
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{marginRight: 15, marginTop: 5}} onPress={() => navigation.goBack()}>
                            <AntDesign name="leftcircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={{color: 'white', fontSize: 25, width: '200%', fontWeight: 'bold'}}>BreakFast</Text>
                    </View>
                }
                // centerComponent={{icon: 'menu', color: '#fff', iconStyle: {color: 'white', paddingLeft: 90, marginTop: 5}}}
                rightComponent={
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 5, marginTop: 5}}>
                            <Entypo name="flash" size={24} color="white" />
                        </View>
                        <Text style={{color: 'white', fontSize: 25, width: '150%', fontWeight: 'bold'}}>720 cals</Text>
                    </View>
                }
            >
        </Header>
    )
}

const DetailMealsScreen = ({navigation}) => {
    
    const allMeals = [
        {id: 1, name: 'meals1'},
        {id: 2, name: 'meals2'},
        {id: 3, name: 'meals3'},
        {id: 4, name: 'meals4'},
        {id: 5, name: 'meals5'},
        {id: 6, name: 'meals6'},
        {id: 7, name: 'meals7'},
        {id: 8, name: 'meals8'},
        {id: 9, name: 'meals9'},
        {id: 10, name: 'meals10'},
        {id: 11, name: 'meals11'},
        {id: 12, name: 'meals12'},
        {id: 13, name: 'meals13'},
        {id: 14, name: 'meals14'},
    ];
    return (
        <View style={styles.container}>
            {greenHeader()}
            <ScrollView style={{paddingLeft: 40, paddingRight: 40, paddingTop: 20}}>
                <View>
                    {
                        allMeals.map((item, index) => <DetailMealsPattern item={item} key={index} />)
                    }
                </View>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 20}}>
                    <TouchableOpacity style={styles.btnAddMeal} onPress={() => navigation.navigate('AddMealsScreen')}>
                        <Text className="font-bold text-white">Add More Meal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
    },
    header: {
        backgroundColor: '#025146',
        height: '15%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 100,
        width: '100%',
        paddingLeft: 20,
        flexDirection: 'row'
        
    },
    btnAddMeal: {
        backgroundColor: '#EC744A',
        padding: 10,
        marginTop: 30,
        borderRadius: 20,
        width: '50%',
        alignItems: 'center',
        marginBottom: 30
    }
  });

  export default DetailMealsScreen;