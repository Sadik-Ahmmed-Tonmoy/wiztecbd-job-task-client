const removeFromLocalStorage = (id) => {
 const storedCartData = localStorage.getItem("cart")
 if (storedCartData){
    const cartData = JSON.parse(storedCartData)
    if(id in cartData){
        delete cartData[id]
        localStorage.setItem("cart", JSON.stringify(cartData))
    }
 }
}

export {removeFromLocalStorage}