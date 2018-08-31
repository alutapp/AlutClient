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

import * as globalStyles  from '../../resources/styles'

import * as common from '../../resources/common'

export default class ThirdStageProfile extends Component {

  constructor() {
    super();
    this.state = {
      pressed: []
    }
  }
  toggleHobby = (item) => {
    if (this.state.pressed.includes(item)) {
      var hobbies = [...this.state.pressed]
      hobbies.splice(hobbies.indexOf(item) , 1)
      this.setState({ pressed:hobbies });
    } else {
      this.setState({ pressed: [...this.state.pressed, item] })
    }
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
        <View style={styles.container}>
          <Text style={globalStyles.h1Title}>{strings.hobbies}</Text>
          <Text style={globalStyles.h2Title}>{strings.fillHobbies}</Text>
        </View>
        <View style={styles.rowContainer}>
          <FlatList
            numColumns={3}
            data={strings.allHobbies}
            columnWrapperStyle={styles.wrapper}
            renderItem={this._renderHobby}
            keyExtractor={this.keyExtractor}
            extraData={this.state}
          />
        </View>

        <Button onPress={this.updateProfile} text={strings.nextPage} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5
  },

  rowContainer: {
    flexDirection: 'row'
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 80
  },
  text: {
    top: '2%',
    fontSize: 16,
    textAlign: 'center',
    color: common.TEXT_COLOR
  },
  textPress: {
    top: '2%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: common.TEXT_COLOR
  },
  hobbyPressed: {
    top: '10%',
    width: 64,
    height: 64,
    margin: 5
  },
  hobby: {
    opacity: 0.5,
    top: '10%',
    width: 64,
    height: 64,
    margin: 5
  },
  wrapper: {
    justifyContent: 'space-between',
    padding:10
  }
});
