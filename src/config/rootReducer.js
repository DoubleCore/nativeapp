import { combineReducers } from 'redux';

import loginReducer from '../reducers/login';

const rootReducer = combineReducers({
  sessionStatus: loginReducer
});

export default rootReducer;
