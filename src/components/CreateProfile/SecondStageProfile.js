import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
<<<<<<< HEAD
  Picker,
  AsyncStorage
} from 'react-native';
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
      isVisible1: false,
      isVisible2: false,
      isHighlighted: false,
      kidName: '',
      photo: '',
      age: '',
      location: '',
      gender: strings.boy
    };
  }
  _storeData = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const phone = await AsyncStorage.getItem('phone');
      const password = await AsyncStorage.getItem('password');
      await AsyncStorage.setItem('kidName', this.state.kidName);
      await AsyncStorage.setItem('photo', this.state.photo);
      await AsyncStorage.setItem('age', this.state.age);
      await AsyncStorage.setItem('location', this.state.location);
      await AsyncStorage.setItem('gender', this.state.gender);
      this.props.link();
    } catch (error) {
      // Error saving data
    }
  }

  genderPressed = (gender) => {
    if (this.state.gender === gender)

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
        <ModalDropdown options={strings.ages} defaultValue={strings.chooseAge} onSelect={(val) => this.setState({ age: strings.ages[val]})}
          style={[styles.selectBox, { width: 100 }]} dropdownStyle={{ width: 100 }} textStyle={styles.buttonText} />

        <ModalDropdown options={strings.areas} defaultValue={strings.area} onSelect={(val) => this.setState({ location: strings.areas[val] })}
          style={styles.selectBox} dropdownStyle={{ width: 270 }} textStyle={styles.buttonText} />

        <Gender onSelect={(val) => this.setState({ gender: val })} />

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
=======
  Picker
} from 'react-native';
const ages = ['10', '11', '12','13','14','15'];
const areas = ['צפון'];
import * as strings from '../../resources/strings'
import globalStyles from '../../resources/styles'
import {Avatar} from 'react-native-elements'
import ListPopover from 'react-native-list-popover';
import Images from '../../resources/images';

export default class SecondStageProfile extends Component {
constructor(props){
  super(props);
  this.state = {
     isVisible1: false,
     isVisible2: false

   };
}
addPic() {
  //TODO: add pic
}
	render(){
		return(
      <View style={styles.container}>
      <Text style = {globalStyles.h1Title}>{strings.fillKidDetails}</Text>
      <Text style = {[globalStyles.h2Title,{textAlign:'center'}]}>{strings.bestProfit}</Text>
      <View style = {{paddingTop:20}}>
      <Image style={{ width: 90, height: 90}} source={Images.addUser} onPress = {this.addPic} />
        </View>

        <TextInput style={globalStyles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder= {strings.kidName}
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            // onSubmitEditing={()=> }
            />

            <View>
            <TouchableHighlight
            style={styles.selectBox}
            onPress={() => this.setState({isVisible1: true})}>
            <Text>{this.state.item1 ||strings.chooseAge}</Text>
          </TouchableHighlight>
          <ListPopover
            list={ages}
            isVisible={this.state.isVisible1}
            onClick={(item) => this.setState({item1: item})}
            onClose={() => this.setState({isVisible1: false})}/>

            </View>

            <View>
            <TouchableHighlight
            style={styles.selectBox}
            onPress={() => this.setState({isVisible2: true})}>
            <Text>{this.state.item2 ||strings.area}</Text>
          </TouchableHighlight>
          <ListPopover
            list={areas}
            isVisible={this.state.isVisible2}
            onClick={(item) => this.setState({item2: item})}
            onClose={() => this.setState({isVisible2: false})}/>
            </View>
            
      <View style={styles.rowContainer}>
      <View style={[styles.columnContainer,{alignItems:'center'}]}>
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold'}}>{strings.male}</Text>
        <Image style={{ top: '2%', width: 50, height: 40 }} source={Images.boy} />
        </View>
      <View style={[styles.columnContainer,{alignItems:'center'}]}>
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold'}}>{strings.female}</Text>
        <Image style={{ top: '2%', width: 50, height: 40 }} source={Images.girl} />
        </View>
        
        <Text style={{ top: '5%', fontSize: 16, fontWeight: 'bold', left: '20%' }}>{strings.gender}</Text>
        </View>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
>>>>>>> origin/newchen
  },
  rowContainer: {
    flexDirection: 'row'
  },
  columnContainer: {
    flexDirection: 'column'
  },
<<<<<<< HEAD
  selectBox: {
    backgroundColor: 'rgba(255, 255,255,0.2)',
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 10,
    padding: 10,
    width: 270,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
=======
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  selectBox: {
   backgroundColor: 'white',
   borderRadius: 4,
   marginLeft: 10,
   marginRight: 10,
   marginVertical:10,
   padding: 10,

 },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
>>>>>>> origin/newchen
  }

});
