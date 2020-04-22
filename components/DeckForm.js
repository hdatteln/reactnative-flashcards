import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { saveDeckTitle } from '../utils/helpers'
import { addDeck } from '../actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {CommonActions} from '@react-navigation/native';

class DeckForm extends Component {

  state = {
    name: ''
  };

  handleChange = (name) => {
    this.setState({ name });
  };

  createDeck = () => {
    const key = this.state.name;
    this.props.dispatch(addDeck(key));
    this.setState(() => ({
      name: ''
    }));
    this.toHome();
    saveDeckTitle(key);

  };

  toHome = () => {
    this.props.navigation.dispatch(
      CommonActions.goBack({
        key: 'Decks',
      }))
  };

  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Add a New Deck</Text>
          <KeyboardAwareScrollView>
            <TextInput
              placeholder='Enter a Deck Title'
              value={this.state.name}
              style={styles.formInput}
              onChangeText={this.handleChange}

            />
            <Button
              title="Create Deck"
              style={styles.deckFormBtn}
              onPress={this.createDeck}
            />
          </KeyboardAwareScrollView>

         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20
  },
  deckFormBtn: {
    width: 300,
  },
  formInput: {
    height: 40,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    width: 300,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    paddingLeft: 8

  },
  screenHeading: {
    fontSize: 25
  },
  screenDesc: {
    marginTop: 30,
    marginBottom: 30
  },
});

export default connect()(DeckForm);