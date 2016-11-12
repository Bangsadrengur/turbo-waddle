function makeUrlsForPageNumbers(url, pageCount) {
  return Array.from(Array(pageCount).keys())
    .map(key => key + 1)
    .map(pageNumber => `${url}&page=${pageNumber}`);
}

module.exports = makeUrlsForPageNumbers;
