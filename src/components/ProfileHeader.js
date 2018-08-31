import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Props,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Icon } from 'react-native-elements';
import * as globalStyles from '../resources/styles'

export default class MyHeader extends Component {

    constructor(props) {
        super(props);
        this.headerName = props.headerName;
    }

    render() {
        return (
            <Header
                outerContainerStyles={globalStyles.app}
                centerComponent={{ text: this.headerName, style: [globalStyles.headerFont] }}
                leftComponent={
                    <TouchableOpacity>
                        <Icon name='navigate-next' />
                    </TouchableOpacity>}
            />
        )
    };

}
