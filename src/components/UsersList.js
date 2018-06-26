import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  List,
  AsyncStorage

} from 'react-native';
import data from '../mocks/users.json';
import { Header } from 'react-native-elements';

import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import User from './User';
import MyHeader from './MyHeader';
export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: data.users,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    }
  }

  componentDidMount() {
  this.makeRemoteRequest();

}

_renderItem = ({item}) => (
  <User user = {item}/>
);



render() {
    return (
<View style={containerStyle.container}>
<MyHeader/>
      <FlatList
        data= {this.state.data}
        renderItem={this._renderItem}
        refreshing={this.state.refreshing}
        keyExtractor={user => user.key}
        onRefresh={this.handleRefresh}
        ListHeaderComponent={this.renderHeader}
        extraData = {this.state}
      />
      </View>

    );
  }

  renderHeader = () => {
     return <SearchBar showLoading style={{position:'absolute', top:'0'}} round lightTheme placeholder="חפש..." onChangeText={this.filterSearch}/>;
    }

  makeRemoteRequest = () => {
    this.setState({
      refreshing:false
    });
//     const url = `../mocks/users.json`;
//     this.setState({ loading: true});
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data:  res || [],
//           error: res.error || null,
//           loading: false,
//           refreshing: false
//         });
//
// });
}


  handleRefresh = () =>
  {
    this.setState({
      refreshing:true
    },
    () => {
      this.makeRemoteRequest();
    });
  };
}

const containerStyle = StyleSheet.create({
  columnContainer: {
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  separator: {
  flex: 1,
  borderWidth: 1,
  borderColor: 'grey'
},
container: {
  flex: 1,
  justifyContent: 'center'
}

});
