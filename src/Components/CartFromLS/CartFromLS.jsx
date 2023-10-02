import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Drawer } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getCartDataFromLS } from "../../utilities/getCartDataFromLS";
import { removeFromLocalStorage } from "../../utilities/removeFromLocalStorage";
import { deductQuantityFromLS } from "../../utilities/deductQuantityFromLS";
import { addToLocalStorage } from "../../utilities/addToLocalStorage";
import { BiShoppingBag } from "react-icons/bi";
import { DataContext } from "../../providers/DataProvider";

const CartFromLS = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {refetch, setRefetch} = useContext(DataContext)
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const cartIds = getCartDataFromLS();
      const productDataArray = [];
      for (const id in cartIds) {
        try {
          await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
              // console.log(response.data)

              const quantity = cartIds[id];
              const productData = response.data;
              productData.quantity = quantity;
              productDataArray.push(productData);
            });
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }

      setProducts(productDataArray);
      setIsLoading(false);
    };

    fetchData();
  }, [refetch]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleRemove = (id) => {
    removeFromLocalStorage(id);
    setRefetch(!refetch);
  };
  const handleReduceQuantity = (id) => {
    deductQuantityFromLS(id);
    setRefetch(!refetch);
  };
  const handleAdd = (id) => {
    addToLocalStorage(id);
    setRefetch(!refetch);
  };
  // Calculate the total price (sum of subtotals)
  const totalPrice = products.reduce(
    (total, product) => total + product?.price * product?.quantity,
    0
  );
  console.log("totalPrice", totalPrice);

  return (
    <div>
      <div onClick={showDrawer} className="dropdown dropdown-end md:mx-6 z-10">
      <div className="badge border-[#F40F6F] bg-[#F40F6F] h-10 md:w-[123px] gap-1 text-white">
              <BiShoppingBag />
              Cart <span>{products.length}</span>
            </div>
      </div>
      <Drawer
        title="Shopping Cart"
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
      >
        <div>
          <div className="flex justify-between text-xl text-slate-800">
            <h3>Subtotal</h3>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <button className="w-full border rounded-lg mt-3 btn-outline p-2 hover:bg-orange-400 text-orange-400 bg-blue-500 hover:text-blue-500 font-bold">
            Checkout
          </button>
          <div className="border border-slate-400 h-0 my-4"></div>
        </div>

        {isLoading && <progress className="progress w-56"></progress>}
        {products.map((product) => (
          <>
            <div className="flex border rounded-lg p-2 my-2">
              <div className="w-28">
                <img src={product?.image} alt="" />
              </div>
              <div className="ms-3 w-full">
                <div className="flex justify-between items-center w-full mb- md:mb-8">
                  <p className="text-lg font-semibold text-slate-700">
                    {product?.title}
                  </p>
                  <RiDeleteBin6Line
                    className="text-slate-700 hover:text-red-800 hover:cursor-pointer"
                    size={20}
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                  />
                </div>
                <p className="text-slate-800">
                  ${product?.price * product?.quantity}
                </p>
                <div className="btn-group border rounded-lg text-slate-700">
                  <button
                    onClick={() => {
                      handleReduceQuantity(product.id);
                    }}
                    className="py-1 px-4"
                  >
                    -
                  </button>
                  <button className="">{product?.quantity}</button>
                  <button
                    onClick={() => {
                      handleAdd(product.id);
                    }}
                    className="py-1 px-4"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </Drawer>
    </div>
  );
};

export default CartFromLS;
