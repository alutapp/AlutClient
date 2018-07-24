import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  AsyncStorage
} from 'react-native';
import Images from '../../resources/images';

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
    if (this.state.pressed[item] == true) {
      const items = this.state.pressed;
      items[item] = false;
      this.setState({ pressed: items });
      // re-render
      this.forceUpdate();
    } else {
      const items = this.state.pressed;
      items[item] = true;
      this.setState({ pressed: items });
      // re-render
      this.forceUpdate();
    }
    console.log(this.state.pressed)
    
  }
  _renderHobby = ({ item }) => 
{    
      return (
    <View style={styles.columnContainer}>
      <TouchableOpacity onPress={() => this.toggleHobby(item)} style={styles.columnContainer}>
        <Image style={this.state.pressed[item] ? styles.hobbyPressed : styles.hobby} source={Images[item]} />
        <Text style={this.state.pressed[item] ? styles.textPress : styles.text}>{strings[item]}</Text>
      </TouchableOpacity>
    </View>)}
  ;

  _storeData = async () => {
    try {
      alert(this.state.pressed+await AsyncStorage.getItem('kidName') + await AsyncStorage.getItem('age') + await AsyncStorage.getItem('location') + await AsyncStorage.getItem('gender'))
      await AsyncStorage.setItem('id', this.state.pressed);
      
      // await AsyncStorage.setItem('phone', this.state.phone);
      // await AsyncStorage.setItem('password', this.state.password);
      this.props.link();

    } catch (error) {
      // Error saving data
    }
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
            columnWrapperStyle={{
              justifyContent: 'space-between',
              padding: 5
            }}
            renderItem={this._renderHobby}
            keyExtractor={this.keyExtractor}
          />

        </View>

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
  }

});
