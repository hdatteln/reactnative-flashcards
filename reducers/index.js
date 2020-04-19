import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions';

function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.entries
      };
    case ADD_QUESTION:
      return {
        ...state,
        ...action.entry
      };
    default:
      return state;

  }

}

export default questions;