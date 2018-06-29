import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class App extends Component {
  state = {
    hand: 'right',
  }


  render() {
    return (
      <View>
        <Picker>
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: 160 }}
          mode="dropdown">
          <Picker.Item label="Right Hand" value="right" />
          <Picker.Item label="Left Hand" value="left" />
        </Picker>
      </View>
    );
  }
}
