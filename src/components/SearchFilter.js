'use strict';

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SliderIOS,
    Image
} from 'react-native';

import { Slider } from 'react-native-elements'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageRange: [5, 10],
            distance: [50]
        }
    }

    setDistance = (d) => this.setState({ distance: d });
    setAge = (arr) => this.setState({ ageRange: arr });

    render() {
        return (

            <View style={{
                flex: 1, alignItems: 'stretch', justifyContent: 'center', margin: '5%', padding: '5%',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'gray',
            }}>
                <Text style={{ fontWeight: 'bold', marginTop: 40 }}>טווח גילאים: </Text><Text>{this.state.ageRange[0]}-{this.state.ageRange[1]} שנים</Text>
                <MultiSlider min={1} max={18} values={this.state.ageRange} sliderLength={280} onValuesChange={this.setAge} />
</View>
                /* <Text style={{ fontWeight: 'bold' }}>המרחק ממני: </Text>><Text>{this.state.distance[0]} ק"מ</Text>

                <MultiSlider min={0} max={50} values={this.state.distance} onValuesChange={this.setDistance} />
                <TouchableOpacity style={styles.button} onPress={this.props.link}>
                    <Text style={styles.buttonText}>חיפוש</Text>
                </TouchableOpacity>
            </View> */
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
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