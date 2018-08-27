import {
  StyleSheet
} from 'react-native';

export const globalStyles = StyleSheet.create({

  container: {
    backgroundColor: '#455a64',
    flex: 1,
    flexDirection: 'column'
  },

  h1Title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  h2Title: {
    fontSize: 18,
    color: 'white'
  },

  h3Title: {
    fontSize: 16,
    color: 'white'
  },
  formTitle: {
    justifyContent: 'flex-end',
    fontSize: 16,
    color: 'white'
  },

  inputBox: {
    width:'100%',
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'right',
    marginVertical:10
  },
  selectBox: {
    width:'100%',
    backgroundColor: 'rgba(255, 255,255,0.2)',
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  }
});

module.exports = globalStyles;
