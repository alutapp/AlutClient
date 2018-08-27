import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import globalStyles from '../resources/styles'

export default class Button extends Component {

    render() {
        return (
            <TouchableOpacity style={globalStyles.button} onPress={this.props.onPress}>
                <Text style={globalStyles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}