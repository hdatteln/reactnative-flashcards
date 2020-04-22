import React, { Component } from 'react';
import { Animated, FlatList, SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions/index';
import { getDecks } from '../utils/helpers';
import styles from '../styles/appStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

class DeckList extends Component {
  constructor (props) {
    super(props);
    this.clickListItem = this.clickListItem.bind(this);
  }

  componentDidMount () {
    const {dispatch} = this.props;

    getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks));
      })
      .then(() => this.setState(() => ({ready: true})));

  }

  state = {
    bounceValue: new Animated.Value(1)
  };

  clickListItem = (deck) => {
    const {navigation} = this.props;
    const {bounceValue} = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, {duration: 500, toValue: 2, useNativeDriver: true}),
      Animated.spring(bounceValue, {toValue: 1, friction: 4, useNativeDriver: true})
    ]).start();

    navigation.navigate(
      'Deck',
      {deckDetails: deck}
    );
  };

  render () {
    const {decks} = this.props;
    const {ready, bounceValue} = this.state;

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
          <SafeAreaView style={[styles.listContainer]}>
            <FlatList
              data={Object.values(decks).map((deck) => { return deck;})}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View
                  key={item.name}
                  style={styles.listView}
                >
                  <Animated.Text
                    style={[styles.deckListItem, {transform: [{scale: bounceValue}]}]}
                    onPress={() => this.clickListItem(item)}
                  >
                    {item.name + ' (' + item.questions.length + ')'}
                  </Animated.Text>
                    <Icon key={'icon'+item.name} name="chevron-right" size={16}/>
                </View>)}
            />

          </SafeAreaView>
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