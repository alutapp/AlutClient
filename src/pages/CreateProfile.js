import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
<<<<<<< HEAD
  StatusBar,
=======
  StatusBar ,
>>>>>>> origin/newchen
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
import FinishStageProfile from '../components/CreateProfile/FinishStageProfile';
import ProfileHeader from '../components/ProfileHeader';
<<<<<<< HEAD
=======
import {Actions} from 'react-native-router-flux';
>>>>>>> origin/newchen
import PageControl from 'react-native-page-control';

export default class Signup extends Component {

<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.currentPage = 0;
    this.state = { currentPage: 0, numOfPages: 3 };

    const { navigate } = this.props.navigation;
    this.pagesComponents = [<FirstStageProfile nav={navigate} link={() => this.onPress()} />,
    <SecondStageProfile nav={navigate} link={() => this.onPress()} />,
    <ThirdStageProfile nav={navigate} link={() => this.onPress()} />,
    <FourthStageProfile nav={navigate} link={() => this.onPress(navigate)} />];
  }
  
  onPress = (navigate) => {
    if (this.state.currentPage < this.state.numOfPages) {
      console.log(this.state.currentPage)
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    } else {
      navigate('Login');
      // fetch('http://62.90.178.241:3000/createUser', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }, body: JSON.stringify({
      //     id: "123456789",
      //     firstName: "chen",
      //     email: "chl@gmail.com",
      //     lastName: "sword",
      //     password: "username",
      //     gender: "female",
      //     phone: "callme",
      //     childId: "0000000000",
      //   })
      // })
      //   .then((response) => response.json())
      //   .then((res) => {
      //     alert(JSON.stringify(res));
      //   }
      //   )
      //   .done();
    }

  }
  render() {

    return (
      <View style={globalStyles.container}>
        <ProfileHeader headerName={strings.headerTitle} />
        <View style={styles.container}>
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
          {this.pagesComponents[this.state.currentPage]}
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
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
=======
  constructor(props){
    super(props);
    this.currentPage = 0;
    this.state = {currentPage : 0 , numOfPages: 4};
    this.pagesComponents = [<FirstStageProfile/>, <SecondStageProfile/>,<ThirdStageProfile/>,
    <FourthStageProfile/>,<FinishStageProfile/>];
  }


  goBack() {
      Actions.pop();
  }

  onPress = () => {
    if(this.state.currentPage < this.state.numOfPages){
      this.setState({
        currentPage: this.state.currentPage+1
      })
    }
  }

	render() {
		return(
			<View style = {globalStyles.container}>
      <ProfileHeader headerName={strings.headerTitle}/>
      <View style = {styles.container}>
      <PageControl style={styles.pageControl}
      numberOfPages={4}
      currentPage={this.state.currentPage}
      hidesForSinglePage
      pageIndicatorTintColor='gray'
      currentPageIndicatorTintColor='white'
      indicatorStyle={{borderRadius: 5}}
      currentIndicatorStyle={{borderRadius: 5}}
      indicatorSize={{width:8, height:8}}
      onPageIndicatorPress={this.onItemTap}
      />

      {this.pagesComponents[this.state.currentPage]}

<View style={{flexDirection:'column',paddingBottom:5}}>
      <TouchableOpacity style={globalStyles.smallButton} onPress={this.onPress}>
        <Text style={styles.buttonText}>{this.state.currentPage != this.state.numOfPages ? strings.nextPage : strings.goToApp}</Text>
      </TouchableOpacity>
</View>
      </View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    alignItems:'center'
  },
  pageControl : {
    paddingVertical:20
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
>>>>>>> origin/newchen
  }
});
