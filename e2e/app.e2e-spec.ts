import { AWSSeedPage } from './app.po';

describe('aws-seed App', () => {
  let page: AWSSeedPage;

  beforeEach(() => {
    page = new AWSSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
