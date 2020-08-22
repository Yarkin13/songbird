import { APP_HIDE_MENU, APP_SHOW_MENU } from './types'

const initialState = {
  showMenuFlag: false,
}

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_SHOW_MENU:
      return {
        showMenuFlag: true,
      }
    case APP_HIDE_MENU:
      return {
        showMenuFlag: false,
      }
    default:
      return state
  }
}
