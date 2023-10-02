import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useForm } from "react-hook-form";
import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import DropDownBtn from "../DropDownBtn/DropDownBtn";
import axios from "axios";
import ClickDropDown from "../ClickDropDown/ClickDropDown";
import CartFromLS from "../CartFromLS/CartFromLS";

const Navbar = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      setCategories(response.data)
    })
  }, [])

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" bg-white">
      {/* mobile */}
      <div className="navbar block md:hidden text-black">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white"
            >
              <ul className=" bg-white  rounded-box z-10">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                    to={`/`}
                  >
                    Home
                  </NavLink>
                </li>
                <ClickDropDown title={"CATEGORIES"} items={categories} />
              </ul>
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex rounded-full border border-black p-2">
            {/* <Link to={"/login"}> */}
                <BsPerson className="font-semibold text-black" size={20} />
            {/* </Link> */}

            {/* cart with drawer */}
{/* <CartFromLS/> */}
              {/* cart with drawer */}
          </div>
        </div>
      </div>
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
            <CartFromLS/>
          </div>
        </div>
      

      {/* 2nd col */}
      <div className="border">
        <div className="flex justify-between items-center container mx-auto">
          <div>
              <DropDownBtn title={"CATEGORIES"} items={categories} />
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
    </div>
  );
};

export default Navbar;
