import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
    Image,
    Props
} from 'react-native';
import {Header} from 'react-native-elements';

export default class MyHeader extends Component {

    constructor(props){
        super(props);
        this.headerName = props.headerName;
    }
    render(){
        <Header 
            centerComponent={{text: this.headerName, style: {fontWeight:'bold', size:'12'}}}
            rightComponent = {{icon:'ios-arrow-forward'}}/>
    }
}