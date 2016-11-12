const test = require('ava');
const proxyquire = require('proxyquire');
const fs = require('fs');
const thenify = require('thenify');

const readFile = thenify(fs.readFile);
function getHouses() {
  return readFile('fixtures/small.json').then(data => JSON.parse(data.toString()));
}

const getHousesForCriteria = proxyquire('../lib/get-houses-for-criteria', {
  './get-page-count': () => Promise.resolve(1),
  './get-houses': getHouses,
});

test('getting houses', (t) => {
  const gettingHouses = getHousesForCriteria({ 'postal-codes': [123] });

  return gettingHouses.then((houses) => {
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
