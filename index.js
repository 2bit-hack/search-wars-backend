const express = require("express");
const cors = require("cors");
const axios = require("axios");

const constants = require("./constants/constants");
const getUrlEncodedSearch = require("./utils/getUrlEncodedSearch");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const termOne = req?.body?.["termOne"].trim() ?? "";
	const termTwo = req?.body?.["termTwo"].trim() ?? "";

	if (termOne.length > 50 || termTwo.length > 50) {
		return res.json({
			termOne: -1,
			termTwo: -1,
		});
	}

  const regex = constants.regex.bing; // TODO: Allow switching between search engines

  const urlOne = getUrlEncodedSearch(termOne);
  const urlTwo = getUrlEncodedSearch(termTwo);

  const resultOne = await axios.get(urlOne).then((response) => response.data);
  const resultTwo = await axios.get(urlTwo).then((response) => response.data);

  const termOneResults = parseInt(
    resultOne.match(regex)?.[1]?.replaceAll(",", "") ?? "-1"
  );
  const termTwoResults = parseInt(
    resultTwo.match(regex)?.[1]?.replaceAll(",", "") ?? "-1"
  );

  return res.json({
    termOne: termOneResults,
    termTwo: termTwoResults,
  });
});

const server = app.listen(4000, () => {
  console.log(`Listening at http://localhost:${server.address().port}`);
});
