import fs from 'fs';
export const LOGIN_SUCC = 'LOGIN_SUCC';
export const LOGIN_ERR = 'LOGIN_ERR';

import user from '../config/usersDb';

export const proccessLoginSuccess = (response) => {
  return {
    type: LOGIN_SUCC,
    response
  }
}

export const proccessLoginError = (response) => {
  return {
    type: LOGIN_ERR,
    response
  }
}

export function login(_username, _password) {
  console.log(user);
  return dispatch => {
    if (user.username === _username && user.password === _password) {
      dispatch(proccessLoginSuccess("ok"));
    } else {
      dispatch(proccessLoginError("error"));
    }
  }
}
