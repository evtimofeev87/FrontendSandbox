let http = require('http');

let goHome = (req, res) => {
  console.log('home');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ name: 'John', surname: 'Doe' }));
};

let goSome = (req, res) => {
  res.writeHead(200);
  res.end('This is some page');
};

let server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      goHome(req, res);
      break;
    case '/some':
      goSome(req, res);
      break;
  }
});

server.listen(8001);
