import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';
import PhotoUploader from '../PhotoUploader'
import Button from '../Button'

import * as strings from '../../resources/strings'
import globalStyles from '../../resources/styles'
import { Avatar } from 'react-native-elements'
import ListPopover from 'react-native-list-popover';
import Images from '../../resources/images';
import ModalDropdown from 'react-native-modal-dropdown';
import Gender from '../Gender'
export default class SecondStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kidName: '',
      photo: '',
      age: strings.ages[0],
      location: strings.areas[0],
      gender: strings.boy
    };
  }

  updateProfile = () => {
    this.props.addProfile("kidName", this.state.kidName);
    this.props.addProfile("photo", this.state.photo);
    this.props.addProfile("age", this.state.age);
    this.props.addProfile("location", this.state.location);
    this.props.addProfile("gender", this.state.gender);
    this.props.link();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={globalStyles.h1Title}>{strings.fillKidDetails}</Text>
            <Text style={globalStyles.h2Title}>{strings.bestProfit}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <PhotoUploader onSelect={(val) => this.setState({ photo: val })} />
          </View>
          <View>

            <Text style={globalStyles.formTitle}>{strings.kidName}</Text>
            <View style={styles.container}>
              <TextInput style={globalStyles.inputBox}
                onChangeText={(val) => this.setState({ kidName: val })} />
            </View>
            <View style={styles.rightContainer}>
              <Text style={globalStyles.formTitle}>{strings.age}</Text>
              <ModalDropdown options={strings.ages} defaultValue={strings.ages[0]} onSelect={(val) => this.setState({ age: strings.ages[val] })}
                style={[globalStyles.selectBox, styles.dropdown]} dropdownStyle={styles.dropdown} textStyle={styles.dropdownText} />
              <Text style={globalStyles.formTitle}>{strings.area}</Text>
              <ModalDropdown options={strings.areas} defaultValue={strings.areas[0]} onSelect={(val) => this.setState({ location: strings.areas[val] })}
                style={globalStyles.selectBox} dropdownStyle={styles.dropdown} textStyle={styles.dropdownText} />

              <Gender onSelect={(val) => this.setState({ gender: val })} />
            </View>

            <Button onPress={this.updateProfile} text={strings.nextPage} />

          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10
  },
  rightContainer: {
    alignItems: 'flex-end',
    padding: 10
  },
  rowContainer: {
    flexDirection: 'row'
  },
  columnContainer: {
    flexDirection: 'column'
  },
  dropdown:{
    width: '60%'
  },
  dropdownText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  }

});
