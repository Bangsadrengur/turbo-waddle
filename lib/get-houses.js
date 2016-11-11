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

module.exports = getHouses;
