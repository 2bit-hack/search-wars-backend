const constants = {
  baseUrl: {
    google: "https://www.google.com/",
    bing: "https://www.bing.com/",
  },
  searchQuery: {
    google: "search?q=",
    bing: "search?q=",
  },
  regex: {
    google: /./,
    bing: /span class="sb_count">(.*?) results<\/span>/,
  },
};

module.exports = constants;
