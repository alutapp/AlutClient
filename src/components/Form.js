import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import globalStyles from '../resources/styles'
import * as strings from '../resources/strings'
import Images from '../resources/images'
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onPress = () => {
    this.props.link();

  //   fetch('62.90.178.241:3000/SignIn', {
  //     method:'POST',
  //     headers: {
  //       'Accept':'application/json',
  //     }, body:JSON.stringify({
  //       email: this.state.username,
  //       password: this.state.password,
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((res) => {
  //     if(res.success === true) {
  //       AsyncStorage.setItem('user', res.user);
  //           this.props.link();
  //     } else {
  //       alert(res.message);
  //     }
  //   })
  // .done(); 

  }

	render(){
		return(
			<View style={styles.container}>
      
        <View style={styles.rowContainer}>
          <TextInput style={globalStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= {strings.inputEmail}
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText = {(username) => this.setState({username})}
              onSubmitEditing={()=> this.state.password.focus()
              }
              />
          <Image style={{ top: '2%', width: 50, height: 50 }} source={Images.loginUser} />
        </View>
        
        <View style={styles.rowContainer}>
          <TextInput style={globalStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder={strings.inputPassword}
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              secureTextEntry={true}
              text-align= 'left'
              onChangeText = {(password) =>  this.setState({password})}
              />
          <Image style={{ top: '2%', width: 50, height: 50 }} source={Images.lock} />
          </View>

           <TouchableOpacity style={styles.button} onPress={this.onPress}>
             <Text style={styles.buttonText}>{strings.loginButton}</Text>
           </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  rowContainer: {
    flexDirection: 'row'
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
