import { AsyncStorage } from 'react-native';

const DECKS_APP_STORAGE_KEY = 'UdacityFlashcards:decks';

export function getDecks () {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY)
}

export function removeDeck (id) {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[id] = undefined;
      delete data[id];
      AsyncStorage.setItem(DECKS_APP_STORAGE_KEY, JSON.stringify(data))
    })
}


export function getDeck (id) {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      return data[key];
    })
}

export function saveDeckTitle (id) {
  return AsyncStorage.mergeItem(DECKS_APP_STORAGE_KEY, JSON.stringify({
    [id]: {
      name: '',
      questions: []
    }
  }))
}


export function addCardToDeck(id, card) {
  return {
    //take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
  }
}

