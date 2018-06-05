import React, { Component } from 'react';
//import 'react-widgets/dist/css/react-widgets.css';

// ...Or if you prefer to use the Less or Sass files directly
// import 'react-widgets/lib/less/react-widgets.less';
// import 'react-widgets/lib/scss/react-widgets.scss';

//import { render } from 'react-dom';
//import DropdownList from 'react-widgets';
import ModalDropDown from 'react-native-modal-dropdown';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class Logo extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="שם הילד"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              //keyboardType="child-name"
              //onSubmitEditing={()=> this.password.focus()}
              />
              
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>הבא</Text>
           </TouchableOpacity>    
           

          <ModalDropDown dropdownStyle={styles.ModalDropDown} options ={['option1', 'option2']}>
        
          </ModalDropDown>



  		</View>
      
      
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  dropDown:{
    width: 300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    color:'#ffffff',
    marginVertical: 10
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
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

