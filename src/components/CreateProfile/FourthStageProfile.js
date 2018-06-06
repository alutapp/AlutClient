import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import * as strings from '../../resources/strings'

import globalStyles from '../../resources/styles'

export default class FourthStageProfile extends Component {

	render(){
		return(
			<View style={styles.container}>
      <Text style = {globalStyles.h1Title}>{strings.fillYourDetails}</Text>
      <Text style = {globalStyles.h2Title}>{strings.hiddenFields}</Text>
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= {strings.inputId}
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              // onSubmitEditing={()=> }
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= {strings.inputPhone}
              placeholderTextColor = "#ffffff"

              />


  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
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
    color:'#ffffff',
    textAlign:'center'
  }

});