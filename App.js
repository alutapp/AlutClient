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


import Home from './src/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Home/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});
