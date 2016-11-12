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
test.skip('constructing with a single street name', (t) => {
});

test.skip('constructing with multiple street names', (t) => {
});

test.skip('constructing with a single minimum price', (t) => {
});

test.skip('constructing with multiple minimum prices', (t) => {
});

test.skip('constructing with a single maximum price', (t) => {
});

test.skip('constructing with multiple maximum prices', (t) => {
});

test.skip('constructing with a single minimum square meters', (t) => {
});

test.skip('constructing with multiple minimum square meters', (t) => {
});

test.skip('constructing with a single maximum square meters', (t) => {
});

test.skip('constructing with multiple maximum square meters', (t) => {
});

test.skip('constructing with a single minimum number of rooms', (t) => {
});

test.skip('constructing with multiple minimum number of rooms', (t) => {
});

test.skip('constructing with a single maximum number of rooms', (t) => {
});

test.skip('constructing with multiple maximum number of rooms', (t) => {
});
