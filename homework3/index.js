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
//const writeStream = fs.createWriteStream('./myText.txt');
https
  .createServer(options, function(req, res) {
    const ccc = fs.createReadStream('./index.html').pipe(res);

    if (req.method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const userInput = parsedBody.split('=')[1] + '\n';
        //writeStream.write(userInput);
        fs.appendFile('./myText.txt', userInput, err => {
          if (err) throw err;
          console.log('The file updated succesfully!');
        });
      });
      res.write(`<script> alert('succesfully submitted')</script>`);
    }
  })
  .listen(8000);
