import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Images from '../../resources/images';
import Button from '../Button'

import * as strings from '../../resources/strings'

import globalStyles from '../../resources/styles'

export default class ThirdStageProfile extends Component {

  constructor() {
    super();
    this.state = {
      pressed: []
    }
  }
  toggleHobby = (item) => {
    if (this.state.pressed.includes(item)) {
      this.state.pressed.pop(item)
    } else {
      this.state.pressed.push(item)
    }
    this.forceUpdate(); // re-render
  }
  _renderHobby = ({ item }) => {
    return (
      <View style={styles.columnContainer}>
        <TouchableOpacity onPress={() => this.toggleHobby(item)} style={styles.columnContainer}>
          <Image style={this.state.pressed.includes(item) ? styles.hobbyPressed : styles.hobby} source={Images[item]} />
          <Text style={this.state.pressed.includes(item) ? styles.textPress : styles.text}>{strings[item]}</Text>
        </TouchableOpacity>
      </View>)
  }
    ;

  updateProfile = () => {
    this.props.addProfile("hobbies", this.state.pressed);
    this.props.link();
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <View style={styles.container}>
        <Text style={globalStyles.h1Title}>{strings.hobbies}</Text>
        <Text style={globalStyles.h2Title}>{strings.fillHobbies}</Text>

        <View style={styles.rowContainer}>
          <FlatList
            numColumns={3}
            data={strings.allHobbies}
            columnWrapperStyle={styles.wrapper}
            renderItem={this._renderHobby}
            keyExtractor={this.keyExtractor}
          />
        </View>
        <Button onPress={this.updateProfile} text={strings.nextPage} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    top: '2%',
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff'
  },
  textPress: {
    top: '2%',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
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
    fontWeight: '500'
  },
  hobbyPressed: {
    top: '10%',
    width: 100,
    height: 100
  },
  hobby: {
    top: '10%',
    width: 90,
    height: 90
  },
  wrapper:{
    justifyContent: 'space-between',
    padding: 5
  }
});
