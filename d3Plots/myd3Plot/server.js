const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    console.log(req.url);

    switch (req.url) {
      case "/":
        fs.readFile("./index.html", (err, data) => {
          if (err) throw err;
          res.writeHeader(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/script.js":
        fs.readFile("./script.js", (err, data) => {
          if (err) throw err;
          res.writeHeader(200, { "Content-Type": "application/javascript" });
          res.write(data);
          res.end();
        });
        break;
      case "/style.css":
        fs.readFile("./style.css", (err, data) => {
          if (err) throw err;
          res.writeHeader(200, { "Content-Type": "text/css" });
          res.write(data);
          res.end();
        });
        break;
      case "/data.json":
        fs.readFile("./data.json", (err, data) => {
          if (err) throw err;
          res.writeHeader(200, { "Content-Type": "application/json" });
          res.write(data);
          res.end();
        });
        break;
    }
  })
  .listen(3001);
