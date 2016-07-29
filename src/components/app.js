import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Login from '../containers/login';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.sessionStatus === 'ok') {

    } else {

    }
  }
  render() {
    return (
      <View>
        <Login/>
      </View>
    )
  }
}

export default App;
