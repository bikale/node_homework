const getDb = require('../utils/database').getDb;
const ObjectId = require('mongodb').ObjectId;
let cart = [];

class User {
  // constructor(title, imageUrl, price) {
  //   this.title = title;
  //   this.imageUrl = imageUrl;
  //   this.price = price;
  // }
  static save(itemId) {
    // getDb()
    // .collection('products')
    // .insertOne(itemId)
    // .then()
    // .catch(console.log);
    cart.push(ObjectId(itemId));
  }
  static getAll() {
    const query = { _id: { $in: cart } };

    return getDb()
      .collection('products')
      .find(query)
      .toArray();

    //return cart;
  }
  static deleteCartItem(id) {
    // const query = { _id: ObjectId(id) };
    // return getDb()
    //   .collection('products')
    //   .deleteOne(query);
    cart = cart.filter(p => p != id);
  }
  static getCartCount() {
    return cart.length;
  }
}

module.exports = User;
