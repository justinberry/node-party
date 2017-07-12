var Page = require('./page.js');
var Dabber = require('./dabber.js');

var http = require('http');
http.createServer(async function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  var pageBody = await Page.get('reddit.com');
  response.write(Dabber.dab(pageBody));
  response.end();
}).listen(8888);
