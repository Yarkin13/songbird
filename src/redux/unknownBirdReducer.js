import { APP_ADD_UNKNOWN_BIRD, APP_CHOSEN_CORRECT_BIRD } from "./types";
import birdsData from "../data/birds";

const initialState = {
  unknownBird: {
    ...birdsData[0][Math.round(0 + Math.random() * (5 - 0))],
    completed: false,
  },
};

export const unknownBirdReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ADD_UNKNOWN_BIRD:
      return {
        unknownBird: {
          ...birdsData[action.payload][Math.round(0 + Math.random() * (5 - 0))],
          completed: false,
        },
      };

    case APP_CHOSEN_CORRECT_BIRD:
      return {
        unknownBird: { ...state.unknownBird, completed: true },
      };
    default:
      return state;
  }
};
