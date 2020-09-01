import {
  APP_ROUND_INCREMENT,
  APP_ROUND_REMOVE,
  APP_CHOSE_BIRD,
  APP_ADD_UNKNOWN_BIRD,
  APP_CHOSEN_CORRECT_BIRD,
  APP_ADD_ATTEMPTS,
  APP_ADD_SCORE,
  APP_REMOVE_ATTEMPTS,
  APP_REMOVE_SCORE,
  APP_CORRECT_ANSWER,
  APP_INCORRECT_ANSWER,
  APP_REMOVE_ANSWERS,
  APP_SHOW_MENU,
  APP_HIDE_MENU,
  APP_LIBRARY_SHOW_BIRD_LIST,
} from './types'

export function choseBird(bird) {
  return {
    type: APP_CHOSE_BIRD,
    payload: bird,
  }
}

export function incrementRound() {
  return {
    type: APP_ROUND_INCREMENT,
  }
}

export function removeRound() {
  return {
    type: APP_ROUND_REMOVE,
  }
}

export function addUnknownBird(round) {
  return {
    type: APP_ADD_UNKNOWN_BIRD,
    payload: round,
  }
}

export function chosenCorrectBird() {
  return {
    type: APP_CHOSEN_CORRECT_BIRD,
  }
}

export function addScore(attempts) {
  return {
    type: APP_ADD_SCORE,
    payload: attempts,
  }
}

export function addAttempts() {
  return {
    type: APP_ADD_ATTEMPTS,
  }
}

export function removeScore() {
  return {
    type: APP_REMOVE_SCORE,
  }
}

export function removeAttempts() {
  return {
    type: APP_REMOVE_ATTEMPTS,
  }
}

export function correctAnswer(index) {
  return {
    type: APP_CORRECT_ANSWER,
    payload: index,
  }
}

export function incorrectAnswer(index) {
  return {
    type: APP_INCORRECT_ANSWER,
    payload: index,
  }
}

export function removeAnswers() {
  return {
    type: APP_REMOVE_ANSWERS,
  }
}

export function showMenu() {
  return {
    type: APP_SHOW_MENU,
  }
}

export function hideMenu() {
  return {
    type: APP_HIDE_MENU,
  }
}

export function showBirdList(id) {
  return {
    type: APP_LIBRARY_SHOW_BIRD_LIST,
    payload: id,
  }
}
