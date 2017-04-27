import {
  SAVE_COMENT
} from './types';
import {
  CHANGE_AUTH
} from './types';
import {
  FETCH_USERS
} from './types';


export function saveComment(comment) {
  return {
    type: SAVE_COMENT,
    payload: comment
  }
}


export function authentcate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function frtchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      {name: 'Jane'},
      {name: 'Alex'},
      {name: 'Jim'}

    ]
  };
}
