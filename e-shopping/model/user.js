const getDb = require('../utils/database').getDb;
const ObjectId = require('mongodb').ObjectId;
const Products = require('./products');
let cart = [];

class User {
  // constructor(title, imageUrl, price) {
  //   this.title = title;
  //   this.imageUrl = imageUrl;
  //   this.price = price;
  // }
  static async save(itemId) {
    const productItem = await Products.findItemById(itemId);

    await getDb()
      .collection('users')
      .findOne({
        _id: ObjectId('5e64238dc998391f911ecaa8'),
        'cart._id': ObjectId(itemId)
      })
      .then(userData => {
        if (userData) {
          userData.cart = userData['cart'].map(item => {
            if (item._id == itemId) item.quantity++;
            return item;
          });
          getDb()
            .collection('users')
            .updateOne(
              { _id: ObjectId('5e64238dc998391f911ecaa8') },
              {
                $set: { cart: userData.cart },
                $inc: { total: parseInt(productItem.price) }
              }
            );
        } else {
          productItem.quantity = 1;
          getDb()
            .collection('users')
            .updateOne(
              { _id: ObjectId('5e64238dc998391f911ecaa8') },
              {
                $push: { cart: productItem },
                $inc: { total: parseInt(productItem.price) }
              }
            );
        }
      });
  }

  static getAll() {
    return getDb()
      .collection('users')
      .findOne({ _id: ObjectId('5e64238dc998391f911ecaa8') })
      

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
