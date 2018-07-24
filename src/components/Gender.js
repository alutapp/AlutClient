import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
}
    from 'react-native'
import * as strings from '../resources/strings';
import Images from '../resources/images';

export default class Gender extends Component {
    constructor() {
        super();
        this.state = {
            option1: true,
            option2: false,
        }
    }
    toggleGender = () => {
        if (this.state.option1 == true) {
            this.setState({ option1: false })
            this.setState({ option2: true })
        } else {
            this.setState({ option2: false })
            this.setState({ option1: true })
        }
        this.props.onSelect(this.state.option1 ? strings.girl : strings.boy);
    }
    render() {
        return (
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={this.toggleGender} style={styles.columnContainer}>
                    <Text style={this.state.option2 ? styles.textPress : styles.text}>{strings.female}</Text>
                    <Image style={this.state.option2 ? styles.buttonPress : styles.button} source={Images.girl} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleGender} style={styles.columnContainer}>
                    <Text style={this.state.option1 ? styles.textPress : styles.text}>{strings.male}</Text>
                    <Image style={this.state.option1 ? styles.buttonPress : styles.button} source={Images.boy} />
                </TouchableOpacity>
                <Text style={styles.title}>{strings.gender}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    rowContainer: {
        flexDirection: 'row'
    },
    title: {
        top: '2%',
        fontSize: 18,
        left: '20%'
    },
    text: {
        top: '5%',
        fontSize: 16,
    },
    textPress: {
        top: '5%',
        fontSize: 18,
        fontWeight: 'bold'
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        top: '2%',
        width: 50,
        height: 40
    },
    buttonPress: {
        top: '2%',
        width: 55,
        height: 44
    }
})