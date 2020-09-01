import { combineReducers } from 'redux'
import { roundReducer } from './roundReducer'
import { choseBirdReducer } from './choseBirdReducer'
import { unknownBirdReducer } from './unknownBirdReducer'
import { scoreReducer } from './scoreReducer'
import { answersReducer } from './answersReducer'
import { menuReducer } from './menuReducer'
import { libraryReducer } from './libraryReducer'

export const rootReducer = combineReducers({
  round: roundReducer,
  chosenBird: choseBirdReducer,
  unknownBird: unknownBirdReducer,
  score: scoreReducer,
  answersResult: answersReducer,
  showMenu: menuReducer,
  showLibraryBirdList: libraryReducer
})
