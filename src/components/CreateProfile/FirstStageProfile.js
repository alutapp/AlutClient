import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import * as strings from '../../resources/strings'
import * as globalStyles from '../../resources/styles'
import * as tests from '../../resources/tests'
import * as common from '../../resources/common'

import Button from '../Button'
import t from 'tcomb-form-native'; // 0.6.9
import Form from '../Form'


export default class FirstStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }
  updateProfile = () => {
    console.log(this.state)
    const value = this._form.getValue();
    if (value) {
      this.props.addProfile("id", this.state.person.pid);
      this.props.addProfile("phone", this.state.person.phone);
      this.props.addProfile("password", this.state.person.password);
      this.props.link();
    }
  }
  setForm(c){
    this._form = c
  }
  onChange(person) {
    this.setState({ person });
  }
  render() {
    this.samePassword = t.refinement(t.String, (s) => {
      return s == this.state.person.password;
    });

    this.Person = t.struct({
      pid: tests.id,
      phone: tests.phone,
      password: tests.password,
      passwordConfirmation: this.samePassword,
    });
    this.fields = {
      pid: {
        placeholder: strings.inputId,
        error: strings.idError,
        placeholderTextColor: common.TEXT_COLOR,
        underlineColorAndroid: common.TEXT_COLOR
      },
      phone: {
        placeholder: strings.inputPhone,
        error: strings.phoneError,
        placeholderTextColor: common.TEXT_COLOR,
        underlineColorAndroid: common.TEXT_COLOR
      },
      password: {
        placeholder: strings.inputPassword,
        error: strings.passwordError,
        placeholderTextColor: common.TEXT_COLOR,
        underlineColorAndroid: common.TEXT_COLOR,
        secureTextEntry: true

      },
      passwordConfirmation: {
        placeholder: strings.passwordConfirmation,
        error: strings.confirmPasswordError,
        placeholderTextColor: common.TEXT_COLOR,
        underlineColorAndroid: common.TEXT_COLOR,
        secureTextEntry: true
      }
    }

    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={globalStyles.h1Title}>{strings.fillYourDetails}</Text>
            <Text style={globalStyles.h2Title}>{strings.hiddenFields}</Text>
          </View>
          <Form type= {this.Person} fields = {this.fields} setForm={(c)=>this.setForm(c) }
          onChange = {(c)=>this.onChange(c)}/>
          <Button
            text={strings.nextPage}
            onPress={this.updateProfile}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  }
});

