import { StyleSheet } from 'react-native';
import * as common from '../resources/common'

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: common.BACKGROUND_COLOR,  //455a64
    flex: 1,
    flexDirection: 'column'
  },

  h1Title: {
    fontSize: 22,
    color: common.TEXT_COLOR,
    fontWeight: 'bold',
  },

  h2Title: {
    fontSize: 18,
    color: common.TEXT_COLOR
  },

  h3Title: {
    fontSize: 16,
    color: common.TEXT_COLOR
  },
  formTitle: {
    justifyContent: 'flex-end',
    fontSize: 16,
    color: common.TEXT_COLOR
  },

  inputBox: {
    width: '100%',
    backgroundColor: common.INPUT_BOX_COLOR,
    borderRadius: 25,
    fontSize: 16,
    color: common.TEXT_COLOR,
    textAlign: 'right',
    marginVertical: 10
  },
  selectBox: {
    width: '100%',
    backgroundColor: common.BUTTON_COLOR,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    width: '40%',
    backgroundColor: common.BUTTON_COLOR,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: common.TEXT_COLOR,
    textAlign: 'center',
  },
  app:{
    backgroundColor:common.BACKGROUND_COLOR
  },
  headerFont:{
    color: common.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 20
  }
});

module.exports = globalStyles;
