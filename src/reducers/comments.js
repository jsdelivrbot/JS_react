import { SAVE_COMENT} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMENT:

      //return state.concat ([action.payload]); isto kao kod ispod
      return [...state, action.payload];


  }
  return state;
}
