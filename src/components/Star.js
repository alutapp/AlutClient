import React, { Component } from 'react';
import { Text, StyleSheet, View,
  TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Star extends Component{
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  render() {
		return (
      
      <TouchableHighlight
      activeOpacity={1}
      onHideUnderlay={this._onHideUnderlay.bind(this)}
      onShowUnderlay={this._onShowUnderlay.bind(this)}
    >
      <Icon name="star" size={30} 
          style={ this.state.pressStatus ? styles.starPress : styles.star } />
          </TouchableHighlight>

		)
	}
}

const styles = StyleSheet.create({
	starPress: {
  color: '#ffff1a',
	},
  star: {
      color: "black",
  }
});
