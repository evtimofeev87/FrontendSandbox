const https = require("https");
const fs = require("fs");
let beeAuth = require("./beeAuth");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

let goHome = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify({ name: "John", surname: "Doe" }));
};

let goSome = (req, res) => {
  res.writeHead(200);
  res.end("This is some page");
};

let getBeeToken = async (req, res) => {
  let data = await beeAuth.getBeeToken();

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify(data));
};

let getRows = async (req, res) => {
  let data = beeAuth.getRows();

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end(JSON.stringify(data));
};

let server = https.createServer(options, (req, res) => {
  switch (req.url) {
    case "/":
      goHome(req, res);
      break;
    case "/some":
      goSome(req, res);
      break;
    case "/get-bee-token":
      getBeeToken(req, res);
      break;
    case "/get-rows":
      getRows(req, res);
      break;
  }
});

server.listen(8001);
// fetch('http://127.0.0.1:8001/get-bee-token').then(response => response.json()).then(data =>console.log(data));
