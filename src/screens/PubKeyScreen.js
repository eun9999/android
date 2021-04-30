import React, {Component} from 'react';
import {Button, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import style from '../components/styles';

class PubKeyScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.inputText = '';
  }

  render() {
    return (
      <View flexDirection="column">
        <View style={style.root} flexDirection="row">
          <TextInput
            alignItems="stretch"
            style={style.TextInput}
            onChangeText={this.changeText}
            placeholder="Input your public key"></TextInput>
          <View>
            <TouchableOpacity
              alignItems="flex-end"
              activeOpacity={0.8}
              style={style.btn}
              onPress={this.clickBtn}>
              <Text>ENTER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>{this.state.text}</Text>
        </View>
      </View>
    );
  }
  changeText = value => {
    this.inputText = value;
  };
  clickBtn = () => {
    this.setState({text: this.inputText});
  };
}

export default PubKeyScreen;
