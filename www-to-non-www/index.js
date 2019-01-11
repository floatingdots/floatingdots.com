const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHeader(301, {'Location': 'https://floatingdots.com/'});
  res.end();
});
server.listen();
