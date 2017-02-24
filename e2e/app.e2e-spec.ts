import { TrunkPage } from './app.po';

describe('trunk App', function() {
  let page: TrunkPage;

  beforeEach(() => {
    page = new TrunkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
