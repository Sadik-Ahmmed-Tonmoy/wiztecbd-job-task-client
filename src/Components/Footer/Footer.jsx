import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { BsFacebook, BsLinkedin, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#361354]">
      <footer className="footer p-10 text-[rgba(255, 255, 255, 0.80)] container mx-auto mb-12 pt-16">
        <div>
          <Link to={"/"}>
            <img className="h-16 mb-4" src={logo} alt="" />
          </Link>
          <p className="link link-hover flex items-center gap-1">
            <BsPhone />
            13234-774464
          </p>
          <p className="link link-hover text-sm font-medium flex items-center gap-1">
            <AiOutlineMail />
            anghorag@support.gmail.com
          </p>
          <h5 className="text-lg font-medium">Join our social links</h5>
          <div className="border h-0 w-full border-[#FFFFFFCC] mb-2"></div>
          <div className="flex gap-4">
            <BsFacebook className="h-10 w-10 p-2 bg-[#FFF1F4] text-[#F40F6F] rounded-md" />
            <BsLinkedin className="h-10 w-10 p-2 bg-[#FFF1F4] text-[#F40F6F] rounded-md" />
          </div>
        </div>
        <nav>
          <header className="text-[#F40F6F] text[16px] font-medium mt-7 mb-8">
            Categories
          </header>
          <p className="link link-hover text-sm">Makeup</p>
          <p className="link link-hover text-sm">Skin Care</p>
          <p className="link link-hover text-sm">Bath and Body</p>
          <p className="link link-hover text-sm">Hair Care</p>
          <p className="link link-hover text-sm">Personal Care</p>
          <p className="link link-hover text-sm">Weakness</p>
        </nav>
        <nav>
          <header className="text-[#F40F6F] text[16px] font-medium mt-7 mb-8">
          Quick Links
          </header>
          <p className="link link-hover text-sm">Offers</p>
          <p className="link link-hover text-sm">Seller Picks</p>
          <p className="link link-hover text-sm">Campaigns</p>
          <p className="link link-hover text-sm">Hair Care</p>
        </nav>
        <nav>
          <header className="text-[#F40F6F] text[16px] font-medium mt-7 mb-8">
          Support
          </header>
          <p className="link link-hover text-sm">Return Policy</p>
          <p className="link link-hover text-sm">Terms of Use</p>
          <p className="link link-hover text-sm">Privacy Policy</p>
          <p className="link link-hover text-sm">FAQS</p>
          <p className="link link-hover text-sm">Shipping & Delivery</p>
          <p className="link link-hover text-sm">Contact Us</p>
        </nav>     
      </footer>
      <div className="w-full h-0 border border-[#FFFFFFCC]"></div>
      <p className="text-center text-sm py-6">
        Copyright @ 2023 Anghorag. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
