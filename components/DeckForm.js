import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckForm extends Component {
  render () {
    return (
      <View>
        <Text>
          DeckForm
        </Text>
      </View>
    );
  }
}

export default connect()(DeckForm);