const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectID;
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then(client => {
    client
      .db('labDb')
      .collection('restaurants')
      .aggregate([
        {
          $sort: {
            cuisine: 1,name:-1
          }
        },
        { $project: {  name: 1,  cuisine: 1 } }
      ])

      .toArray()
      .then(console.log);
  })
  .catch(console.err);

// .then(clinet => {
//   console.log('db connected.......');
//   clinet
//     .db('onlineShopping')
//     .collection('users')
//     .findOne({
//       _id: objectId('5e64238dc998391f911ecaa8'),
//       'cart.id': '2023222'
//     })
//     .then(data => {
//       if (data) {
//         data.cart = data['cart'].map(item => {
//           if (item.id == '2023222') {
//             item.qty++;
//           }
//           return item;
//         });
//         clinet
//           .db('onlineShopping')
//           .collection('users')
//           .updateOne(
//             { _id: objectId('5e64238dc998391f911ecaa8') },
//             { $set: { cart: data.cart},  $inc: { total: 50 } }
//           );
//       } else {
//         clinet
//           .db('onlineShopping')
//           .collection('users')
//           .updateOne(
//             { _id: objectId('5e64238dc998391f911ecaa8') },
//             {
//               $push: { cart: { id: '2023222', qty: 1 } },
//               $inc: { total: 50 }
//             }
//           );
//       }
//     });

// .aggregate([
//   {
//     $match: {
//       cuisine: 'Ethiopian'
//     }
//   },
//   { $unwind: '$grades' },
//   {
//     $group: {
//       _id: '$restaurant_id',
//       scores: { $avg: '$grades.score' },
//       name:{$addToSet:'$name'}
//     }
//   }
// ])
// .toArray()
// })
// .catch(err => {
//   console.log('not connected');
// });
