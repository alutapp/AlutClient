import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppRegistry,
  SliderIOS,
  Image
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import * as strings from '../../resources/strings'

import globalStyles from '../../resources/styles'

export default class FourthStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dependencyRange: [5],
      verbalRange: [10]
    }
  }
  renderMultiSlider = (text1, text2, values, valFun) => (
    <View>
      <View style={styles.sliderOne}>
        <Text style={[globalStyles.h3Title]}>{text1}</Text>
        <Text style={[globalStyles.h3Title]}>{text2}</Text>
      </View>
      <MultiSlider
        values={values}
        sliderLength={280}
        onValuesChange={valFun}
        min={0}
        max={10}
        step={1}
        allowOverlap
        snapped
      /></View>
  );

  setdependency = (arr) => this.setState({ dependencyRange: arr });
  setVerbal = (arr) => this.setState({ verbalRange: arr });

  render() {
    return (
      <View>

        <View style={styles.sliders}>
          {this.renderMultiSlider(strings.depedent, strings.indepedent, this.state.dependencyRange, this.setdependency)}
          {this.renderMultiSlider(strings.notVerbal, strings.verbal, this.state.verbalRange, this.setVerbal)}
        </View>

        <TextInput style={{
          alignSelf: 'center',
          width: 280,
          height: 100,
          backgroundColor: 'rgba(255, 255,255,0.2)',
          borderRadius: 5,
          fontSize: 16,
          color: '#ffffff',
          textAlign: 'right',
          textAlignVertical: "top"
        }}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={strings.tellUsMore}
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          editable={true}
          maxLength={200}
          multiline={true} />

        <View style={{ flexDirection: 'row', padding:5, justifyContent:'flex-end' }}>
          <Text style={[globalStyles.h3Title,{paddingTop:2}]}>{strings.onlyIfNeeded}</Text>
          <Text style={[globalStyles.h2Title]}>{strings.keyWords} </Text>
        </View></View>
    )
  }
}

const styles = StyleSheet.create({

  sliders: {
    margin: 20,
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },

  container2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
