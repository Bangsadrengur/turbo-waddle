const test = require('ava');
const getHouses = require('../lib/get-houses');
const fs = require('fs');
const thenify = require('thenify');

const readFile = thenify(fs.readFile);

test('.getHouses on a small dataset', (t) => {
  const html = readFile('fixtures/small.html').then(data => data.toString());

  const houses = html.then(getHouses);

  const json = readFile('fixtures/small.json').then(data => JSON.parse(data.toString()));

  return Promise.all([houses, json]).then((values) => { t.deepEqual(values[0], values[1]); });
});


test('.getHouses on a medium dataset', (t) => {
  const html = readFile('fixtures/medium.html').then(data => data.toString());

  const houses = html.then(getHouses);

  const json = readFile('fixtures/medium.json').then(data => JSON.parse(data.toString()));

  return Promise.all([houses, json]).then((values) => { t.deepEqual(values[0], values[1]); });
});
