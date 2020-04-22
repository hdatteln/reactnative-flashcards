import { ADD_CARD_TO_DECK, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions/index';

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const {name} = action;
      return {
        ...state,
        [name]: {
          name,
          questions: []
        }
      };
    case REMOVE_DECK:
      const {id} = action;
      const {[id]: value, ...remainingDecks} = state;
      return remainingDecks;
    case ADD_CARD_TO_DECK:
      const {deckId, card} = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card)
        }
      };
    default:
      return state;
  }
}