import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Images from '../../resources/images';

import * as strings from '../../resources/strings'

import globalStyles from '../../resources/styles'

export default class ThirdStageProfile extends Component {

  _renderHobby = ({item}) => (   
          <View style={styles.columnContainer}>
      <Image style={{ top: '10%', width: 90, height: 90 }} source={Images[item]} />
      <Text style = {globalStyles.h2Title}>{strings[item]}</Text>
    </View>
  );
  
  keyExtractor = (item, index) => index.toString()
	render(){
		return(
			<View style={styles.container}>
      <Text style = {globalStyles.h1Title}>{strings.hobbies}</Text>
      <Text style = {globalStyles.h2Title}>{strings.fillHobbies}</Text>
      
      <View style={styles.rowContainer}>
      <FlatList
        numColumns = {3}
        data= {strings.allHobbies}
        columnWrapperStyle = {{
          justifyContent: 'space-between',
        padding:5}}
        renderItem={this._renderHobby}
        keyExtractor={this.keyExtractor}
      />

</View>

  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },

  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems:'center'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});
