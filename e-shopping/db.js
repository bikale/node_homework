const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then(clinet => {
    console.log('db connected.......');
    clinet
      .db('miu')
      .collection('student')
      .find()
      .toArray()
      
      
      .then(data=>{console.log(data);})
    // insertMany([{'name':'Getch','course':['CS456','CS452']},{'name':'Tk','course':['CS456','CS452']}])
  })
  .catch(err => {
    console.log('not connected');
  });
