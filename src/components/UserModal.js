import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-modal'; // 2.4.0
import { Avatar, Header, Icon } from 'react-native-elements';
import * as strings from '../resources/strings'
import Images from '../resources/images'

export default class UserModal extends Component {

  constructor(props) {
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

      <View style={styles.rowContainer}>
        <Icon name="star" size={30} style={this.state.star} />
        <Image style={styles.user}
          source={require('../images/user.png')} />
      </View>
      <View style={styles.rowContainer}>
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold', left: '20%' }}>{this.props.user.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold', left: '20%' }}>{this.props.user.isMale ? strings.boy : strings.girl} {this.props.user.age}</Text>
        <Image style={{ top: '2%', width: 50, height: 40 }}
          source={this.props.user.isMale ? Images.boy : Images.girl} />
      </View>
      <View style={styles.rowContainer}>
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold', left: '20%' }}>{this.props.user.location}</Text>
        <Image style={{ top: '2%', width: 50, height: 40 }} source={Images.location} />
        </View>
        <View style={styles.rowContainer}>
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold', left: '20%' }}>{strings.hobbies}</Text>

</View>
        <View style={styles.rowContainer}>
        {this._renderButton('Close', () => this.setState({ modalClose: false }))}
      </View>
    </View>
  );

  componentWillReceiveProps = (nextProps) => (
    this.setState({ modalClose: true })
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

  columnContainer: {
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
  },
  star: {
    color: '#ffff00',
  },
  user: {
    top: '2%',
    width: 50,
    height: 40,
    alignItems: 'flex-start'
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});