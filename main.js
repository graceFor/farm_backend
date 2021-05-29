var http = require("http");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData);
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname);
  if (pathname === "/") {
    // main home
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});

app.listen(3000);
