var http = require('http');

http.createServer(function (req, res) {
  res.write("我還活著，沒換身體。");
  res.end();
}).listen(8080);