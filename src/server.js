var PageGetter = require('./page-getter.js');

const DAB_GIF = "https://media3.giphy.com/media/lae7QSMFxEkkE/giphy.gif";

var http = require('http');
http.createServer(async function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  var page = await PageGetter.getPage('reddit.com');
  response.write(page.replace(/<img(.*?)src="[^"]*"([^>]*)>/g, `<img $1 src="${DAB_GIF}" $2>`));
  response.end();
}).listen(8888);
