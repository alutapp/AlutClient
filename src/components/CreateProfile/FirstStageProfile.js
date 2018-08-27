import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import * as strings from '../../resources/strings'
import globalStyles from '../../resources/styles'
import Button from '../Button'

export default class FirstStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      phone: "",
      password: "",
    }
  }
  updateProfile = () => {
    this.props.addProfile("id", this.state.id);
    this.props.addProfile("phone", this.state.phone);
    this.props.addProfile("password", this.state.password);
    this.props.link();
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={globalStyles.h1Title}>{strings.fillYourDetails}</Text>
          <Text style={globalStyles.h2Title}>{strings.hiddenFields}</Text>
        </View>
        <Text style={globalStyles.formTitle}>{strings.inputId}</Text>
        <TextInput style={globalStyles.inputBox}
          onChangeText={(val) => this.setState({ id: val })} />
        <Text style={globalStyles.formTitle}>{strings.inputPhone}</Text>
        <TextInput style={globalStyles.inputBox}
          onChangeText={(val) => this.setState({ phone: val })} />
        <Text style={globalStyles.formTitle}>{strings.inputPassword}</Text>
        <TextInput style={globalStyles.inputBox} secureTextEntry={true}
          onChangeText={(val) => this.setState({ password: val })} />
        <Text style={globalStyles.formTitle}>{strings.passwordConfirmation}</Text>
        <TextInput style={globalStyles.inputBox} secureTextEntry={true}
          onChangeText={(val) => this.setState({ passwordConfirmation: val })} />
        <Button onPress={this.updateProfile} text={strings.nextPage} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5
  }
});
