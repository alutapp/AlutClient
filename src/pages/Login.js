import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Button from '../components/Button'
import Logo from '../components/Logo';
import SignIn from '../components/SignIn';
import * as strings from '../resources/strings'
import * as common from '../resources/common'

import * as globalStyles  from '../resources/styles'


export default class Login extends Component {

  constructor(props){
    super(props);
  }


  render() {
   const { navigate } = this.props.navigation;
    return (
      <View style={globalStyles.container}>
        <Logo text={strings.welcomeText}/>
        <SignIn type="Login" link={() => navigate('Home')}/>

        <View style={styles.leftView}>
        <TouchableOpacity onPress={() => navigate('Password')}>
          <Text style={styles.text}>{strings.forgotPassword}</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.centerView}>
          <Text style={styles.h1text}>{strings.haventJoinYet}</Text>
          </View>
        
        <View style={styles.centerView}>
        <Button onPress={() => navigate('SignUp')} text={strings.signUpText} />
        </View>

        <View style={styles.leftView}>
          <TouchableOpacity onPress={() => navigate('CreateProfile')}>
          <Text style={styles.text}> {strings.aboutUs}</Text>
          </TouchableOpacity>
          </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: common.TEXT_COLOR,
    fontSize: 16
  },
  h1text: {
    color: common.TEXT_COLOR,
    fontSize: 20
  },
  leftView: {
    flex: 1,
    flexDirection: 'row',
    padding:10
  },
  centerView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
