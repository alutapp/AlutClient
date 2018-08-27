import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Button from '../components/Button'
import globalStyles from '../resources/styles'
import * as strings from '../resources/strings'
import Images from '../resources/images'
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onPress = () => {
    //   fetch('http://62.90.178.241:3000/findOneUser/123456789', {
    //     method:'GET',
    //     headers: {
    //       'Accept':'application/json',
    //       'Content-Type': 'application/json',
    //     }
    //   })
    //   .then((response) => response.json())
    //   .then((res) => {
    //       alert(JSON.stringify(res));
    this.props.link()
    //     }
    //   )
    // .done(); 
    //   fetch('62.90.178.241:3000/SignIn', {
    //     method:'POST',
    //     headers: {
    //       'Accept':'application/json',
    //     }, body:JSON.stringify({
    //       email: this.state.username,
    //       password: this.state.password,
    //     })
    //   })
    //   .then((response) => response.json())
    //   .then((res) => {
    //     if(res.success === true) {
    //       AsyncStorage.setItem('user', res.user);
    //           this.props.link();
    //     } else {
    //       alert(res.message);
    //     }
    //   })
    // .done(); 

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.rowContainer}>
          <View style={styles.textView}>
            <TextInput style={globalStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder={strings.inputEmail}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(username) => this.setState({ username })}
              onSubmitEditing={() => this.state.password.focus()
              }
            />
          </View>
          <View style={styles.imageView}>
            <Image style={styles.image} resizeMode='contain' source={Images.mail} />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.textView}>
            <TextInput style={globalStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder={strings.inputPassword}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              secureTextEntry={true}
              text-align='left'
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <View style={styles.imageView}>
            <Image style={styles.image} resizeMode='contain' source={Images.lock} />
          </View>
        </View>
        <Button onPress={this.onPress} text={strings.loginButton} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textView: {
    flex: 6,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  imageView: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: '80%'
  },
  rowContainer: {
    flexDirection: 'row',
  }

});
