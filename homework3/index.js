/* 
    Create a https server which is listen to 3000 port. The home page “/” which
    displays an html page which one input to enter any text message, after click
    “Submit” button, the user’s inputs are stored in a local file on the server side.
    User will be redirect to home page after saving successfully.
    
*/

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./privateKey.key'),
  cert: fs.readFileSync('./certificate.crt')
};

https
  .createServer(options, function(req, res) {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(8000);
