import {
  renderComponent,
  expect
} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox (testiranje)', () => {
  let component; /*undefined*/

  beforeEach(() => {
    component = renderComponent(CommentBox); /*component = CommentBox*/
  });

  it('Has the correct class (sadrzi ispravnu klasu)', () => {

    expect(component).to.have.class('comment-box');
  });

  it('Has a text area (sadrzi tekst polje)', () => {

    expect(component.find('textarea')).to.exist;
  });

  it('It has a button (sadrzi dugme)', () => {

    expect(component.find('button')).to.exist;

  });

  describe('entering some text (tekst)', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('Shows text that in that textarea (prikazuje uneti tekst)', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('When submitted, clears the input (kada se potvrdi, brise uneti tekst )', () => {
  //    console.log(component);
      component.simulate('submit');

      expect(component.find('textarea')).to.have.value('');

    });
  });
});
