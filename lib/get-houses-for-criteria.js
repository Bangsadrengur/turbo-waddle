const constructUrl = require('./construct-url');
const getPageCount = require('./get-page-count');
const makeUrlsForPageNumbers = require('./make-urls-for-page-numbers');
const getHouses = require('./get-houses');
const normalizeHouses = require('./normalize-houses');

function getHousesForCriteria(criteria) {
  const url = constructUrl(criteria);
  return getPageCount(url)
    .then(pageCount => makeUrlsForPageNumbers(url, pageCount))
    .then(urls => urls.map(getHouses))
    .then(gettingHouses => Promise.all(gettingHouses))
    .then(houses => [].concat.apply([], houses))
    .then(normalizeHouses);
}

module.exports = getHousesForCriteria;
