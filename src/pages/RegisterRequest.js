import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import SwitchButton from '../components/SwitchButton'
import globalStyles from '../resources/styles'
import * as strings from '../resources/strings'
import Images from '../resources/images'
import {Icon} from 'react-native-elements'

const switchtext = <Text>on</Text>;

export default class RegisterRequest extends Component{

    constructor(props){
        super();
        this.props = props;
    }

	render(){
		return(
			<View style={globalStyles.container}>
          <View style = {[styles.columnContainer, {padding:20}]}>
            <Text style = {globalStyles.h1Title}>{strings.gladYouJoinUs}</Text>
            <Text style = {globalStyles.h2Title}>{strings.onlySomeDetails}</Text>
          </View>
          
          <View style = {[styles.columnContainer, {padding:20}]}>
        <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder={strings.inputEmail}
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"

        />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder={strings.firstName}

              placeholderTextColor = "#ffffff"
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder={strings.lastName}

              placeholderTextColor = "#ffffff"
              />
              </View>
          <Text style = {[globalStyles.h2Title, {paddingHorizontal:35}]}>{strings.alutFriend}</Text>
          <View style = {styles.columnContainer}>
          <SwitchButton option1 = {strings.switch_no} option2 = {strings.switch_yes}/>
          </View>
          <View style = {{flexDirection:'row',paddingHorizontal:35, paddingVertical:10}}>
          <Text style = {[globalStyles.h3Title, {paddingBottom:15,paddingHorizontal:10}]}>
          {strings.first_comment}</Text>
          <Image style={{ width: 30, height: 30 }} source={Images.v} />
          </View>
          <View style = {{flexDirection:'row',paddingHorizontal:35}}>
          <Text style = {[globalStyles.h3Title,{paddingBottom:15,paddingHorizontal:10}]}>
          {strings.second_comment}</Text>
          <Image style={{ width: 30, height: 30 }} source={Images.x} />
          </View>
          <View style = {styles.columnContainer}>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{strings.send_request}</Text>
          </TouchableOpacity>
          </View>
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    position:'absolute',
    paddingVertical:70,
    justifyContent:'center',
    alignItems: 'center'
  },

  columnContainer : {
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'column'
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
    width:250,
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
  },
  Text: {
    marginVertical: 5,
    margin: 5,
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
