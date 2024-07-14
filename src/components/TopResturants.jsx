/* eslint-disable react/no-unescaped-entities */

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { restaurantApi } from "../../data/resturantApi";
import Card from "./Card";
import { useState } from "react";

export default function TopResturants() {
  const [slide, setSlide] = useState(0);

  function prevSlide() {
    if (slide === 0) {
      setSlide(8);
      return false;
    }
    setSlide(() => slide - 2);
  }
  function nextSlide() {
    if (slide === 8) {
      setSlide(0);
      return false;
    }
    setSlide(() => slide + 2);
  }
  return (
    <div className="container mx-auto mb-[20px] px-3">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Vizag
        </div>
        <div className="flex">
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {restaurantApi.map((restaurant, index,) => (
          <Card key={index} restaurant={restaurant} slide={slide} width="w-full md:w-[290px]"/>
        ))}
      </div>
      <hr className="mt-12 border-[1px]" />
    </div>
  );
}
