const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectID;
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then(clinet => {
    console.log('db connected.......');
    clinet
      .db('labDb')
      .collection('restaurants')
      .aggregate([
        {
          $match: {
            cuisine: 'Ethiopian'
          }
        },
        { $unwind: '$grades' },
        {
          $group: {
            _id: '$restaurant_id',
            scores: { $avg: '$grades.score' },
            name:{$addToSet:'$name'}
          }
        }
      ])
      .toArray()
      .then(console.log);
  })
  .catch(err => {
    console.log('not connected');
  });
