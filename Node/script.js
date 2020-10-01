let http = require("http");

let goHome = (req, res) => {
  res.writeHead(200);
  res.end('Home');
};

let goSome = (req, res) => {
  res.writeHead(200);
  res.end('This is some page');
};

let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      goHome(req, res);
    case "/some":
      goSome(req, res);
  }
});

server.listen(8000);
