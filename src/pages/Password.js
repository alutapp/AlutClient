import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Logo from '../components/Logo';
import * as globalStyles  from '../resources/styles'

import * as common from '../resources/common'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    signup() {
        Actions.signup()
    }

    password() {
        Actions.password()
    }

    goBack() {
        Actions.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo text="Forgot your password?"/>
                <Text style={styles.signupText}>Don't worry. Resetting your password is easy, just tell us the email address you registered with.</Text>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor={common.TEXT_COLOR}
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Remember your password?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Go back</Text></TouchableOpacity>
				</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.BACKGROUND_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    signupButton: {
        color: common.TEXT_COLOR,
        fontSize: 16,
        fontWeight: '500'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: common.TEXT_COLOR,
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:common.TEXT_COLOR,
        textAlign:'center'
      }
});
