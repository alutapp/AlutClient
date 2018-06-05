import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import PageControl from 'react-native-page-control';
export default class Signup extends Component {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
      
      <PageControl
      style={styles.pagecontrol}
      numberOfPages={3}
      currentPage={1}
      hidesForSinglePage
      pageIndicatorTintColor='gray'
      currentPageIndicatorTintColor='white'
      indicatorStyle={{borderRadius: 5}}
      currentIndicatorStyle={{borderRadius: 5}}
      indicatorSize={{width:8, height:8}}
      onPageIndicatorPress={this.onItemTap}
/>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  pagecontrol : {
    position:'absolute',
     left:0,
     right:0,
     bottom:10
  }
});
