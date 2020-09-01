import { APP_ROUND_INCREMENT, APP_ROUND_REMOVE } from "./types";

const initialState = {
  round: 0,
};

export const roundReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ROUND_INCREMENT:
      return {
        round: state.round + 1,
      };
    case APP_ROUND_REMOVE:
      return {
        round: 0,
      };
    default:
      return state;
  }
};
