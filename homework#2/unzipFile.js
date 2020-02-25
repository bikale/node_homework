/* 
    Using Node Stream API, create a script to unzip a file (after you zip it). (Use
    zlib.createGunzip() stream)
*/

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const unzip = zlib.createUnzip();

const readable = fs.createReadStream(__dirname + '/source.txt');
const compressed = fs.createWriteStream(__dirname + '/compressedFile.txt.gz');

readable.pipe(gzip).pipe(compressed);

compressed.on('close', function() {
  const readCompressed = fs.createReadStream(
    __dirname + '/compressedFile.txt.gz'
  );
  const deCompressed = fs.createWriteStream(__dirname + '/deCompressed.txt');
  readCompressed.pipe(unzip).pipe(deCompressed);
});
