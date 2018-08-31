
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Avatar, Header, Icon } from 'react-native-elements';

import { createBottomTabNavigator } from 'react-navigation';

export default class BadgeTabIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { notificationCount: props.notificationCount };
  }
  render() {
    return (
      <View>
        <Icon name={this.props.iconName} size={30} color={this.props.tintColor} />
        {
          this.props.notificationCount > 0 ?
            <View style={styles.textView}>
              <Text style={styles.notificationText}>{this.state.notificationCount}</Text>
            </View> : null
        }
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
  textView: {
    position: 'absolute',
    left: 25,
    top: 2,
    backgroundColor: 'red',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationText: {
    color: 'white'
  }
});
