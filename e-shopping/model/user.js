let cart = [];

class User {
  // constructor(title, imageUrl, price) {
  //   this.title = title;
  //   this.imageUrl = imageUrl;
  //   this.price = price;
  // }
  static save(itemSelected) {
    cart.push(itemSelected);
  }
  static getAll() {
    return cart;
  }
  static deleteCartItem(id) {
    cart = cart.filter(p => p.id != id);
  }
  static getCartCount() {
    return cart.length;
  }
}

module.exports = User;
