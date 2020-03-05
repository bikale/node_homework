const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then(client => {
      console.log('Connected.......');
      _db = client.db('onlineShopping');
      callback();
    })
    .catch(console.log);
};

const getDb = () => {
  if (_db) return _db;
  throw new Error('No database found');
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
