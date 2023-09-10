// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Header, Input } from 'react-native-elements';
import { Dropdown } from 'react-native-element-dropdown';


const StartNewGoalScreen = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [goal, setGoal] = useState("");
    const [accomplish, setAccomplish] = useState(null);
    const [activity, setActivity] = useState(null);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
    ];

    return (
        <View style={styles.container}>
            <Header backgroundColor="#025146" containerStyle={styles.header}>
                <View>
                </View> 
            </Header>
            <View className="bg-white" style={{height: '80%', padding: 20, alignItems: 'center'}}>
                {/* weight and height */}
                <View className="flex-row mt-4" style={{width: '100%'}}>
                    <View style={{width: '50%'}}>
                        <Text style={{marginLeft: 10}}>Weight</Text>
                        <TextInput style={[styles.textbox, {marginRight: 5}]} value={weight} onChangeText={weight => setWeight(weight)}/>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={{marginLeft: 10}}>Height</Text>
                        <TextInput style={[styles.textbox, {marginRight: 5}]} value={height} onChangeText={height => setHeight(height)}/>
                    </View>
                </View>
                <View className="mt-10" style={{width: '100%'}}>
                    {/* accomplish */}
                    <Dropdown
                        style={styles.dropdownStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        value={accomplish}
                        onChange={item => {
                            setAccomplish(item.value);
                        }}
                    />
                    {/* goal weight */}
                    <View className="mt-10" style={{width: '100%'}}>
                        <Text style={{marginLeft: 10}}>Goal Weight</Text>
                        <TextInput style={styles.textbox} vlaue={goal} onChangeText={({goal}) => setGoal(goal)} />
                    </View>
                    {/* activity level */}
                    <Dropdown className="mt-10"
                        style={styles.dropdownStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        value={activity}
                        onChange={item => {
                            setActivity(item.value);
                        }}
                    />
                </View>
                
                
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Button style={styles.buttonSave} title='Save'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#025146',
        height: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    textbox: {
        backgroundColor: '#F7F7FB',
        borderWidth: 0,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    dropdownStyle: {
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 15,
    },
    buttonSave: {
        width: '100%',
    }
  });

  export default StartNewGoalScreen;