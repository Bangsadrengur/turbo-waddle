const xray = require('x-ray');

const x = xray();

/*
 * url:
 * http://fasteignir.visir/is/ajaxsearch/getresults?CRITERIA
 */
function getHouses(url) {
  return new Promise((resolve, reject) => {
    const request = x(
      url,
      '.b-products-item-list',
      [{
        image: 'img@src',
        'open-house': '.b-openhouse-label',
        address: '.b-products-item-details a',
        url: '.b-products-item-details@href',
        details: x('.b-products-item-details-param', ['td']),
        description: ['.b-products-item-details-descr'],
      }]
    );

    request((err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });
}

function getPageCount(url) {
  return new Promise((resolve, reject) => {
    const request = x(
      url,
      '.b-navigation-pag',
      ['a@rel']
    );

    request((err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content.pop());
    });
  });
}

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

getPageCount(constructUrl({ zips: [220, 221] }))
  .then(getAllHFJHouses)
  .then(houses => [].concat.apply([], houses)) // eslint-disable-line prefer-spread
  .then(console.log)
  .catch(console.log);
