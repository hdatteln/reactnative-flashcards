import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { addCardToDeck } from '../actions';
import { saveCardToDeck } from '../utils/helpers';
import { CommonActions } from '@react-navigation/native';

class CardForm extends Component {
  state = {
    question: '',
    answer: '',
  };

  handleQuestionChange = (question) => {
    this.setState({ question });
  };

  handleAnswerChange = (answer) => {
    this.setState({ answer });
  };
  toDeck = () => {
    const {navigation, route, decks} = this.props;
    const { deckDetails } = route.params;
    const deckId = deckDetails.name;
    const updatedDeck = decks[deckId];

    navigation.dispatch(
      CommonActions.navigate({
          name: 'Deck',
          params: {
            deckDetails: updatedDeck,
          },
        }))
  };
  createCard = () => {
    const {dispatch, route, decks} = this.props;
    const { deckDetails } = route.params;
    const deckId = deckDetails.name;
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };

    dispatch(addCardToDeck(deckId, card));
    this.setState(() => ({
      question: '',
      answer: '',
    }));
    this.toDeck();
    saveCardToDeck(deckId, card);

  };

  render () {
    const {navigation, route} = this.props;
    const { deckDetails } = route.params;
    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Enter a new question and answer</Text>
          <TextInput
            placeholder='Question'
            style={styles.formInput}
            value={this.state.question}
            onChangeText={this.handleQuestionChange}
          />
          <TextInput
            placeholder='Answer'
            style={styles.formInput}
            value={this.state.answer}
            onChangeText={this.handleAnswerChange}
          />

          <Button
            title="Add Card"
            style={styles.cardFormBtn}
            onPress={this.createCard}
          />
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
  cardFormBtn: {
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
  }
});

function mapStateToProps (decks) {
  return {decks}
}

export default connect(
  mapStateToProps
)(CardForm);