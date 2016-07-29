import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';


const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(rootReducer);


export default store;
