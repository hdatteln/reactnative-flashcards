import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { removeDeck } from '../actions';
import { deleteDeck } from '../utils/helpers';
import styles from '../styles/appStyles';

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
    const numQuestions = currentDeck.questions.length;
    const cardCount = numQuestions === 1 ? numQuestions + ' Card' : numQuestions + ' Cards';

    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Text style={styles.screenHeading}>
            {currentDeck.name}
          </Text>
          <Text style={styles.screenDesc}>{cardCount}</Text>
          <TouchableOpacity
            title="Add Card"
            style={styles.deckBtn}
            onPress={() => navigation.navigate(
              'CardForm',
              {deckDetails: deckDetails}
            )}
          ><Text style={styles.btnTxt}>Add Card</Text>
          </TouchableOpacity>
          {numQuestions > 0 && <TouchableOpacity
            title="Start Quiz"
            style={styles.deckBtn}
            onPress={() => navigation.navigate(
              'Quiz',
              {deckDetails: deckDetails}
            )}
          ><Text style={styles.btnTxt}>Start Quiz</Text>
          </TouchableOpacity>
          }

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

function mapStateToProps (decks) {
  return {decks};
}

export default connect(mapStateToProps)(Deck);