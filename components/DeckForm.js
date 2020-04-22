import React, { Component } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { saveDeckTitle } from '../utils/helpers'
import { addDeck } from '../actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {CommonActions} from '@react-navigation/native';
import styles from '../styles/appStyles'

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
            <TouchableOpacity
              title="Create Deck"
              style={styles.deckFormBtn}
              onPress={this.createDeck}
            ><Text style={styles.btnTxt}>Create Deck</Text></TouchableOpacity>
          </KeyboardAwareScrollView>

         </View>
      </View>
    );
  }
}
export default connect()(DeckForm);