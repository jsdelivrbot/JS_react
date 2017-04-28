import axios from 'axios';
import { SAVE_COMENT } from './types';
import { CHANGE_AUTH } from './types';
import { FETCH_USERS } from './types';


export function saveComment(comment) { //action cretore
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

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users'); //promise
  return {
    type: FETCH_USERS,
    payload: request /*[
      {name: 'Jane'},
      {name: 'Alex'},
      {name: 'Jim'},
      {name: 'Marko'}
    ]*/
  };
}
