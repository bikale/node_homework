const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;
q = { name: 'fre' };
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected .....');
    client
      .db('miu')
      .collection('student')
      .findOne({ name: 'fre' }, (err, data) => {
        q['_id'] = data['_id'];
        client
          .db('miu')
          .collection('student')
          .update(q, { name: 'abcde' }, function(err, data) {
            console.log('updated');
          });
      });

    // .find()
    // .toArray()
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(console.log);

    // .insertMany([{ name: 'getch', age: 1 },{ name: 'dddd', age: 1 }])
    // .then(result => {
    //   console.log('inserted');
    // })
    // .catch(err => {console.log(err)});

    // client.close()
  })
  .catch(err => {
    console.log(err);
  });
