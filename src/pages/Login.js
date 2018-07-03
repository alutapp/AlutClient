import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import * as strings from '../resources/strings'

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  constructor(props){
    super(props);
  }


  render() {
   const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo text={strings.welcomeText}/>
        <Form type="Login" link={() => navigate('Home')}/>
        <TouchableOpacity onPress={() => navigate('Password')}>
          <Text style={styles.signupText}>{strings.forgotPassword}</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>{strings.signUpText}</Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}><Text style={styles.signupButton}> {strings.signUp}</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('CreateProfile')}><Text style={styles.signupButton}> {strings.createProfile}</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
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
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  passwordButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10
  },
});
