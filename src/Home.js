import React, { Component } from 'react';
import {View,Text} from 'react-native';
// import {Router, Stack, Scene} from 'react-native-router-flux';
import {createStackNavigator} from 'react-navigation';
import Password from './pages/Password'
import Login from './pages/Login';
import Createprofile from './pages/CreateProfile';
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
		screen: Main
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
headerMode: 'none'
});
