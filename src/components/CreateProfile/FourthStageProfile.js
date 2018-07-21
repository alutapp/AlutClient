import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppRegistry,
  SliderIOS,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TagSelect from '../TagSelect';
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
  _retrieveData = async () => {
    try {
      this.props.link()
      // const value = await AsyncStorage.getItem('');
      // if (value !== null) {
      //   // We have data!!
      //   console.log(value);
      // }
     } catch (error) {
      console.log(error);

       // Error retrieving data
     }
  }
  setdependency = (arr) => this.setState({ dependencyRange: arr });
  setVerbal = (arr) => this.setState({ verbalRange: arr });

  render() {

    return (
      <View style={{ width: 280 }}>

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

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 3 }}>
          <Text style={[globalStyles.h3Title, { paddingTop: 2 }]}>{strings.onlyIfNeeded}</Text>
          <Text style={globalStyles.h2Title}>{strings.keyWords} </Text>
        </View>
        <TagSelect
          data={strings.tags}
          ref={(tag) => {
            this.tag = tag;
          }}
        // JSON.stringify(this.tag.itemsSelected))
        />

        <View style={{ flexDirection: 'column', paddingBottom: 5 }}>
          <TouchableOpacity style={globalStyles.smallButton} onPress={this._retrieveData}>
            <Text style={styles.buttonText}>{strings.goToApp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sliders: {
    alignSelf: 'center',
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
