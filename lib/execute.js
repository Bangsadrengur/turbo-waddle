const getHousesForCriteria = require('../lib/get-houses-for-criteria');

function execute() {
  getHousesForCriteria({ 'postal-codes': [220] });
}

module.exports = execute;
