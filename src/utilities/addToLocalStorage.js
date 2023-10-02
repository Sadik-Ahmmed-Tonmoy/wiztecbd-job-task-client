const addToLocalStorage = (id) => {
  let Cart = {};

  //  get the cart data
  const storedCartData = localStorage.getItem("cart");
  if (storedCartData) {
    Cart = JSON.parse(storedCartData);
  }

  //   Add Quantity of id
  const quantity = Cart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    Cart[id] = newQuantity;
  } else {
    Cart[id] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(Cart));
};

export { addToLocalStorage };
