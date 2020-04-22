import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { removeDeck } from '../actions';
import { deleteDeck } from '../utils/helpers';

class Deck extends Component {
  toHome = () => {
    const {navigation} = this.props;
    navigation.dispatch(
      CommonActions.goBack({
        key: 'Decks'
      }));
  };

  deleteDeck = () => {
    const {route, dispatch} = this.props;
    const {deckDetails} = route.params;
    const deckId = deckDetails.name;
    console.log('delete me!', deckId);

    dispatch(removeDeck(deckId));
    this.toHome();
    deleteDeck(deckId);
  };

  render () {
    const {navigation, route, decks} = this.props;
    const {deckDetails} = route.params;
    const currentDeck = decks[deckDetails.name];
    if (!currentDeck) {
      return (
        <View style={styles.container}>
          <View style={[styles.bodyContainer]}>
            <Text style={styles.screenHeading}>
              The deck does not exist!
            </Text>
          </View>
        </View>
      );
    }
    console.log(currentDeck.questions);
    const numQuestions = currentDeck.questions.length;
    const cardCount = numQuestions === 1 ? numQuestions + ' Card' : numQuestions + ' Cards';

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>
            {currentDeck.name}
          </Text>
          <Text style={styles.screenDesc}>{cardCount}</Text>
          <View style={styles.btnSection}>
            <Button
              title="Add Card"
              style={styles.deckBtn}
              onPress={() => navigation.navigate(
                'CardForm',
                {deckDetails: deckDetails}
              )}
            />
            {numQuestions > 0 && <Button
              title="Start Quiz"
              style={styles.deckBtn}
              onPress={() => navigation.navigate(
                'Quiz',
                {deckDetails: deckDetails}
              )}
            />}

          </View>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={this.deleteDeck}
          >
            <Text>Delete Deck</Text>
          </TouchableOpacity>
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
  deckBtn: {
    width: 300,
    margin: 10
  },
  screenHeading: {
    fontSize: 25
  },
  screenDesc: {
    marginTop: 30,
    marginBottom: 30
  },
  btnSection: {
    marginBottom: 50
  },
  deleteBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});

function mapStateToProps (decks) {
  return {decks};
}

export default connect(mapStateToProps)(Deck);