import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

import User from '../components/User';
import data from '../mocks/users.json';

export default class FriendsRequests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data.users
        }
    }

    _renderItem = ({ item }) => (
        <User user={item} />
    );

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.view}>
                    <Text style={styles.text}>הצעות חברות</Text>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>ממתינים לאישור</Text>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: .5,
        borderWidth: 1,
        borderColor: 'grey'
    },
    text: {
		fontSize: 18
    }
});
