const cli = require('./cli');
const getHousesForCriteria = require('./get-houses-for-criteria');

function execute(args) {
  const parameters = cli(args);
  return getHousesForCriteria(parameters);
}

module.exports = execute;
