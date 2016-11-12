function makeUrlsForPageNumbers(url, pageCount) {
  const promises = Array.from(Array(pageCount).keys())
    .map(key => key + 1)
    .map(pageNumber => `${url}&page=${pageNumber}`);

  return Promise.all(promises);
}

module.exports = makeUrlsForPageNumbers;
