const products = [
  {
    title: 'nike',
    imageUrl: '/images/hoodie1.png',
    price: '$100',
    id: '123456',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    title: 'Adidas',
    imageUrl: '/images/hoodie3.png',
    price: '$100',
    id: '123444',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    title: 'Lorem',
    imageUrl: '/images/hoodie2.png',
    price: '$300',
    id: '133333',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    title: 'Lorem',
    imageUrl: '/images/hoodie4.png',
    price: '$300',
    id: '133333',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  },
  {
    title: 'Lorem',
    imageUrl: '/images/hoodie1.png',
    price: '$300',
    id: '133333',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consequatur temporibus consectetur aliquid modi harum asperiores ducimus dolorem enim magni, fugiat porro a fugit molestiae voluptatibus mollitia velit, perferendis eligendi.'
  }
];

class Products {
  constructor(title, imageUrl, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
  }
  save() {
    this.id = Math.random().toString();
    products.push(this);
  }
  static getAll() {
    return products;
  }
  static findItem(id) {
    return products;
  }
}

module.exports = Products;
