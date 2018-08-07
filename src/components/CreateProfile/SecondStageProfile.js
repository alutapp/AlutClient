import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Picker
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload'


const ages = ['10', '11', '12', '13', '14', '15'];
const areas = ['צפון'];
import * as strings from '../../resources/strings'
import globalStyles from '../../resources/styles'
import { Avatar } from 'react-native-elements'
import ListPopover from 'react-native-list-popover';
import Images from '../../resources/images';

export default class SecondStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible1: false,
      isVisible2: false

    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={globalStyles.h1Title}>{strings.fillKidDetails}</Text>
        <Text style={[globalStyles.h2Title, { textAlign: 'center' }]}>{strings.bestProfit}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>

          <PhotoUpload
            onPhotoSelect={avatar => {
              if (avatar) {
                console.log('Image base64 string: ', avatar)
              }
            }}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 20
              }}
              resizeMode='cover'
              source={{
                uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
              }}
            />
          </PhotoUpload>
        </View>

        <View flex={2}>
        <View>
        <TextInput style={globalStyles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.kidName}
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
        // onSubmitEditing={()=> }
        />

          <TouchableHighlight
            style={styles.selectBox}
            onPress={() => this.setState({ isVisible1: true })}>
            <Text>{this.state.item1 || strings.chooseAge}</Text>
          </TouchableHighlight>
          <ListPopover
            list={ages}
            isVisible={this.state.isVisible1}
            onClick={(item) => this.setState({ item1: item })}
            onClose={() => this.setState({ isVisible1: false })} />
        </View>

        <View>
          <TouchableHighlight
            style={styles.selectBox}
            onPress={() => this.setState({ isVisible2: true })}>
            <Text>{this.state.item2 || 'אזור מגורים'}</Text>
          </TouchableHighlight>
          <ListPopover
            list={areas}
            isVisible={this.state.isVisible2}
            onClick={(item) => this.setState({ item2: item })}
            onClose={() => this.setState({ isVisible2: false })} />
        </View>

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
    flexDirection: 'row'
  },
  columnContainer: {
    flexDirection: 'column'
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  selectBox: {
    backgroundColor: 'white',
    borderRadius: 4,
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
