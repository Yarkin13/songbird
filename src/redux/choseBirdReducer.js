import { APP_CHOSE_BIRD } from "./types";

const initialState = {
  chosenBird: {}
};

export const choseBirdReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_CHOSE_BIRD:
      return {
        chosenBird: action.payload,
      };

    default:
      return state;
  }
};
