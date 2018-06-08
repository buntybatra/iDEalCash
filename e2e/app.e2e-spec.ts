import { IDealPage } from './app.po';

describe('i-deal App', function() {
  let page: IDealPage;

  beforeEach(() => {
    page = new IDealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
