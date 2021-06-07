const constants = require("../constants/constants");

const getUrlEncodedSearch = (searchTerm) =>
  constants.baseUrl.bing +
  constants.searchQuery.bing +
  encodeURIComponent(searchTerm);

module.exports = getUrlEncodedSearch;
