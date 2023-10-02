import { Select } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";

const ShowProducts = () => {
  const [showLess, setShowLess] = useState(true);
  const handleLoadMore = () => {
    setShowLess(false)
  };
  const handleShowLess = () => {
    setShowLess(true)
  };
  const [selectedValue, setSelectedValue] = useState("Latest");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define a function to fetch data based on selectedValue
    const fetchData = async () => {
      if (selectedValue === "Oldest") {
        const response = await axios.get("https://fakestoreapi.com/products?sort=desc");
        setData(response.data);
      } else if (selectedValue === "Latest") {
        const response = await axios.get("https://fakestoreapi.com/products?sort=asc");
        setData(response.data);
      }
    };

    // Call the fetchData function when selectedValue changes
    fetchData();
  }, [selectedValue]); // This useEffect depends on selectedValue

  const handleSort = (event) => {
    setSelectedValue(event);
  };
  return (
    <div className="container">
      <div className="flex justify-end mb-8">
        <Select
          defaultValue="Sort by Latest"
          className="h-10 w-[136px] "
          onChange={handleSort}
          options={[
            {
              value: "Latest",
              label: "Sort by Latest",
            },
            {
              value: "Oldest",
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
              showLess ? data.slice(0, 9).map((product, i) => <Card key={i} product={product} />) : data.map((product, i) => <Card key={i} product={product} />)
            }
      </div>
      <div className="flex justify-center mt-9 mb-[100px]">
        {showLess ? (
          <button
          className="text-[#913BDB] text-center border border-[#913BDB] py-3 px-[72px] hover:rounded-lg hover:font-semibold"
          onClick={handleLoadMore}
        >
          Load More
        </button>
        ) : (
          <button
            className="text-[#913BDB] text-center border border-[#913BDB] py-3 px-[72px] hover:rounded-lg hover:font-semibold"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowProducts;
