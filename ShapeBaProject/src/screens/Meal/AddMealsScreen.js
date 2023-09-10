import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, FlatList } from 'react-native';
import { Button, Header } from 'react-native-elements';

// segmant tab
import SegmentedControlTab from "react-native-segmented-control-tab";

const AddMealsScreen = () => {
    const renderData = ({item}) => {
        return (
            <View style={{borderBottomWidth: 1, borderColor: '#A4A4A4'}}>
                <Text className="mb-5 mt-5">{item.name}</Text>
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
                <View style={{width: 370, padding: 20}}>
                    <Text className="text-white mb-2 text-xl font-bold">What do you eat ?</Text>
                    <Text className="text-white mb-4 text-base">Let see the calories</Text>
                    <TextInput className="bg-white rounded-3xl pl-4 h-10 mb-5" placeholder='Search ...'/>
                </View>
            </Header>
            <View style={styles.body}>
                <SegmentedControlTab
                    tabsContainerStyle={{ width: '90%', borderRadius: 30, overflow: 'hidden'}}
                    tabStyle={{borderWidth: 0,}}
                    firstTabStyle={{marginRight: 10, borderRadius: 30, borderColor:'white',}}
                    lastTabStyle={{marginLeft: 10, borderRadius: 30, borderColor:'white',}}
                    tabTextStyle={{color: '#EC744A', fontWeight: 'bold'}}
                    activeTabStyle={{backgroundColor: '#EC744A'}}
                    activeTabTextStyle={{}}
                    selectedIndex={0}
                    allowFontScaling={false}
                    values={["All", "My Menu"]}
                    onTabPress={index => this.setState({ selected: index })}
                />
                <View style={{padding: 20, marginTop: 10, width: '100%'}}>
                    <FlatList data={allMeals} renderItem={renderData} keyExtractor={item => item.id}/>
                </View>
            </View>
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
        height: 180,
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