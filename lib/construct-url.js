/*
 * criteria:
 * {
 *   'postal-codes': [ ... ],
 *   ...
 * }
 */
function constructUrl(criteria) {
  const prefix = 'http://fasteignir.visir.is/ajaxsearch/getresults?';

  if (criteria['postal-codes'].length === 0) throw new Error('Tried to construct a url from an empty list of zip numbers');

  const postalCode = `zip=${criteria['postal-codes'].join(',')}`;

  const output = `${prefix}${postalCode}&stype=sale`;

  return output;
}

module.exports = constructUrl;
