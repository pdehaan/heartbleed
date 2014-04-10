var Promise = require("promise");
var request = require("request");

// via https://twitter.com/FiloSottile/status/453553607661858817
var API_URI = "http://bleed-1161785939.us-east-1.elb.amazonaws.com/bleed/";

module.exports = function heartbleed(uri) {
  "use strict";

  var requestUri = API_URI + uri;
  return new Promise(function (resolve, reject) {
    request.get({
      "uri": requestUri,
      "json": true
    }, function (err, res, body) {
      var status = ["vuln", "safe", "error"];
      if (err) {
        return reject(err);
      }
      body.status = status[body.code];
      resolve(body);
    });
  });
};
