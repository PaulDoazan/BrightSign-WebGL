const express = require('express');
const app = express();
const path = require('path')

function main() {

  app.use(express.static(path.join(__dirname, "client")));

  app.get('/', (req, res) => {
    res.send(path.join(__dirname, '/client/index.html'));
  })

  app.listen(9090, function () {
    console.log('Example app listening on port 9090!');
  });
}

// exchange below line to 'window.main = main;' if using node-server.html
// as the application entry point.
main();
