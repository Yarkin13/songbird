import {
  APP_ADD_SCORE,
  APP_ADD_ATTEMPTS,
  APP_REMOVE_ATTEMPTS,
  APP_REMOVE_SCORE,
} from "./types";

const initialState = {
  score: 0,
  attempts: 0,
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ADD_SCORE:
      return {
        score: state.score + 5 - action.payload,
        attempts: state.attempts
      };
    case APP_ADD_ATTEMPTS:
      return {
        attempts: state.attempts + 1,
        score: state.score
      };
    case APP_REMOVE_SCORE:
      return {
        score: 0,
        attempts: state.attempts
      };
    case APP_REMOVE_ATTEMPTS:
      return {
        attempts: 0,
        score: state.score
      };

    default:
      return state;
  }
};
