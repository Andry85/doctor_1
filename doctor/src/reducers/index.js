import { combineReducers } from 'redux';

import switchingReducer from './switchingReducer';
import getFormDataReduced from './getFormDataReduced';



const rootReducer = combineReducers({
  switcherReducer: switchingReducer,
  getFormDataReduced: getFormDataReduced
})

export default rootReducer;