import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import * as strings from '../resources/strings';
import globalStyles from '../resources/styles'
import Logo from '../components/Logo';
import Form from '../components/Form';
import FirstStageProfile from '../components/CreateProfile/FirstStageProfile';
import SecondStageProfile from '../components/CreateProfile/SecondStageProfile';
import ThirdStageProfile from '../components/CreateProfile/ThirdStageProfile';
import FourthStageProfile from '../components/CreateProfile/FourthStageProfile';
import ProfileHeader from '../components/ProfileHeader';
import PageControl from 'react-native-page-control';

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.pagesComponents = [<FirstStageProfile nav={navigate} link={() => this.onPress()} addProfile={this.addProfile} />,
    <SecondStageProfile nav={navigate} link={() => this.onPress()} addProfile={this.addProfile} />,
    <ThirdStageProfile nav={navigate} link={() => this.onPress()} addProfile={this.addProfile}/>,
    <FourthStageProfile nav={navigate} link={() => this.onPress(navigate)} addProfile={this.addProfile}/>];
    this.currentPage = 0;
    this.state = { currentPage: 0,currentPageDisplayed:null, numOfPages: 3, profile:{} };
    this.state.currentPageDisplayed = this.pagesComponents[0];
    const { navigate } = this.props.navigation;
  }
  addProfile = (key, value)=>{
    this.state.profile[key] = value;
  }
  onPress = (navigate) => {
    if (this.state.currentPage < this.state.numOfPages) {
      console.log(this.state)
      this.setState({
        currentPageDisplayed: this.pagesComponents[this.state.currentPage + 1],
        currentPage: this.state.currentPage + 1
      })
    } else {
      this.props.navigation.navigate('Login');
      console.log(JSON.stringify(this.state.profile))
       /*fetch('http://62.90.178.241:3000/users/createUser', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         }, body: JSON.stringify({
           id: "123456789",
           firstName: "chen",
           email: "chl@gmail.com",
           lastName: "sword",
           password: "username",
           gender: "female",
           phone: "callme",
           childId: "0000000000",
         })
       })
         .then((response) => response.json())
         .then((res) => {
           alert(JSON.stringify(res));
         }
         )
         .done();
        */
       }

  }
  render() {

    return (
      <View style={globalStyles.container}>
        <ProfileHeader headerName={strings.headerTitle} />
        <View style={styles.container} flex={1}>
          <PageControl style={styles.pageControl}
            numberOfPages={4}
            currentPage={this.state.currentPage}
            hidesForSinglePage
            pageIndicatorTintColor='gray'
            currentPageIndicatorTintColor='white'
            indicatorStyle={{ borderRadius: 5 }}
            currentIndicatorStyle={{ borderRadius: 5 }}
            indicatorSize={{ width: 8, height: 8 }}
            onPageIndicatorPress={this.onItemTap}
          />
          <View flex={8}>
          {this.state.currentPageDisplayed}
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
  pageControl: {
    paddingVertical: 20
  },
});
