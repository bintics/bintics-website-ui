import { BinticsWebsiteUiPage } from './app.po';

describe('bintics-website-ui App', function() {
  let page: BinticsWebsiteUiPage;

  beforeEach(() => {
    page = new BinticsWebsiteUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
