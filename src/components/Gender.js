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
import * as globalStyles from '../resources/styles'
import * as common from '../resources/common'

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
                    <Text style={this.state.option2 ? [styles.text, styles.textPress] : styles.text}>{strings.female}</Text>
                    <Image style={this.state.option2 ? styles.buttonPress : [styles.button,styles.buttonPress]} source={Images.girl} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleGender} style={styles.columnContainer}>
                    <Text style={this.state.option1 ? [styles.text, styles.textPress] : styles.text}>{strings.male}</Text>
                    <Image style={this.state.option1 ? styles.buttonPress : [styles.button,styles.buttonPress]} source={Images.boy} />
                </TouchableOpacity>
                <Text style={globalStyles.formTitle}>{strings.gender}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    rowContainer: {
        flexDirection: 'row'
    },
    text: {
        top: '5%',
        fontSize: 16,
        color: common.TEXT_COLOR
    },
    textPress: {
        fontWeight: 'bold'
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        opacity:0.5
    },
    buttonPress: {
        top: '2%',
        width: 64,
        height: 64
    }
})