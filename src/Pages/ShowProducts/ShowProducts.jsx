import { Select } from "antd";
import React, { useState } from "react";
import useLimitedData from "../../hooks/useLimitedData";
import axios from "axios";
import Card from "../../Components/Card/Card";

const ShowProducts = () => {
  const [showAllData, setShowAllData] = useState(false);
  const [allData, setAllData] = useState([]);
  const [limitedProducts] = useLimitedData(9);

  const handleLoadMore = () => {
    setShowAllData(true);
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setAllData(response.data);
    });
  };

  const handleShowLess = () => {
    setShowAllData(false);
  };
  return (
    <div className="container">
      <div className="flex justify-end mt-8 mb-8 sticky top-0 bg-white z-20">
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
        {showAllData
          ? allData.map((product, i) => <Card key={i} product={product} />)
          : limitedProducts.map((product, i) => (
              <Card key={i} product={product} />
            ))}
      </div>
      <div className="flex justify-center mt-9 mb-[100px]">
        {showAllData ? (
          <button
            className="text-[#913BDB] text-center border border-[#913BDB] py-3 px-[72px] hover:rounded-lg hover:font-semibold"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        ) : (
          <button
            className="text-[#913BDB] text-center border border-[#913BDB] py-3 px-[72px] hover:rounded-lg hover:font-semibold"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowProducts;
