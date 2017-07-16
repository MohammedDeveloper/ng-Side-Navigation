import { NgSideNavigationPage } from './app.po';

describe('ng-side-navigation App', function() {
  let page: NgSideNavigationPage;

  beforeEach(() => {
    page = new NgSideNavigationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
