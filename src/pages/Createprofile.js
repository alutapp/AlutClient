import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import * as strings from '../resources/strings';
import globalStyles from '../resources/styles'
import Logo from '../components/Logo';
import Form from '../components/Form';
import FirstStageProfile from '../components/CreateProfile/FirstStageProfile';
import SecondStageProfile from '../components/CreateProfile/SecondStageProfile';
import ThirdStageProfile from '../components/CreateProfile/ThirdStageProfile';
import FinishStageProfile from '../components/CreateProfile/FinishStageProfile';
import ProfileHeader from '../components/ProfileHeader';
import {Actions} from 'react-native-router-flux';
import PageControl from 'react-native-page-control';

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.currentPage = 0;
    this.state = {currentPage : 0 , numOfPages: 3};
    this.pagesComponents = [<FirstStageProfile/>, <SecondStageProfile/>,<ThirdStageProfile/>,<FinishStageProfile/>];
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
      numberOfPages={3}
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


      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text style={styles.buttonText}>{this.state.currentPage != this.state.numOfPages ? strings.nextPage : strings.goToApp}</Text>
      </TouchableOpacity>

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
  button: {
    width:300,
    position:'absolute',
    backgroundColor:'#1c313a',
     borderRadius: 25,
    top:540,

  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
    paddingVertical:10

  }
});
