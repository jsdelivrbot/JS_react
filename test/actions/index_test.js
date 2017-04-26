import { expect } from '../test_helper';
import { SAVE_COMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';


describe('actions', () => {
  describe('saveComment', () => {
    it('Has the correct type (ima pravilno otkucan tekst)', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMENT);
    });

    it('Has the correct playload', () => {
      const action = saveComment('new comment');
      expect(action.playload).to.equal('new comment');
    });

  });
});
