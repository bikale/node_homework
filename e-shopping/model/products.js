const getDb = require('../utils/database').getDb;

let products = [
  {
    id: '123456',
    title: 'nike',
    imageUrl: '/images/hoodie1.png',
    price: '100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '123453',
    title: 'Adidas',
    imageUrl: '/images/hoodie3.png',
    price: '100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '1233456',
    title: 'NodeJs',
    imageUrl: '/images/hoodie2.png',
    price: '300',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '12113456',
    title: 'Brand',
    imageUrl: '/images/hoodie4.png',
    price: '300',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '12322456',
    title: 'Flexy',
    imageUrl: '/images/hoodie1.png',
    price: '300',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '1233453',
    title: 'Adidas',
    imageUrl: '/images/hoodie3.png',
    price: '100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '12433456',
    title: 'NodeJs',
    imageUrl: '/images/hoodie2.png',
    price: '300',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '124113456',
    title: 'Brand',
    imageUrl: '/images/hoodie4.png',
    price: '300',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    id: '123252456',
    title: 'Flexy',
    imageUrl: '/images/hoodie1.png',
    price: '300',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  }
]; // intial values

class Products {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save() {
    this.id = (Math.random() * 10000000).toString();
    getDb()
      .collection('products')
      .insertOne(this)
      .then()
      .catch(console.log);

    // products.push(this);
  }

  static getAll() {
    return getDb()
      .collection('products')
      .find()
      .toArray();
  }
  static deleteItem(id) {
    const query = { id: id };
    return getDb()
      .collection('products')
      .deleteOne(query);

    // products = products.filter(item => item.id != id);
  }
  static editItem(itemObj) {
    getDb()
      .collection('products')
      .updateOne({ id: itemObj.id }, { $set: itemObj }, (err, result) => {});

    // const findeditItem = products.filter(item => item.id == itemObj.id); // return single item object in array [{}]
    // const itemIndex = products.indexOf(findeditItem[0]); // indexOf({}) get the index of the object and replace that index with new object
    // products[itemIndex] = itemObj;
  }
  static findItemById(id) {
    const query = { id: parseFloat(id) };
    return getDb()
      .collection('products')
      .find(query)
      .toArray();
  }
}

module.exports = Products;
