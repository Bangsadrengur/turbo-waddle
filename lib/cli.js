const nopt = require('nopt');

const knownOptions = {
  'postal-code': [Number, Array],
};

function cli(args) {
  const parameters = nopt(knownOptions, {}, args, 2);

  const sanitizedParameters = {
    'postal-codes': parameters['postal-code'],
  };

  return sanitizedParameters;
}

module.exports = cli;
