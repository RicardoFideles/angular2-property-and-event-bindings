import { Curso02Page } from './app.po';

describe('curso02 App', function() {
  let page: Curso02Page;

  beforeEach(() => {
    page = new Curso02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
