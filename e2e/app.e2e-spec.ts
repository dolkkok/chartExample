import { ChartExamplePage } from './app.po';

describe('chart-example App', () => {
  let page: ChartExamplePage;

  beforeEach(() => {
    page = new ChartExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
