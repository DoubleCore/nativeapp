import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight } from 'react-native';

class Login extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this._onButtonPress = this._onButtonPress.bind(this);
  }

  _onButtonPress() {
    this.props.login(this.state.username, this.state.password);
  }

  render () {
    return (
      <View>
        <TextInput onChangeText={username => {this.setState({username})}} value={this.state.username}/>
        <TextInput onChangeText={password => {this.setState({password})}} value={this.state.password} secureTextEntry={true} />

        <TouchableHighlight onPress={this._onButtonPress}>
          <Text>Submit</Text>
        </TouchableHighlight>
        <Text>{this.props.sessionStatus}</Text>
      </View>
    );
  }
}


export default Login;
