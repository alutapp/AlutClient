import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import * as strings from '../../resources/strings'
import {Icon} from 'react-native-elements'
import globalStyles from '../../resources/styles'

export default class FinishStageProfile extends Component {

	render(){
		return(
      <View style={styles.container}>
				<Image style={{ width: 70, height: 70}}
					source={require('../../images/success.png')} />
				<Text style={globalStyles.h1Title}>תהליך ההרשמה הסתיים בהצלחה!</Text>
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
