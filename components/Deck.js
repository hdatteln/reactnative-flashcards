import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Deck extends Component {
  render () {
    return (
      <View>
        <Text>
          Deck
        </Text>
      </View>
    );
  }
}

export default connect()(Deck);