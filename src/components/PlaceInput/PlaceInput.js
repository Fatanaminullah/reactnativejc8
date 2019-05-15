import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class PlaceInput extends Component{
    state = {
        placeName: ''
    }

    placeNameChangedHandler = (val) => {
        this.setState({placeName: val})
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = 'An Awesome Place'
                    onChangeText = {this.placeNameChangedHandler}
                    style={styles.placeInput}
                />
                <Icon
                    name="md-add" size={40} style={styles.placeButton}
                    onPress={() => {this.props.onPlaceAdded(this.state.placeName)}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width:'30%',
        textAlign:'center'        
    }
})

export default PlaceInput;