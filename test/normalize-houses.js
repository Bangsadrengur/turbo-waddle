const test = require('ava');
const normalize = require('../lib/normalize-houses');
const fs = require('fs');
const thenify = require('thenify');

const readFile = thenify(fs.readFile);

test('.normalize on a small dataset', (t) => {
  const json = readFile('fixtures/small.json').then(data => JSON.parse(data.toString()));

  const normalHouses = json.then(normalize);

  return normalHouses.then((houses) => {
    const house = houses[0];

    t.truthy(house.image);
    t.truthy(house.street);
    t.truthy(house['postal-code']);
    t.truthy(house.price);
    t.truthy(house['square-meters']);
    t.truthy(house.type);
    t.truthy(house['no-rooms']);
    t.truthy(house.description);
  });
});


test('.normalize on a medium dataset', (t) => {
  const json = readFile('fixtures/medium.json').then(data => JSON.parse(data.toString()));

  const normalHouses = json.then(normalize);

  return normalHouses.then((houses) => {
    houses.forEach((house) => {
      t.truthy(house.image);
      t.truthy(house.street);
      t.truthy(house['postal-code']);
      t.truthy(house.price);
      t.truthy(house['square-meters']);
      t.truthy(house.type);
      t.truthy(house['no-rooms']);
      t.truthy(house.description);
    });
  });
});
