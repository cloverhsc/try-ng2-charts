import { Ng2ChartsPage } from './app.po';

describe('ng2-charts App', function() {
  let page: Ng2ChartsPage;

  beforeEach(() => {
    page = new Ng2ChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
