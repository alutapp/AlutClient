import React, { Component } from 'react';
import {
  Text, TouchableOpacity, StyleSheet, View, Image
  , FlatList
} from 'react-native';
import Modal from 'react-native-modal'; // 2.4.0
import { Avatar, Header } from 'react-native-elements';
import * as strings from '../resources/strings'
import Images from '../resources/images'
import Icon from 'react-native-vector-icons/EvilIcons';
export default class UserModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalClose: true
    };

  }
  pressedStar = () => (
    this.setState({ modalClose: false })
  );
  _renderHobby = ({ item }) => (
    <Image style={{ top: '10%', width: 50, height: 60 }} source={Images[item]} />
  );
  keyExtractor = (item, index) => index.toString()


  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={[styles.rowContainer,{justifyContent:'flex-start'}]}>
        <View style={[styles.columnContainer, { flex:1}]}>
          <TouchableOpacity onPress={this.pressedStar}>
            <Icon name={'star'} size={50} style={styles.icon} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf:'flex-start'}}>{strings.add}</Text>
        </View>
        <View style={[styles.columnContainer, {flex:1, alignItems: 'center' }]}>
          <Image style={styles.user} source={Images.user} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.user.name}</Text>
        </View>
        <View style={[styles.columnContainer, {flex:1, alignItems: 'center' }]}>
        </View>
      </View>

    <View style={[styles.columnContainer, { alignItems: 'center' }]}>
      <View style={[styles.rowContainer]}>
        <View style={styles.columnContainer}>
          <Text style={{ height: 35, top: '15%', fontSize: 16, fontWeight: 'bold' }}>{this.props.user.isMale ? strings.boy : strings.girl} {this.props.user.age}</Text>
          <Text style={{ top: '15%', fontSize: 16, fontWeight: 'bold' }}>{this.props.user.location}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Image style={{ width: 50, height: 40 }} source={this.props.user.isMale ? Images.boy : Images.girl} />
          <Image style={{ left: '20%' }} source={Images.location} />
        </View></View></View>
    <View style={[styles.columnContainer, { alignItems: 'flex-end' }]}>
      <Text style={{ paddingTop: 10, fontSize: 16, fontWeight: 'bold' }}>{strings.hobbies}</Text>
    </View>

    <View style={[styles.columnContainer, { alignItems: 'flex-end' }]}>
      <FlatList
        horizontal
        data={this.props.user.hobbies}
        renderItem={this._renderHobby}
        keyExtractor={this.keyExtractor}
      />

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
  user: {
    width: 90,
    height: 90
  },
  modalContent: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});