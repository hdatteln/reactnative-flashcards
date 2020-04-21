import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckList extends Component {
  render () {
    return (
      <View>
        <Text>
          DeckList
        </Text>
      </View>
    );
  }
}

export default connect()(DeckList);