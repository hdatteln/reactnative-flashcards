import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { receiveDecks } from '../actions/index';
import { getDecks } from '../utils/helpers';
import styles from '../styles/appStyles';
import * as SplashScreen from 'expo-splash-screen';

const AppLoading = () => {
  SplashScreen.preventAutoHideAsync().catch(() => {});
  return () => {
    SplashScreen.hideAsync().catch(() => {});
  };
};

class DeckList extends Component {

  componentDidMount () {
    const {dispatch} = this.props;

    getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks));
      }).then(() => this.setState(() => ({ready: true})));
  }

  state = {
    ready: false
  };

  render () {
    const {navigation, decks} = this.props;
    const {ready} = this.state;

    if (ready === false) {
      return <AppLoading/>;
    }

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

function mapStateToProps (decks) {
  return {decks};
}

export default connect(
  mapStateToProps
)(DeckList);