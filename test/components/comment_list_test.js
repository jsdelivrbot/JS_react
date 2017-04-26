import { renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';


describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('Shows an LI for each comment (prikaziuje listu za svaki komentar)', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('Shows each comment that is provided (prikaziuje komentar koji je obezbedjen)', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');

  });
});
