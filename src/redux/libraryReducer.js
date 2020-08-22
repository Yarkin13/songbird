import { APP_LIBRARY_SHOW_BIRD_LIST } from './types'

const initialState = {
  libraryShowFlag: false,
  idKind: '',
}

export const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LIBRARY_SHOW_BIRD_LIST:
      return {
        libraryShowFlag: true,
        idKind: action.payload,
      }

    default:
      return state
  }
}
