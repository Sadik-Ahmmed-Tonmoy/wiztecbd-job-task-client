import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useForm } from "react-hook-form";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownBtn from "../DropDownBtn/DropDownBtn";

const Navbar = () => {
  const phones = ["iPhone", "Samsung", "Xiaomi"];

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="sticky top-0 z-10">
      {/* mobile */}

      {/* mobile screen end */}

      {/* pc start*/}
      <div className="hidden md:block">
        <div className="flex justify-between items-center container mx-auto pt-4">
          <div>
            <Link to={"/"}>
              <img className="h-16 mb-4" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex items-center gap-5 w-7/12">
            <form className="relative w-full" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("search")}
                placeholder="Search for products..."
                className="input border-[#EF3C8B] bg-white rounded-full h-10 w-full text-[#00000099] ps-11"
              />
              <button className="absolute left-4 top-3" type="submit">
                <BiSearchAlt2 className="text-[#F40F6F]" size={20} />
              </button>
            </form>

            <p className="flex items-center gap-1 text-black font-semibold">
              <BsPerson className="font-semibold" size={20} />
              Account
            </p>
            <div className="border h-5 border-[#00000099]"></div>
            <div className="badge border-[#F40F6F] bg-[#F40F6F] h-10 w-[123px] gap-1 text-white">
              <BiShoppingBag />
              Cart <span>(0)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd col */}
      <div className="border">
        <div className="flex justify-between items-center container mx-auto">
          <div>
              <DropDownBtn title={"CATEGORIES"} items={phones} />
          </div>

          <div className="flex gap-4">
          <div className="rounded-full h-7 w-24 pt-1 text-center text-sm text-white bg-[#471D6B]">Offers</div>
          <div className="rounded-full h-7 w-24 pt-1 text-center text-sm text-white bg-[#FF87A6]">Seller Picks</div>
          <div className="rounded-full h-7 w-24 pt-1 text-center text-sm text-white bg-[#913BDB]">Campaign</div>
          </div>
        </div>
      </div>
      {/* pc end*/}
    </div>
  );
};

export default Navbar;
