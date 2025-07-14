var express = require('express');
var app = express.Router();
const request = require('request');

router.get('/',async (req, res) => {
  request("https://api.thecatapi.com/v1/images/search", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const catimageUrl = data[0].url;
      res.json(data);
    }
    });
})

module.exports = router;