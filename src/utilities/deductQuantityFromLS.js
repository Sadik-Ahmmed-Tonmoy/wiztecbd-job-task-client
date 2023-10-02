const deductQuantityFromLS = (id) => {
    let Cart = {};

    //  get the cart data
    const storedCartData = localStorage.getItem("cart");
    if (storedCartData) {
      Cart = JSON.parse(storedCartData);
    }
  
    //   reduce Quantity of id
    const quantity = Cart[id];
    if (quantity && quantity > 1) {
      const newQuantity = quantity - 1;
      Cart[id] = newQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(Cart));
}

export { deductQuantityFromLS }