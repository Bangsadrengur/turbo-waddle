const test = require('ava');
const makeUrlsForPageNumbers = require('../lib/make-urls-for-page-numbers');

test('make url for a single page', (t) => {
  const makingUrls = makeUrlsForPageNumbers('url', 1);

  return makingUrls.then((urls) => {
    t.is(urls.length, 1);
    t.is(urls[0], 'url&page=1');
  });
});

test('make url for multiple pages', (t) => {
  const makingUrls = makeUrlsForPageNumbers('url', 3);

  return makingUrls.then((urls) => {
    t.is(urls.length, 3);
    t.is(urls[0], 'url&page=1');
    t.is(urls[1], 'url&page=2');
    t.is(urls[2], 'url&page=3');
  });
});
