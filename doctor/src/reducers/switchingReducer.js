import * as actions from '../actions/switcherActions';

export const initialState = {
    isLigth: true,
  }
  
  export default function switchingReducer(state = initialState, action) {
    switch (action.type) {
        case actions.CHANGE_TIME:
          return { ...state, isLigth: action.time }
        default:
          return state
      }
  }