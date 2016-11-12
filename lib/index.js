const getHouses = require('./get-houses');
const getPageCount = require('./get-page-count');
const normalizeHouses = require('./normalize-houses');
const constructUrl = require('./construct-url');

function getAllHouses(url, pageCount) {
  const promises = Array.from(Array(pageCount).keys())
    .map(key => key + 1)
    .map(pageNumber => getHouses(`${url}&page=${pageNumber}`));

  return Promise.all(promises);
}

const getAllHFJHouses = getAllHouses.bind(null, constructUrl({ zips: [220, 221] }));

getPageCount(constructUrl({ zips: [221] }))
  .then(getAllHFJHouses)
  .then(houses => [].concat.apply([], houses)) // eslint-disable-line prefer-spread
  .then(normalizeHouses)
  .then(console.log)
  .catch(console.log);
