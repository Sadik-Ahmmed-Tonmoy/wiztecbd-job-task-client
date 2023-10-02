import { Rate } from "antd";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import saleBG from "../../assets/Banner/saleBG.png";
import { BiShoppingBag } from "react-icons/bi";

const Card = ({ product }) => {
  console.log(product);
  const { category, description, image, price, title, rating } = product;
  return (
    <div className="relative">
      <img className="absolute z-10" src={saleBG} alt="" />
      <div className="card card-compact shadow-xl lg:w-10/12 p-3 border border-[#FF87A6] rounded-lg  hover:shadow-2xl mb-4">
        <div className="md:h-[220px] w-full border mx-auto rounded-lg">
          <img
            className="w-full h-full object-fill rounded-lg shrink-0"
            src={image}
            alt="Shoes"
          />
        </div>

        <div className="mt-[14px]">
          <h2 className="font-semibold text-black text-lg mb-2">
            {title.slice(0, 22)}
          </h2>
          <div className="flex items-center gap-1 mb-[14px]">
            <Rate disabled allowHalf defaultValue={rating?.rate} />
            <span className="text-black text-sm">({rating?.count})</span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-black text-lg font-semibold flex items-center">
              <TbCurrencyTaka />
              {price}
            </p>
            <p className="text-[#999999] text-sm font-medium flex items-center line-through">
              <TbCurrencyTaka />
              {(price * 1.45).toFixed(2)}
            </p>
            <p className="text-black text-sm font-medium">(-45%)</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-between mt-[18px] z-20">
            <div className="border rounded-md border-[#F40F6F] flex items-center">
              <button className="px-3 py-2 text-[#F40F6F]"><AiOutlineMinus/></button>
              <span className="border border-[#F40F6F] h-4 w-0"></span>
              <p className="px-3 py-2 text-black">0</p>
              <span className="border border-[#F40F6F] h-4 w-0"></span>
              <button className="px-3 py-1 text-[#F40F6F]"><AiOutlinePlus/></button>
            </div>
            <button className="text-xs text-[#F40F6F] rounded-md bg-[#FFBFCD] flex items-center gap-1 px-5 py-3">  <BiShoppingBag size={15}/>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
