/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";

import { categoryDataApi } from "../../data/categoryApi";
import Slider from "./Slider";

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
      <Slider title="What's on your mind?" prevSlide={prevSlide} nextSlide={nextSlide} size="25px"/>

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
