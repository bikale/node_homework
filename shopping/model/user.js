let cart = [
 
];

class User {
  constructor(title, imageUrl, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
  }
  save() {
    this.id = Math.random().toString();
    cart.push(this);
  }
  static getAll() {
    return cart;
  }
  static deleteCartItem(id) {
    cart = cart.filter(p => p.id !== id);
  }
  static getCartCount() {
    return cart.length;
  }
}

module.exports = User;
