import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class DeckForm extends Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Add a new Deck</Text>
          <Text style={styles.screenDesc}>Enter the title of your new deck:</Text>
          <TextInput
            placeholder='Deck Title'
            style={styles.formInput}
          />

          <Button title="Create Deck" style={styles.deckFormBtn}/>
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
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20
  },
  deckFormBtn: {
    width: 300,
    marginTop: 40,
  },
  formInput: {
    height: 40,
    fontSize: 16,
    marginTop: 20,
    width: 300

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