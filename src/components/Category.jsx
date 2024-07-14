/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { categoryDataApi } from "../../data/categoryApi";

export default function Category() {
  const [categories, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  function prevSlide() {
    if (slide === 0){
        setSlide(12);
         return false;
    }
    setSlide(() => slide - 3);
}
function nextSlide() {
    if (slide === 12){
        setSlide(0);
        return false;
    }
    setSlide(() => slide + 3);
  }

  useEffect(() => {
    setCategory(categoryDataApi);
  }, []);

  return (
    <div className="container mx-auto px-3">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold px-2">What's on your mind?</div>
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

      {/* category section */}

      <div className="flex overflow-hidden">
        {categories.map(({ image, name }, index) => (
          <div
            key={index}
            className="w-[100px] md:w-[150px] flex-grow shrink-0 duration-500"
            style={{
              transform: `translate(-${slide * 100}%)`,
            }}
          >
            <img src={image} alt={name} />
          </div>
        ))}
      </div>
      <hr className="my-8 border-[1px]" />
    </div>
  );
}
