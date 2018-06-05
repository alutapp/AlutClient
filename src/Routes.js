import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Password from './pages/Password'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Createprofile from './pages/CreateProfile';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
			      <Scene key="createprofile" component={Createprofile} title="CreateProfile"/>
				  <Scene key="password" component={Password} title="Password"/>
			    </Stack>
			 </Router>
			)
	}
}
