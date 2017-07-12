var http = require('http');
var superagent = require('superagent');

module.exports.getPage = async function(host) {
  var response = await superagent.get({
    hostname: host,
    port: '80',
    path: '/'
  });
  return response.text;
};
