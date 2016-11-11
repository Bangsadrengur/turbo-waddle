const xray = require('x-ray');

const x = xray();

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

module.exports = getPageCount;
