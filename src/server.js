var Page = require('./page.js');
var Dabber = require('./dabber.js');

var host = process.argv[2];

if (!host) {
  console.log('Supply a host as an argument.');
} else {
  var http = require('http');
  http.createServer(async function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var pageBody = await Page.get(host);
    response.write(Dabber.dab(pageBody));
    response.end();
  }).listen(8888);
}
