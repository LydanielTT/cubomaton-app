import { CubomatonAppPage } from './app.po';

describe('cubomaton-app App', function() {
  let page: CubomatonAppPage;

  beforeEach(() => {
    page = new CubomatonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
