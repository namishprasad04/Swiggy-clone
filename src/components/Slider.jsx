/* eslint-disable react/prop-types */

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Slider({title,prevSlide,nextSlide,size}) {
    
  return (

        <div className="flex my-5 items-center justify-between">
            <h1 className={`text-lg md:text-[${size}] font-bold px-2`}>{title}</h1>
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
  )
}
