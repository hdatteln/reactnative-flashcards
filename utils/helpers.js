import { AsyncStorage } from 'react-native';

const DECKS_APP_STORAGE_KEY = 'UdacityFlashcards:decks';

function formatResults (results) {
  return JSON.parse(results);
}

export function getRoundedPercentage (part, whole) {
  return Math.round(part / whole * 100);
}

export function getDecks () {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY).then(formatResults);
}

export function deleteDeck (id) {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[id] = undefined;
      delete data[id];
      AsyncStorage.setItem(DECKS_APP_STORAGE_KEY, JSON.stringify(data));
    });
}

export function getDeck (id) {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      return data[key];
    });
}

export function saveDeckTitle (id) {
  return AsyncStorage.mergeItem(DECKS_APP_STORAGE_KEY, JSON.stringify({
    [id]: {
      name: id,
      questions: []
    }
  }));
}

export function saveCardToDeck (id, card) {
  return AsyncStorage.getItem(DECKS_APP_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      const deck = data[id];
      deck.questions.push(card);
      AsyncStorage.mergeItem(DECKS_APP_STORAGE_KEY, JSON.stringify({
        [id]: {
          name: id,
          questions: deck.questions
        }
      }));
    });
}