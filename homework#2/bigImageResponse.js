/* 
    Create a web server that's going to send a response of big image (bigger
    then 3MB) to any client that sends a request to your specified server:port.
    Use the best way for performance. (Try to solve this in many different ways
    and inspect the loading time in the browser and send many requests to see
    the performance differences)
*/
// const fs = require('fs');
// const http = require('http');

// http
//   .createServer((req, res) => {
//     const src = fs.createReadStream('./SchoolOfAthens.jpg');
//     src.pipe(res);
//   })
//   .listen(5000);

const http = require('http');
const fs = require('fs');
http
  .createServer((request, response) => {
    let body = [];
    const src = fs.createReadStream('./SchoolOfAthens.jpg');
    src
      .on('data', chunk => {
        body.push(chunk);
        // response.write(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body);
        response.end(body);
      });
  })
  .listen(5000);
