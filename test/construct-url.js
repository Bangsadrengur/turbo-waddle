const test = require('ava');
const constructUrl = require('../lib/construct-url');

test('constructing with a single postal code', (t) => {
  const url = constructUrl({ 'postal-codes': [123] });

  t.is(url, 'http://fasteignir.visir.is/ajaxsearch/getresults?zip=123&stype=sale');
});

test('constructing with multiple postal codes', (t) => {
  const url = constructUrl({ 'postal-codes': [123, 456] });

  t.is(url, 'http://fasteignir.visir.is/ajaxsearch/getresults?zip=123,456&stype=sale');
});

/* eslint-disable no-unused-vars */
test.todo('constructing with a single street name');

test.todo('constructing with multiple street names');

test.todo('constructing with a single minimum price');

test.todo('constructing with multiple minimum prices');

test.todo('constructing with a single maximum price');

test.todo('constructing with multiple maximum prices');

test.todo('constructing with a single minimum square meters');

test.todo('constructing with multiple minimum square meters');

test.todo('constructing with a single maximum square meters');

test.todo('constructing with multiple maximum square meters');

test.todo('constructing with a single minimum number of rooms');

test.todo('constructing with multiple minimum number of rooms');

test.todo('constructing with a single maximum number of rooms');

test.todo('constructing with multiple maximum number of rooms');
