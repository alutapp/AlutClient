/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';


import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});

export default createBottomTabNavigator({
  הצעות: App,
מועדפים: Test,
  הגדרות: Test
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

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <BadgeTabIcon iconName={iconName} size={25} tintColor={tintColor} notificationCount={5}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#3D6DCC',
      inactiveTintColor: 'gray',
    },
  });
