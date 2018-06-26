import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

import {Avatar,Header,Icon} from 'react-native-elements';
export default class User extends Component{
  constructor(props){
      super(props);
  }
  render() {
		return (
			<View style={styles.container}>

        <View style={styles.columContainer}>

          <View style={styles.rowContainer}>
          <Image style={{ top:'2%',width: 50, height: 40 }}
            source={require('../images/user.png')} />
				      <Text style = {{top:'5%',fontSize:16, fontWeight:'bold',left:'20%'}}>{this.props.user.name} ,</Text>
              <Text style = {{top:'5%',fontSize:16, fontWeight:'bold',left:'20%'}}>{this.props.user.age}</Text>

              </View>
              <View style={styles.rowContainer}>
                  <Text style = {{paddingHorizontal:'15%', fontSize:16,left:'20%'}}>{this.props.user.location}</Text>
                </View>

        </View>

  <Icon iconStyle={{opacity:0.7, position:'absolute' , bottom: 0, right: 0}} name='star' color='#ffd11a' borderRadius={0} size={40}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
  flex: 1,
  borderWidth: 1,
  borderColor: 'grey'
	},
  columnContainer: {
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row'
  },
	logoText: {
		marginVertical: 15,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.7)'
	}
});
