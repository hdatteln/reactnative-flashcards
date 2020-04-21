import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CardForm extends Component {
  render () {
    return (
      <View>
        <Text>
          CardForm
        </Text>
      </View>
    );
  }
}

export default connect()(CardForm);