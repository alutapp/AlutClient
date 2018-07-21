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

import globalStyles from '../resources/styles'


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

        <View style={styles.leftView}>
        <TouchableOpacity onPress={() => navigate('Password')}>
          <Text style={styles.text}>{strings.forgotPassword}</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.centerView}>
          <Text style={styles.h1text}>{strings.haventJoinYet}</Text>
          </View>
        
        <View style={styles.centerView}>
        <TouchableOpacity style={globalStyles.smallButton} onPress={() => navigate('SignUp')}>
          <Text style={styles.text}>{strings.signUpText}</Text>
        </TouchableOpacity>
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
  container: {
    backgroundColor: '#455a64',
    flex: 1
  },
  text: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  h1text: {
    color: 'rgba(255,255,255,0.6)',
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
