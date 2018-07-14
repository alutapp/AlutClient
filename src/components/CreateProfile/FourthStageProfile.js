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
import Slider from "react-native-slider";

export default class FourthStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
	render(){
		return(
			<View style={styles.container}>
      <Text style = {globalStyles.h1Title}>{strings.fillYourDetails}</Text>
      <Text style = {globalStyles.h2Title}>{strings.hiddenFields}</Text>

      <View style={styles.container2}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Text>
          Value: {this.state.value}
        </Text>
      </View>


  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },

  container2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
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
