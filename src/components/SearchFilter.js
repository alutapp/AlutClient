import React, {
    Component,
} from 'react';
import {
	StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';


import { Slider } from 'react-native-elements'

export default class SearchFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: 5,
            distance: 50
        }
    }

    render() {
      return (
  
<View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', margin: '5%', padding: '5%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
}}>
<Text style={{fontWeight: 'bold'}}>טווח גילאים: </Text><Text>{this.state.age} שנים</Text>
  <Slider
    value={this.state.age}
    step={1}
    minimumValue={1}
    maximumValue={18}
    onValueChange={(age) => this.setState({age})} />
  <Text style={{fontWeight: 'bold'}}>המרחק ממני: </Text>><Text>{this.state.distance} ק"מ</Text>
  <Slider
    value={this.state.distance}
    step={1}
    minimumValue={0}
    maximumValue={100}
    onValueChange={(distance) => this.setState({distance})} />
    <TouchableOpacity style={styles.button} onPress={this.props.link}>
        <Text style={styles.buttonText}>חיפוש</Text>
    </TouchableOpacity>
</View>
);


    }

    
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
  
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    } 
});