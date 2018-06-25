
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Avatar,Header} from 'react-native-elements';

export default class MyHeader extends Component<Props> {
  render() {
    return (
      <Header
       leftComponent={{ icon: 'menu', color: '#fff' }}
      statusBarProps={{ barStyle: 'light-content' }}
      centerComponent={<View style = {styles.container}>
      <Avatar
      size="small"
      rounded
      source={require('./../images/logo.png')}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}/>
      <Text style={{top:'18%' , left:'15%', fontWeight: 'bold'}}>אלו״ט</Text></View>}
      outerContainerStyles={{ backgroundColor: '#cccccc' }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
);
}
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row'
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
