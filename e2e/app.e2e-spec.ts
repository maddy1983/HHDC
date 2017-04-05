import { HDDCPage } from './app.po';

describe('hddc App', function() {
  let page: HDDCPage;

  beforeEach(() => {
    page = new HDDCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
