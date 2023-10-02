import { Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";

const ShowByCategories = () => {
  const { category } = useParams()
  const [ products, setProducts ] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`).then(response => setProducts(response.data))
  } , [category])
  return (
    <div className="container">
      <div className="flex justify-end mt-8 mb-8">
        <Select
          defaultValue="Sort by Latest"
          className="h-10 w-[136px] "
          // onChange={handleChange}
          options={[
            {
              value: "Sort by Latest",
              label: "Sort by Latest",
            },
            {
              value: "Sort by Oldest",
              label: "Sort by Oldest",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:ms-28">
        {
            products.map((product, i) => <Card key={i} product={product}/>)
        }
     </div>
    </div>
  );
};

export default ShowByCategories;
