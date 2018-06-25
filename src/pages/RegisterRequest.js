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
        <View style = {styles.container}>
          <View style = {styles.columnContainer}>
            <Text style = {globalStyles.h1Title}>{strings.gladYouJoinUs}</Text>
            <Text style = {globalStyles.h2Title}>{strings.onlySomeDetails}</Text>
          </View>
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
          <Text style = {globalStyles.h2Title}>{strings.alutFriend}</Text>
          <SwitchButton option1 = {strings.switch_no} option2 = {strings.switch_yes}/>
          <View style = {{flexDirection:'row',paddingHorizontal:40}}>
          <Image style={{ width: 30, height: 30 }}
            source={require('../images/v.png')} />
          <Text style = {[globalStyles.h3Title, {paddingBottom:25}]}>{strings.first_comment}</Text>
          </View>
          <View style = {{flexDirection:'row',paddingHorizontal:40}}>
          <Image style={{ width: 30, height: 30 }}
            source={require('../images/x.png')} />
          <Text style = {[globalStyles.h3Title,{paddingBottom:15}]}>{strings.second_comment}</Text>
          </View>

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
