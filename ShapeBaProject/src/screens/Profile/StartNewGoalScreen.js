// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Header, Input } from 'react-native-elements';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';


const StartNewGoalScreen = ({navigation}) => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [goal, setGoal] = useState("");
    const [accomplish, setAccomplish] = useState(null);
    const [activity, setActivity] = useState(null);
    const accomplishData = [
        { label: 'lose weight', value: '1' },
        { label: 'maintain weight', value: '2' },
        { label: 'gain weight', value: '3' },
    ];
    const activityLevel = [
        { label: 'little or no exercise', value: '1' },
        { label: '1-3 times/week', value: '2' },
        { label: '4-5 times/week', value: '3' },
        { label: 'Intense exercise 6-7 times/week', value: '4' },
        { label: 'Very intense exercise daily', value: '5' },
    ];
    const greenHeader = (navigation) => {
        return (
            <Header backgroundColor="#025146" containerStyle={styles.header}
                leftComponent={
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }} onPress={() => navigation.goBack()}>
                            <AntDesign name="leftcircleo" size={25} color="white" />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 20, width: '200%', fontWeight: 'bold' }}>Start New Goal</Text>
                    </View>
                }
            >
            </Header>
        )
    }

    return (
        <View style={styles.container}>
            {greenHeader(navigation)}
            <View className="mt-4" style={{ padding: 40, alignItems: 'center', justifyContent: 'center'}}>
                {/* weight and height */}
                <View className="flex-row">
                    <View style={{width: '50%'}}>
                        <Text style={{marginLeft: 10}} className="text-Green font-semibold text-base">Weight</Text>
                        <TextInput 
                            style={[styles.textbox, {marginRight: 5}]}
                            value={weight}
                            onChangeText={weight => setWeight(weight)}
                            keyboardType='decimal-pad'
                        />
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={{marginLeft: 10}} className="text-Green font-semibold text-base">Height</Text>
                        <TextInput 
                            style={[styles.textbox, {marginRight: 5}]}
                            value={height}
                            onChangeText={height => setHeight(height)}
                            keyboardType='decimal-pad'
                        />
                    </View>
                </View>
                <View className="mt-10" style={{width: '100%'}}>
                    {/* accomplish */}
                    <Text className="text-Green font-semibold text-base pl-3">Accomplish</Text>
                    <Dropdown
                        style={styles.dropdownStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={accomplishData}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Lose Weight"
                        value={accomplish}
                        onChange={item => {
                            setAccomplish(item.value);
                        }}
                    />
                    {/* goal weight */}
                    <View className="mt-10" style={{width: '100%'}}>
                        <Text style={{marginLeft: 10}} className="text-Green font-semibold text-base">Goal Weight</Text>
                        <TextInput
                            style={styles.textbox}
                            vlaue={goal}
                            onChangeText={({goal}) => setGoal(goal)}
                            keyboardType='decimal-pad'
                        />
                    </View>
                    {/* activity level */}
                    <Text className="text-Green font-semibold text-base pl-3 mt-10">Activity Level</Text>
                    <Dropdown
                        style={styles.dropdownStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={activityLevel}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Little or no exercise"
                        value={activity}
                        onChange={item => {
                            setActivity(item.value);
                        }}
                    />
                    
                </View>
                
                <View style={{ width: '100%', alignItems: 'center',}}>
                    <TouchableOpacity style={styles.btnFinish}>
                        <Text className="font-bold text-white test-base" >Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    header: {
        backgroundColor: '#025146',
        height: '18%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 100,
        width: '100%',
        paddingLeft: 20,
        flexDirection: 'row'
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
        borderColor: '#4B4B4B',
        height: 40,
    },
    btnFinish: {
        backgroundColor: '#EC744A',
        padding: 10,
        marginTop: 40,
        borderRadius: 20,
        width: '50%',
        alignItems: 'center',
        marginBottom: 30,
        elevation: 3
    }
  });

  export default StartNewGoalScreen;