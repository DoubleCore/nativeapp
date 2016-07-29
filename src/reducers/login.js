import {LOGIN_SUCC, LOGIN_ERR} from '../actions/login';


export default function loginReducer(state = "logged out", action) {
  switch (action.type) {
  case LOGIN_SUCC:
    return action.response;
  case LOGIN_ERR:
    return action.response;
  }

  return state;
}
