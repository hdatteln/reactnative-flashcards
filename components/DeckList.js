import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { receiveDecks } from '../actions/index';
import { getDecks } from '../utils/helpers';

class DeckList extends Component {

  componentDidMount () {
    return getDecks().then(decks => {
      this.props.dispatch(receiveDecks(decks));
    });
  }

  state = {};

  render () {
    const {navigation, decks} = this.props;

    return (

      decks && Object.keys(decks).length === 0
        ? <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text style={styles.screenHeading}>No Decks Available Yet!</Text>
          </View>
          </View>
        : <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text style={styles.screenHeading}>Available Decks</Text>
          </View>
          <View style={[styles.listContainer]}>
            {
              Object.values(decks).map((deck, idx) => {
                console.log(deck);
                return (
                  <ListItem
                    key={idx}
                    title={deck.name}
                    onPress={() => navigation.navigate(
                      'Deck',
                      {entryId: idx}
                    )}
                    bottomDivider
                    chevron
                  />
                );
              })
            }
          </View>
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
    marginLeft: 30,
    marginRight: 30
  },
  screenHeading: {
    fontSize: 25
  },
  bodyContainer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20
  }
});

const mapStateToProps = state => ({decks: state});

export default connect(
  mapStateToProps
)(DeckList);