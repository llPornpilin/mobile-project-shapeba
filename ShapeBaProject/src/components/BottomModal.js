import React from 'react';
import {Modal, TouchableWithoutFeedback, 
StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

// Add Meals Bottom Modal (serving size)
export class BottomModal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}} />
        if (!onTouch) return view
        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    
    render() {
        let {show} = this.state
        const {onTouchOutside, title} = this.props

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View className="bg-white flex-end rounded-t-2xl p-3" style={{width: '100%'}}>
                        <View className="p-8">
                            <Text className="text-xl mb-8 font-semibold">
                                {title}
                            </Text>
                            <View className="bg-Gray p-3" style={styles.servingTextInput}>
                                <Text className="text-base" style={{justifyContent: 'flex-start'}}>serving size :</Text>
                                <TextInput
                                    style={{flex: 1}}
                                    className="h-15 pl-3 pr-3"
                                    underlineColorAndroid="transparent"
                                    keyboardType="number-pad"
                                // onChangeText={servingSize => setServingSize(servingSize)}
                                // value={servingSize}
                                />
                                <Text className="text-base" style={{justifyContent: 'flex-end'}}>g.</Text>
                            </View>
                            
                            <View className="flex-row justify-center">
                                <TouchableOpacity className="bg-white" style={[styles.button, {marginRight: 25}]} onPress={this.close}>
                                    <Text className="font-bold text-Orange text-lg">Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-Orange" style={[styles.button, {marginLeft: 25}]}>
                                    <Text className="font-bold text-white text-lg">Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        marginTop: 30,
        borderRadius: 30,
        width: '40%',
        alignItems: 'center',
        marginBottom: 30,
        elevation: 3,
        underlineColorAndroid:"transparent"
    },
    servingTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBlockColor: '#4B4B4B'
    }
})