import { PractiseSessionPage } from './app.po';

describe('practise-session App', () => {
  let page: PractiseSessionPage;

  beforeEach(() => {
    page = new PractiseSessionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
