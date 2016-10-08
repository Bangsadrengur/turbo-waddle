var Xray = require("x-ray");
var x = Xray();

x(
    'http://fasteignir.visir.is/ajaxsearch/getresults?zip=220&stype=sale',
    '.b-products-item-list',
    [{
        image: 'img@src',
        'open-house': '.b-openhouse-label',
        address: '.b-products-item-details a',
        url: '.b-products-item-details@href',
        details: x('.b-products-item-details-param', ['td']),
        description: ['.b-products-item-details-descr']
    }]
)((err, content) => {
  console.log(err);
  console.log(content);
});
