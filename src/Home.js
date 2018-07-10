import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Password from './pages/Password'
import Login from './pages/Login';
import Createprofile from './pages/Createprofile';
import RegisterRequest from './pages/RegisterRequest';
import Main from './pages/Main';

export class HomeScreen extends Component {
	render() {
		return(
			<View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
			<Text>Home Screen</Text>
			</View>

			)
	}
}

export default createStackNavigator({
	Login: {
		screen: Login
	},
	Home: {
		screen: Main,
		navigationOptions: {
        gesturesEnabled: false
      }
	},

	SignUp:{
		screen:RegisterRequest
	},
	CreateProfile:{
		screen:Createprofile
	},
	Password:{
		screen:Password
	}
},
{
headerMode: 'none',

});
