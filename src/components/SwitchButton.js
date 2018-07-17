import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    TextInput,
	View
} from 'react-native';

import { Switch } from 'react-native-switch';

export default class SwitchButton extends Component{
	render() {
		return (
			<View style={{flexDirection: 'row'}}>
			<Text style={styles.Text}>{this.props.option1}</Text>
			<Switch
			value={false}
			onValueChange={(val) => console.log(val)}
			disabled={false}
			circleSize={30}
			barHeight={30}
			circleBorderWidth={0}
			backgroundActive={'rgba(255, 255,255,0.2)'}
			backgroundInactive={'rgba(255, 255,255,0.2)'}
			circleActiveColor={'white'}
			circleInActiveColor={'white'}
			changeValueImmediately={true}
			renderInsideCircle={() => <Text/>} // custom component to render inside the Switch circle (Text, Image, etc.)
			changeValueImmediately={false} // if rendering inside circle, change state immediately or wait for animation to complete
			innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
			outerCircleStyle={{}} // style for outer animated circle
			switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
			switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
			switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
			/>
			<Text style={styles.Text}>{this.props.option2}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    Text: {
        marginVertical: 5,
        margin: 5,
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
});
