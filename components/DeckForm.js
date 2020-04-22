import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { saveDeckTitle } from '../utils/helpers'
import { addDeck } from '../actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {CommonActions} from '@react-navigation/native';

class DeckForm extends Component {
  /*
  * 'Deck 1' : {
  *   name: 'Deck 1',
  *   questions: [
  *     {'q': 'sdfds', 'a': 'sdfsd'},
  *     {'q': 'sweweds', 'a': 'syrytdfsd'}
  *   ]
  * }
  *
  * */


  state = {
    name: ''
  };

  handleChange = (name) => {
    this.setState({ name });
    console.log('state',this.state);
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

  deleteDeck = () => {
    console.log('delete deck')
  };

  render () {
    console.log(this.props);
    const {navigation} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Add a New Deck</Text>
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
         </View>
      </KeyboardAwareScrollView>
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