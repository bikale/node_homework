const products = [];

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
}

module.exports = Products;
