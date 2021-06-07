const constants = require("../constants/constants");

// TODO: Currently hardcoded for Bing, allow switching between search engines
const getUrlEncodedSearch = (searchTerm) =>
  constants.baseUrl.bing +
  constants.searchQuery.bing +
  encodeURIComponent(searchTerm);

module.exports = getUrlEncodedSearch;
