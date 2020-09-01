import {
  APP_CORRECT_ANSWER,
  APP_REMOVE_ANSWERS,
  APP_INCORRECT_ANSWER,
} from './types'

const initialState = {
  answersResult: { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' },
}

export const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_CORRECT_ANSWER:
      return {
        answersResult: { ...state.answersResult, [action.payload]: true },
      }
    case APP_INCORRECT_ANSWER:
      return {
        answersResult: { ...state.answersResult, [action.payload]: false },
      }
    case APP_REMOVE_ANSWERS:
      return {
        answersResult: { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' },
      }
    default:
      return state
  }
}
