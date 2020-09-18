import * as actions from '../actions/getDataActions';

export const initialState = {
    name: '',
    tel: '',
    email: '',
    date: ''
  }
  
  export default function switchingReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_NAME:
          return { ...state, name: action.data}
        case actions.GET_PHONE:
          return { ...state, tel: action.data}
        case actions.GET_EMAIL:
          return { ...state, email: action.data}
          case actions.GET_DATE:
            return { ...state, date: action.data}  
        default:
          return state
      }
  }