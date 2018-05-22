/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyHeader from './components/MyHeader.js'
import BadgeTabIcon from './components/BadgeTabIcon.js'
import Test from './Test';
import {Icon} from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation';


type Props = {};
export class App extends Component<Props> {
  render() {
    return (
      <View>
    <MyHeader />
}
      />
        <Text style={styles.welcome}>
          ברוכים הבאים לאפליקציית אלו״ט
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
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
