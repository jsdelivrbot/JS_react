import {SAVE_COMENT} from './types';

export function saveComment(comment) {
return{
  type: SAVE_COMENT,
  playload: comment
}
}
