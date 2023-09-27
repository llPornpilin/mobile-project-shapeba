import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { AntDesign, Feather } from '@expo/vector-icons';
import DetailMealsScreen from './DetailMealsScreen'

import AddMealsSegment from '../../components/AddMealsSegment';

const AddMealsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header backgroundColor="#025146" containerStyle={styles.header}>
                <View style={{ width: 370, paddingLeft: 20, paddingRight: 20 }}>
                    <View className="mt-6" style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }}>
                            <AntDesign name="leftcircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white mb-2 text-xl font-bold">What do you eat ?</Text>
                    </View>
                    <Text className="text-white mb-6 ml-10 text-base">Let see the calories !</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput className="bg-white rounded-3xl pl-4 h-10 mb-5" style={{flex: 1,}} placeholder='Search ...' />
                        {/* <Feather style={{marginLeft: -10}} name="search" size={24} color="red" /> */}
                    </View>
                </View>
            </Header>
            < AddMealsSegment />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#025146',
        height: 210,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    body: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    }
});

export default AddMealsScreen;