import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { receiveDecks } from '../actions/index';
import { getDecks } from '../utils/helpers';

class DeckList extends Component {

  componentDidMount () {
    const { dispatch } = this.props;

    getDecks()
      .then((decks) => {
      dispatch(receiveDecks(decks ));
    }).then(() => this.setState(() => ({ready: true})))
  }

  state = {
    ready: false
  };

  render () {
    const {navigation, decks} = this.props;
    const { ready } = this.state;

    return (

      decks && Object.keys(decks).length === 0
        ? <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text style={styles.screenHeading}>No Decks Available Yet!</Text>
            <Text style={styles.screenDesc}>Tab 'Add Decks' to add a new deck of flashcards.</Text>
          </View>
          </View>
        : <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text style={styles.screenHeading}>Available Decks</Text>
          </View>
          <ScrollView style={[styles.listContainer]}>
            {
              Object.values(decks).map((deck, idx) => {
                return (

                  <ListItem
                    key={idx}
                    title={deck.name}
                    onPress={() => navigation.navigate(
                      'Deck',
                      {deckDetails: deck}
                    )}
                    bottomDivider
                    chevron
                  />
                );
              })
            }
          </ScrollView>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30
  },
  screenHeading: {
    fontSize: 25
  },
  screenDesc: {
    marginTop: 30,
    marginBottom: 30
  },
  bodyContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20
  }
});

function mapStateToProps (decks) {
  return {decks}
}


export default connect(
  mapStateToProps
)(DeckList);