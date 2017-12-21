import { AngularPDexPage } from './app.po';

describe('angular-pdex App', function() {
  let page: AngularPDexPage;

  beforeEach(() => {
    page = new AngularPDexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
