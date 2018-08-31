import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Button from '../components/Button'
import SwitchButton from '../components/SwitchButton'
import * as globalStyles  from '../resources/styles'
import * as  common from '../resources/common'
import * as strings from '../resources/strings'
import Images from '../resources/images'

const switchtext = <Text>on</Text>;

export default class RegisterRequest extends Component {

  constructor(props) {
    super();
    this.props = props;
  }

  send_request = () => {
    console.log("req")
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <View style={[styles.columnContainer, { padding: 20 }]}>
          <Text style={globalStyles.h1Title}>{strings.gladYouJoinUs}</Text>
          <Text style={globalStyles.h2Title}>{strings.onlySomeDetails}</Text>
        </View>

        <View style={[styles.columnContainer, { padding: 20 }]}>
          <TextInput style={globalStyles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder={strings.inputEmail}
            placeholderTextColor={common.TEXT_COLOR}
            selectionColor="#fff"
            keyboardType="email-address"

          />
          <TextInput style={globalStyles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder={strings.firstName}

            placeholderTextColor={common.TEXT_COLOR}
          />
          <TextInput style={globalStyles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder={strings.lastName}
            placeholderTextColor={common.TEXT_COLOR}
          />
        </View>
        <Text style={[globalStyles.h2Title, { paddingHorizontal: 35 }]}>{strings.alutFriend}</Text>
        <View style={styles.columnContainer}>
          <SwitchButton option1={strings.switch_no} option2={strings.switch_yes} />
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 35, paddingVertical: 10 }}>
          <Text style={[globalStyles.h3Title, { paddingBottom: 15, paddingHorizontal: 10 }]}>
            {strings.first_comment}</Text>
          <Image style={{ width: 30, height: 30 }} source={Images.v} />
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 35 }}>
          <Text style={[globalStyles.h3Title, { paddingBottom: 15, paddingHorizontal: 10 }]}>
            {strings.second_comment}</Text>
          <Image style={{ width: 30, height: 30 }} source={Images.x} />
        </View>
        <View style={styles.columnContainer}>
          <Button onPress={this.send_request} text={strings.send_request} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingVertical: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  columnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
