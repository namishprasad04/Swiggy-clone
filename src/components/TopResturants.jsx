/* eslint-disable react/no-unescaped-entities */

import { restaurantApi } from "../../data/resturantApi";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

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
      <Slider prevSlide={prevSlide} nextSlide={nextSlide} title="Top restaurant chains in Vizag" size={"25px"}/> 
      <div className="flex gap-5 overflow-hidden">
        {restaurantApi.map((restaurant) => (
          <Link key={restaurant.id} to={`/menu/${restaurant.source}`}>
            <Card restaurant={restaurant} slide={slide} width="w-[350px] md:w-[275px] lg:w-[290px]"/>
          </Link>
        ))}
      </div>
      <hr className="mt-12 border-[1px]" />
    </div>
  );
}
