const test = require('ava');
const getPageCount = require('../lib/get-page-count');
const fs = require('fs');
const thenify = require('thenify');

const readFile = thenify(fs.readFile);

test('.getPageCount on a small dataset', (t) => {
  const html = readFile('fixtures/small.html').then(data => data.toString());

  const pageCount = html.then(getPageCount);

  return pageCount.then((count) => { t.is(count, 18); });
});
