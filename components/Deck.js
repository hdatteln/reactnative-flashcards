import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';


class Deck extends Component {
  render () {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>
            Deck Title
          </Text>
          <Text style={styles.screenDesc}>3 Cards</Text>
          <View style={styles.btnSection}>
          <Button
            title="Add Card"
            style={styles.deckBtn}
            onPress={() => navigation.navigate(
              'CardForm'
            )}
          />
          <Button
            title="Start Quiz"
            style={styles.deckBtn}
            onPress={() => navigation.navigate(
              'Quiz'
            )}
          />
          </View>
          <Text>Delete Deck</Text>
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
  }
});

export default connect()(Deck);