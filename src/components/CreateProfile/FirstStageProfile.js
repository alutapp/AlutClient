import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import * as strings from '../../resources/strings'
import globalStyles from '../../resources/styles'

export default class FirstStageProfile extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      phone: "",
      password: "",
      passwordConfirmation: "",
      errors: ""
    }
  }
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('id', this.state.id);
      await AsyncStorage.setItem('phone', this.state.phone);
      await AsyncStorage.setItem('password', this.state.password);
      this.props.link();
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  } 
  render() {
    return (
      <View style={styles.container}>
        <Text style={globalStyles.h1Title}>{strings.fillYourDetails}</Text>
        <Text style={globalStyles.h2Title}>{strings.hiddenFields}</Text>
        <TextInput style={globalStyles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.inputId}
          placeholderTextColor="#ffffff"
          onChangeText={(val) => this.setState({ id: val })}
        />
        <TextInput style={globalStyles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.inputPhone}
          placeholderTextColor="#ffffff"
          onChangeText={(val) => this.setState({ phone: val })}

        />
        <TextInput style={globalStyles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.inputPassword}
          placeholderTextColor="#ffffff"
          onChangeText={(val) => this.setState({ password: val })}
          secureTextEntry={true}
        />
        <TextInput style={globalStyles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.passwordConfirmation}
          placeholderTextColor="#ffffff"
          onChangeText={(val) => this.setState({ passwordConfirmation: val })}
          secureTextEntry={true}
        />

        <View style={{ flexDirection: 'column', paddingBottom: 5 }}>
          <TouchableOpacity style={globalStyles.smallButton} onPress={this._storeData}>
            <Text style={styles.buttonText}>{strings.nextPage}</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
