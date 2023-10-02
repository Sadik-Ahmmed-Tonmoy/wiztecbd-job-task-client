const getCartDataFromLS = () => {
  let cartData = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cartData = JSON.parse(storedCart);
  }
  return cartData;
};

export { getCartDataFromLS };
