import {
  renderComponent,
  expect
} from '../test_helper';
import App from '../../src/components/app';

/*
  //"it" se koristi da testira jedan test atributa odredjene mete
  it('show the correct text ( prikazi ispravan tekst )', () => {

    //kreiraj instancu od App
    const component = renderComponent(App);

    //"expect" se koristi za kreiranje assertion (tvrdnja) vezano za metu
    expect(component).to.contain('React simple starter');

  });
*/


//koristi se da grupise zajedno slicne testove
describe('App', () => {

  let component;

  beforeEach(() => {

    component = renderComponent(App);

  });

  it('Shows a comment box (prikazuje komentar polje)', () => {

    expect(component.find('.comment-box')).to.exist;

  });

  it('Shows a comment list (prikaz liste komentara)', () => {
    expect(component.find('.comment-list')).to.exist;
  })
});
