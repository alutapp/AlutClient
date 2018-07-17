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
  },

  inputBox: {
    width:270,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    textAlign: 'right',
    marginVertical: 10
  },
  
  smallButton: {
    alignItems:'center',
    width:150,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  }
});

module.exports = globalStyles;
