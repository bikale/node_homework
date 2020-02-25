/* 
    Create a simple Node script that converts 'www.mim.edu' domain name to
    the equivalent IP address. (Search and learn 'dns' module, resolve4)

*/

const dns = require('dns');

dns.lookup('www.miu.edu', function(err, address) {
  console.log(address);
});
