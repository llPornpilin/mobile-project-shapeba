import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { renderItemSeparator } from './DetailMealsScreen'
import DetailMealsScreen from './DetailMealsScreen'

// segmant tab
import SegmentedControlTab from "react-native-segmented-control-tab";
import { SafeAreaView } from 'react-native-safe-area-context';

const AddMealsScreen = ({ navigation }) => {
    const renderData = ({ item }) => {
        return (
            <TouchableOpacity>
                <Text className="mb-5 mt-5 text-base font-semibold">{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const allMeals = [
        { id: 1, name: 'meals1' },
        { id: 2, name: 'meals2' },
        { id: 3, name: 'meals3' },
        { id: 4, name: 'meals4' },
        { id: 5, name: 'meals5' },
        { id: 6, name: 'meals6' },
        { id: 7, name: 'meals7' },
        { id: 8, name: 'meals8' },
        { id: 9, name: 'meals9' },
        { id: 10, name: 'meals10' },
        { id: 11, name: 'meals11' },
        { id: 12, name: 'meals12' },
        { id: 13, name: 'meals13' },
        { id: 14, name: 'meals14' },
    ];
    return (
        <View style={styles.container}>
            <Header backgroundColor="#025146" containerStyle={styles.header}>
                <View style={{ width: 370, padding: 20 }}>
                    <View className="mt-10" style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }}>
                            <AntDesign name="leftcircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white mb-2 text-xl font-bold">What do you eat ?</Text>
                    </View>
                    <Text className="text-white mb-4 ml-10 text-base">Let see the calories !</Text>
                    <TextInput className="bg-white rounded-3xl pl-4 h-10 mb-5" placeholder='Search ...' />
                </View>
            </Header>
            {/* <View style={styles.body}> */}
            <SegmentedControlTab
                tabsContainerStyle={{ width: '90%', borderRadius: 30, overflow: 'hidden', padding: 30 }}
                tabStyle={{ borderWidth: 0 }}
                firstTabStyle={{ marginRight: 0, borderRadius: 0, borderColor: 'white', }}
                lastTabStyle={{ marginLeft: 0, borderRadius: 0, borderColor: 'red', borderWidth: 1 }}
                tabTextStyle={{ color: '#EC744A', fontWeight: 'bold' }}
                activeTabStyle={{ backgroundColor: '#EC744A' }}
                activeTabTextStyle={{}}
                selectedIndex={0}
                allowFontScaling={false}
                values={["All", "My Menu"]}
            // onTabPress={index => this.setState({ selected: index })}
            />
            {/* <View style={{padding: 20, marginTop: 10, width: '100%'}}> */}
            <FlatList style={{ padding: 40, paddingTop: 5, width: '100%', marginBottom: 20 }} data={allMeals} renderItem={renderData} keyExtractor={item => item.id} ItemSeparatorComponent={renderItemSeparator} />
            {/* </View> */}
            {/* </View> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
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