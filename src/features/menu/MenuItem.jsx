/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { HiMinus } from "react-icons/hi";
import { ImPlus } from "react-icons/im";

export default function MenuItem({ menu, showMenu, onAddToCart }) {
  const { name, image, description, defaultPrice } = menu;
  const [quantity, setQuantity] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    onAddToCart(menu, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      onAddToCart(menu, quantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(1);
    onAddToCart(menu, 1);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const words = description.split(" ");
    if (words.length <= 20 || showFullDescription) {
      return description;
    }
    return (
      <>
        {words.slice(0, 20).join(" ")} {words[20][0]}...
        <span
          className="text-blue-500 cursor-pointer"
          onClick={toggleDescription}
        >
          more
        </span>
      </>
    );
  };
  return (
    <div
      className={`${
        showMenu ? "flex" : "hidden"
      } mx-4 border-b py-3 md:p-5 justify-between md:gap-5 `}
    >
      <div className=" md:w-full">
        <img
          className="w-3 lg:mb-0 md:w-4 lg:w-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI58alRnr2ZSKu29JFuPeCyqUVFSSZgN8lg&s"
          alt=""
        />
        <h1 className="max-sm:text-xs sm:text-sm md:text-lg tracking-tight font-bold text-[#02060CBF]">
          {name}
        </h1>
        <p className="flex items-center  font-bold gap-[2px]">
          <span className="max-sm:text-xs md:text-md">₹</span>
          {defaultPrice}
          <span className="flex items-center mt-1 max-sm:text-[10px] sm:text-xs font-bold text-[#02060C99]">
            <Deals />
            OFF USE STEALDEAL
          </span>
        </p>
        <p className="md:mt-2 flex items-center">
          <Rating className="mt-1 mr-1" />
          <span className="text-[#116649] font-bold">4.3</span>(20)
        </p>
        <p className="pt-2 font-semibold max-sm:w-[180px] sm:w-[220px] md:w-[480px] leading-tight text-[#02060C99] text-[10px] md:text-sm lg:text-md">
          {renderDescription()}
        </p>
      </div>
      <div className="flex flex-col justify-center px-5 md:px-0 md:gap-5 items-center relative">
        <img
          className="w-[100px] md:w-[180px]"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${image}`}
          alt=""
        />
        {quantity === 0 ? (
          <button
            onClick={handleAdd}
            className="text-[#1ba672] max-sm:w-[100px] sm:w-full md:w-[120px] h-[40px] font-bold text-xl border bg-white rounded-xl absolute bottom-1 tracking-tight"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center justify-between max-sm:w-[100px] sm:w-full md:w-[120px] h-[40px] border bg-white rounded-xl absolute bottom-1">
            <button
              onClick={handleDecrement}
              className="px-3 py-1 text-[#1ba672]"
            >
              <HiMinus size={15} />
            </button>
            <span className="font-bold text-[#1ba672]">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 text-[#1ba672]"
            >
              <ImPlus size={10} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Rating({ className }) {
  return (
    <svg
      width={14}
      height={14}
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fillcolor="#116649"
    >
      <rect width={14} height={14} fill="white" />
      <path
        d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
        fill="#116649"
      />
    </svg>
  );
}

function Deals() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63362 8.39604C1.28368 8.7446 1.28368 9.30972 1.63362 9.65828L6.1293 14.1362C6.47924 14.4848 7.0466 14.4848 7.39654 14.1362L12.9543 8.60038C13.1228 8.43251 13.2173 8.20468 13.2168 7.96728L13.2069 3.49924C13.2058 3.00785 12.8061 2.60977 12.3128 2.60868L7.827 2.5988C7.58866 2.59828 7.35993 2.69235 7.1914 2.86022L1.63362 8.39604ZM10.8177 6.90055C11.3458 6.37452 11.3439 5.51976 10.8134 4.99139C10.283 4.46302 9.4248 4.46113 8.89668 4.98717C8.36856 5.5132 8.37045 6.36796 8.90092 6.89633C9.43138 7.4247 10.2895 7.42659 10.8177 6.90055Z"
        fill="#1BA672"
      />
    </svg>
  );
}
