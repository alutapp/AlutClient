import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
    Image
} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import RegisterRequest from '../pages/RegisterRequest';
import BadgeTabIcon from '../components/BadgeTabIcon'
import UsersList from '../components/UsersList'
import Test from './Test';
import FriendsRequests from './FriendsRequests'
import { createBottomTabNavigator } from 'react-navigation';

export class Main extends Component {

   render(){
		 return(
			 	<View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
        <MyHeader
						/>
				</View>
    )};


}


export default createBottomTabNavigator({
  הצעות: UsersList,
מועדפים: Test,
  הגדרות: FriendsRequests
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {

        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'הצעות') {
          iconName = 'people';
        } else if (routeName === 'הגדרות') {
          iconName = 'settings';
        }
        else if (routeName === 'מועדפים') {
          iconName = 'star';
        }
        return <BadgeTabIcon iconName={iconName} size={25} tintColor={tintColor} notificationCount={1}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#3D6DCC',
      inactiveTintColor: 'gray',
    },
  });
