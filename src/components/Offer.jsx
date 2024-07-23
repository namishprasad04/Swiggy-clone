/* eslint-disable react/prop-types */

import { useState } from 'react';
import { GiButterflyFlower } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'
import Slider from './Slider';

export default function Offer({restaurant}) {
    const [slide, setSlide] = useState(0);
  function prevSlide() {
    if (slide === 0) {
      setSlide(2);
      return false;
    }
    setSlide(() => slide - 1);
  }
  function nextSlide() {
    if (slide === 2) {
      setSlide(0);
      return false;
    }
    setSlide(() => slide + 1);
  }
  return (
    <div className="container mx-auto px-5">
        <Slider
          title="Deals for you"
          size={"25px"}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
        <div className="flex w-full gap-5 overflow-hidden">
          {restaurant.deals.map((deal) => (
            <div
              key={deal.id}
              className="duration-500 border rounded-[28px]"
              style={{
                transform: `translate(-${slide * 100}%)`,
              }}
            >
              <div className="flex w-[330px] p-3 items-center gap-3">
                <img className="w-[50px]" src={deal.image} alt="" />
                <div className="leading-tight">
                  <h1 className="font-bold">
                    {deal.offerPercent}% Off Upto ₹{deal.maxOfferPrice}
                  </h1>
                  <p className="text-[#02060C73] font-semibold">
                    USE {deal.couponCode}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 mb-5">
          <div className="flex items-center w-[100px] mx-auto gap-2">
            <GiButterflyFlower />
            <h1 className="font-bold tracking-wider text-[#02060C73]">MENU</h1>
            <GiButterflyFlower className="scale-x-[-1]" />
          </div>
        </div>
        <button className="w-full flex items-center justify-center h-[50px] bg-[#02060C0D] rounded-xl mb-5 relative">
          <h1 className="font-bold text-[#02060C73]">Search for dishes</h1>
          <IoIosSearch
            size={22}
            color="#02060C73"
            className="absolute top-4 right-3"
          />
        </button>

        <div className=" border"></div>
      </div>
  )
}
