import { ArcProHubPage } from './app.po';

describe('arc-pro-hub App', () => {
  let page: ArcProHubPage;

  beforeEach(() => {
    page = new ArcProHubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
