import { EditorTopPage } from './app.po';
import * as assert from 'power-assert';

describe('Editor Study App', function() {
  let page: EditorTopPage;

  beforeEach(() => {
    page = new EditorTopPage();
  });

  it('my app works!が表示されていること', () => {
    page.navigateTo();
    return page.getParagraphText().then( text => {
      assert.equal(text, 'my app works!');
    });
  });
});
