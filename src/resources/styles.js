import {
  StyleSheet
} from 'react-native';

export const globalStyles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    flexDirection: 'column',
    alignItems:'center'
  },

  h1Title:{
    fontSize:18,
    color:'white',
    fontWeight:'bold'
  },

  h2Title:{
    fontSize:14,
    color:'white'
  }

});

module.exports = globalStyles;
