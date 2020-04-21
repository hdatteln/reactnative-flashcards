import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

class DeckList extends Component {
  render () {
    const { navigation }= this.props;
    const decks = [
      {
        id: '1234',
        title: 'Deck 1'
      },
      {
        id: '1235',
        title: 'Deck 2'
      }
    ];
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Text style={styles.screenHeading}>Available Decks</Text>
        </View>

        <View style={[styles.listContainer]}>
          {
            decks.map((deck, idx) => {
              return (
                <ListItem
                  key={idx}
                  title={deck.title}
                  onPress={() => navigation.navigate(
                    'Deck',
                    { entryId: idx }
                  )}
                  bottomDivider
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
    flex: 1,
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
  },
});

export default connect()(DeckList);