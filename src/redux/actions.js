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
} from "./types";

export function choseBird(bird) {
  return {
    type: APP_CHOSE_BIRD,
    payload: bird,
  };
}

export function incrementRound() {
  return {
    type: APP_ROUND_INCREMENT,
  };
}

export function removeRound() {
  return {
    type: APP_ROUND_REMOVE,
  };
}

export function addUnknownBird(round) {
  return {
    type: APP_ADD_UNKNOWN_BIRD,
    payload: round,
  };
}

export function chosenCorrectBird() {
  return {
    type: APP_CHOSEN_CORRECT_BIRD,
  };
}

export function addScore(attempts) {
  return {
    type: APP_ADD_SCORE,
    payload: attempts,
  };
}

export function addAttempts() {
  return {
    type: APP_ADD_ATTEMPTS,
  };
}

export function removeScore() {
  return {
    type: APP_REMOVE_SCORE,
  };
}

export function removeAttempts() {
  return {
    type: APP_REMOVE_ATTEMPTS,
  };
}
