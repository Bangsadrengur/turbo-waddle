const getHouses = require('./get-houses');
const getPageCount = require('./get-page-count');
const normalizeHouses = require('./normalize-houses');

/*
 * criteria:
 * {
 *   zips: [ ... ],
 *   ...
 * }
 */
function constructUrl(criteria) {
  const prefix = 'http://fasteignir.visir.is/ajaxsearch/getresults?';

  if (criteria.zips.length === 0) throw new Error('Tried to construct a url from an empty list of zip numbers');

  const zip = `zip=${criteria.zips.join(',')}`;

  const output = `${prefix}${zip}&stype=sale`;

  return output;
}

function getAllHouses(url, pageCount) {
  const promises = Array.from(Array(parseInt(pageCount, 10)).keys())
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
