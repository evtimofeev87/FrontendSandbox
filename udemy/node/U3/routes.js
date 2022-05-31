const fs = require('fs');

const getPage = bodyInner => {
    return `
<html>
  <head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>  
  <body class="m-3">
    ${bodyInner}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  </body>
</html>
    `
}

const routes = (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.write(getPage('<form action="/create-user" method="POST"><input type="text" name="user"><br><button class="btn btn-primary mt-3">Send User</button></form>'));
        return res.end();
    } else if(req.url === '/users' && req.method === 'GET') {
        res.write(getPage('<ul class="list-group"><li class="list-group-item">John Doe</li><li class="list-group-item">Jane Dode</li></ul>'));
        return res.end();
    } else if(req.url === '/create-user' && req.method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('bd.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                res.end();
            })
        })
    }

}

module.exports = routes;