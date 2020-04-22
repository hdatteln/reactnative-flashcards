import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions';
const DECKS_APP_STORAGE_KEY = 'UdacityFlashcards:decks';
const NOTIFICATION_KEY = 'UdacityFlashcards:notifications';

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


export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
    .catch(err => {
      console.log('ERR', err)
    })
}

function createNotification () {
  return {
    title: 'You have not studied today!',
    body: "👋 don't forget to complete your daily quiz!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.getAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0,0,0,);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}