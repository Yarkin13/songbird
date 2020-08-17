import { combineReducers } from "redux";
import { roundReducer } from "./roundReducer";
import { choseBirdReducer } from "./choseBirdReducer";
import { unknownBirdReducer } from "./unknownBirdReducer";
import { scoreReducer } from './scoreReducer'


export const rootReducer = combineReducers({
  round: roundReducer,
  chosenBird: choseBirdReducer,
  unknownBird: unknownBirdReducer,
  score: scoreReducer
});
