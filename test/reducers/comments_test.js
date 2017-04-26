import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMENT } from '../../src/actions/types';

describe('Comment Reducer', () => {
  it('handles action with unknown type', () => {

    /*  expect(commentReducer()).to.be.instanceof(Array);  what reducer return will be Array*/
    expect(commentReducer(undefined, {})).to.eql([]); //ako je commentReducer niz ja cu se postarati da bude jedank vrednostima nizu u zagradi
  });

  it('handles action of type SAVE_COMENT', () => {
    const action = { type: SAVE_COMENT,  playload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
