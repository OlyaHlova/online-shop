const cart = new Cart($('#cartModal'));
const productList = new ProductList(
  'products.json',
  $('.products-container'),
  cart
);

    cart.sort( (a, b) => a.price - b.price );
console.log(JSON.stringify(cart));