import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import * as strings from '../resources/strings'
import * as globalStyles from '../resources/styles'
import * as tests from '../resources/tests'
import * as common from '../resources/common'
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  textbox: {
    normal: {
      borderWidth: 0,
      marginBottom: 0,
      marginBottom: 5,
      textAlign: "right",
      color: common.TEXT_COLOR
    },
    error: {
      borderWidth: 0,
      marginBottom: 0,
      marginBottom: 5,
      textAlign: "right",
      color: common.TEXT_COLOR
    }
  },
  textboxView: {
    normal: {
      borderWidth: 0,
      borderRadius: 0,
      borderColor: common.BORDER_COLOR
    },
    error: {
      borderWidth: 0,
      borderRadius: 0,
      borderColor: common.BORDER_COLOR
    }
  }
}

export default class FirstStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: {}
    };
  }

  onChange(type) {
    this.setState({ type });
    this.props.onChange(type)
  }
  render() {
    const Form = t.form.Form;

    this.options = {
      auto: 'placeholders',
      fields: this.props.fields,
      stylesheet: formStyles,
    };
    return (
      <View>
        <Form
          ref={c => this.props.setForm(c)}
          type={this.props.type}
          value={this.state.type}
          onChange={(v) => this.onChange(v)}
          options={this.options}
        />
      </View>
    );
  }
}


