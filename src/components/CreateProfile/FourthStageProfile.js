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
  ScrollView
} from 'react-native';
import Button from '../Button'

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TagSelect from '../TagSelect';
import * as strings from '../../resources/strings'

import globalStyles from '../../resources/styles'

export default class FourthStageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dependent: [5],
      verbal: [10],
      description: ''
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
  updateProfile = () => {
    this.props.addProfile("depedent", this.state.dependent);
    this.props.addProfile("verbal", this.state.verbal);
    this.props.addProfile("description", this.state.description);
    this.props.addProfile("tags", this.tag.itemsSelected);
    this.props.link();
  }
  setdependency = (arr) => this.setState({ dependent: arr });
  setVerbal = (arr) => this.setState({ verbal: arr });

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.sliders}>
            {this.renderMultiSlider(strings.depedent, strings.indepedent, this.state.dependent, this.setdependency)}
            {this.renderMultiSlider(strings.notVerbal, strings.verbal, this.state.verbal, this.setVerbal)}
          </View>
          <View>
            <TextInput style={[globalStyles.inputBox,styles.inputBox]}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder={strings.tellUsMore}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              editable={true}
              maxLength={200}
              multiline={true} 
              onChangeText={(val) => this.setState({ description: val })}/>
          </View>
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
          <Button onPress={this.updateProfile} text={strings.goToApp} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 20
  },
  inputBox:{
    alignSelf: 'center',
    height: 100,
    textAlignVertical: "top",
  },
  sliders: {
    alignSelf: 'center',
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
