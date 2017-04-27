import {CHANGE_AUTH} from '../actions/types';

export default function(state = false, action) { //po default-u korisnik nije logovan
  switch (action.type) {
    case CHANGE_AUTH:

    return action.payload; // ako je state true korisnik je logovan

  }
  return state;
}
