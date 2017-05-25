import { AnotherCustomPipePage } from './app.po';

describe('another-custom-pipe App', function() {
  let page: AnotherCustomPipePage;

  beforeEach(() => {
    page = new AnotherCustomPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
