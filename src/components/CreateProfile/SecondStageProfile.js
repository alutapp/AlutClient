import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Picker,
  AsyncStorage
} from 'react-native';
import * as strings from '../../resources/strings'
import globalStyles from '../../resources/styles'
import { Avatar } from 'react-native-elements'
import ListPopover from 'react-native-list-popover';
import Images from '../../resources/images';
import ModalDropdown from 'react-native-modal-dropdown';
export default class SecondStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible1: false,
      isVisible2: false

    };
  }
  _storeData = async () => {
    try {            
      const id = await AsyncStorage.getItem('id');
      const phone = await AsyncStorage.getItem('phone');
      const password = await AsyncStorage.getItem('password');
      await AsyncStorage.setItem('kidName', this.state.kidName);
      this.props.link();
    //  await AsyncStorage.setItem('phone', this.state.phone);
    //  await AsyncStorage.setItem('password', this.state.password);
    } catch (error) {
      // Error saving data
    }
  }
  onPress = () =>{
    
    this.props.link();
  }
  addPic() {
    //TODO: add pic
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={globalStyles.h1Title}>{strings.fillKidDetails}</Text>
        <Text style={[globalStyles.h2Title, { textAlign: 'center' }]}>{strings.bestProfit}</Text>
        <View style={{ paddingTop: 20 }}>
          <Image style={{ width: 90, height: 90 }} source={Images.addUser} onPress={this.addPic} />
        </View>

        <TextInput style={globalStyles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.kidName}
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          onChangeText={(val) => this.setState({ kidName: val })}
        />
<ModalDropdown options={strings.ages} defaultValue={strings.chooseAge}
            style={[styles.selectBox, {width: 100}]} dropdownStyle={{width: 100}}  textStyle={styles.buttonText}/>

<ModalDropdown options={strings.areas} defaultValue={strings.area}
            style={styles.selectBox} dropdownStyle={{flex: 1}} textStyle={styles.buttonText}/>

        <View style={styles.rowContainer}>
          <View style={[styles.columnContainer, { alignItems: 'center' }]}>
            <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold' }}>{strings.male}</Text>
            <Image style={{ top: '2%', width: 50, height: 40 }} source={Images.boy} />
          </View>
          <View style={[styles.columnContainer, { alignItems: 'center' }]}>
            <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold' }}>{strings.female}</Text>
            <Image style={{ top: '2%', width: 50, height: 40 }} source={Images.girl} />
          </View>

          <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold', left: '20%' }}>{strings.gender}</Text>
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
    alignItems: 'center',
    padding: 20
  },
  rowContainer: {
    flexDirection: 'row'
  },
  columnContainer: {
    flexDirection: 'column'
  },
  selectBox: {
    backgroundColor: 'rgba(255, 255,255,0.2)',
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
