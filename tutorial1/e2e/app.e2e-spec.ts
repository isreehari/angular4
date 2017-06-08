import { Tutorial1Page } from './app.po';

describe('tutorial1 App', () => {
  let page: Tutorial1Page;

  beforeEach(() => {
    page = new Tutorial1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
