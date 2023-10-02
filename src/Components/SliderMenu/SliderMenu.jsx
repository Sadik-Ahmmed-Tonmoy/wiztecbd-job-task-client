import { Slider } from 'antd';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';

const SliderMenu = () => {
    const category = [
        "Sun Care",
        "Night Care",
        "Moisturizers",
        "Eye Care",
        "Masks",
        "Personal Care",
        "Hair Care",
        "On Sale",
        "Seller Picks",
      ];
      const brands = [
        "The Body Shop",
        "Nivea",
        "Skinfood",
        "Neutrogena",
        "Cerave",
        "Olay",
        "Dove",
        "Neogen",
        "Loreal",
      ];
      const colors = [
        "Red",
        "Pink",
        "White",
        "Black",
        "Aqua",
        "Green",
        "Blue",
        "Neogen",
        "Loreal",
      ];

    const [sliderValue, setSliderValue] = useState([2000, 6600]); // Initial values
    const handleSliderChange = (value) => {
      setSliderValue(value);
    };

    return (
        <div className='ps-2 md:ps-0 lg:w-64 bg-white'>
             <div className=" mt-11">
                  <div className="flex justify-between items-center text-black text-lg font-medium">
                    <p>CATEGORY</p>{" "}
                    <span>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <div className="border border-[#F40F6F] my-3 "></div>
                  {category.map((category, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer mb-[14px]"
                    >
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-[#F40F6F] border-black w-4 h-4 checked:border-[#F40F6F] checked:border-0"
                        checked
                      />
                      <span className="text-[rgba(0, 0, 0, 0.60)] text-sm font-medium">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>

                <div className=" mt-11">
                  <div className="flex justify-between items-center text-black text-lg font-medium">
                    <p>BRAND</p>{" "}
                    <span>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <div className="border border-[#F40F6F] my-3"></div>
                  {brands.map((brand, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer mb-[14px]"
                    >
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-[#F40F6F] border-black w-4 h-4 checked:border-[#F40F6F] checked:border-0"
                        checked
                      />
                      <span className="text-[rgba(0, 0, 0, 0.60)] text-sm font-medium">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
                <div className=" mt-11">
                  <div className="flex justify-between items-center text-black text-lg font-medium">
                    <p>COLORS</p>{" "}
                    <span>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <div className="border border-[#F40F6F] my-3"></div>
                  {colors.map((color, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer mb-[14px]"
                    >
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-[#F40F6F] border-black w-4 h-4 checked:border-[#F40F6F] checked:border-0"
                        checked
                      />
                      <span className="text-[rgba(0, 0, 0, 0.60)] text-sm font-medium">
                        {color}
                      </span>
                    </label>
                  ))}
                </div>
                <div className=" mt-11">
                  <div className="flex justify-between items-center text-black text-lg font-medium">
                    <p>SIZE</p>{" "}
                    <span>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <div className="border border-[#F40F6F] my-3"></div>
                  <div className="flex flex-wrap gap-2 w-10/12">
                    <p className="border border-black hover:border-[#F40F6F] px-2 py-3 w-min rounded-md text-black hover:text-[#F40F6F] hover:cursor-pointer">
                      150ml
                    </p>
                    <p className="border border-black hover:border-[#F40F6F] px-2 py-3 w-min rounded-md text-black hover:text-[#F40F6F] hover:cursor-pointer">
                      200ml
                    </p>
                    <p className="border border-black hover:border-[#F40F6F] px-2 py-3 w-min rounded-md text-black hover:text-[#F40F6F] hover:cursor-pointer">
                      250ml
                    </p>
                    <p className="border border-black hover:border-[#F40F6F] px-2 py-3 w-min rounded-md text-black hover:text-[#F40F6F] hover:cursor-pointer">
                      300ml
                    </p>
                    <p className="border border-black hover:border-[#F40F6F] px-2 py-3 w-min rounded-md text-black hover:text-[#F40F6F] hover:cursor-pointer">
                      500ml
                    </p>
                  </div>
                </div>
                <div className=" mt-11">
                  <div className="flex justify-between items-center text-black text-lg font-medium">
                    <p>SIZE</p>{" "}
                    <span>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <div className="border border-[#F40F6F] my-3"></div>
                  <Slider
        range={{
          draggableTrack: true,
        }}
       defaultValue={[100, 6600]}
        max={10000}
        value={sliderValue} // Set the value prop to display the current values
        onChange={handleSliderChange} // Handle changes to update the state
      />
      <p className="flex items-center">Price:<TbCurrencyTaka/>{sliderValue[0]} <span className="flex items-center ms-6"><TbCurrencyTaka/>{sliderValue[1]}</span></p>

                </div>
                <div className=" mt-11">
             <button className="text-white bg-[#F40F6F] w-full h-[42px]">All Reset</button>
             </div>
        </div>
    );
};

export default SliderMenu;