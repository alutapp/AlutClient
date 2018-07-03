import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal'; // 2.4.0


export default class UserModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalClose: true
    };
  
  }
 
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton('Close', () => this.setState({modalClose:false}))}
    </View>
  );

  componentWillReceiveProps= (nextProps) => (
    this.setState({modalClose :true})
  );


  render() {
    return (
      <View style={styles.container}>
      
        <Modal isVisible={this.props.modalVisible && this.state.modalClose}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});