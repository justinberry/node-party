var superagent = require('superagent');

module.exports.get = async function(host) {
  var response = await superagent.get({
    hostname: host,
    port: '80',
    path: '/'
  });
  return response.text;
};
