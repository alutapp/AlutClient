import {
  StyleSheet
} from 'react-native';

export const globalStyles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    flexDirection: 'column'
  },

  h1Title:{
    fontSize:22,
    color:'white',
    fontWeight:'bold'
  },

  h2Title:{
    fontSize:18,
    color:'white'
  },

  h3Title:{
    fontSize:16,
    color:'white'
  }

});

module.exports = globalStyles;
