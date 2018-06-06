import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
    Image,
    Props
} from 'react-native';
import {Header,Icon} from 'react-native-elements';

export default class MyHeader extends Component {

    constructor(props){
        super(props);
        this.headerName = props.headerName;
    }

   render(){
		 return(
        <Header
						outerContainerStyles={{ backgroundColor: '#455a64' }}
            centerComponent={{text: this.headerName, style: {fontWeight:'bold', fontSize:20}}}
            leftComponent = {<Icon name='navigate-next' />}
						/>
    )};
}
