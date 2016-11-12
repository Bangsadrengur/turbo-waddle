const getHouses = require('./get-houses');
const getPageCount = require('./get-page-count');
const normalizeHouses = require('./normalize-houses');
const constructUrl = require('./construct-url');
const makeUrlsForPageNumbers = require('./make-urls-for-page-numbers');

const getAllHFJHouses = getAllHouses.bind(null, constructUrl({ zips: [220, 221] }));

getPageCount(constructUrl({ zips: [221] }))
  .then(getAllHFJHouses)
  .then(houses => [].concat.apply([], houses)) // eslint-disable-line prefer-spread
  .then(normalizeHouses)
  .then(console.log)
  .catch(console.log);
