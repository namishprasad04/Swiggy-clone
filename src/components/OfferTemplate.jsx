/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { RxTriangleDown } from "react-icons/rx";


export default function OfferTemplate({restaurant}) {
  return (
    <div className="background w-full h-[210px] rounded-[2rem] p-2">
        <div className="max-w-[770px] mx-auto h-[190px] bg-white border border-1 rounded-3xl">
          <div className="px-4 pt-4 flex items-center gap-1 font-bold">
            <StarRating />
            <p>
              {restaurant.rating} ({restaurant.rating * 2}
              <span className="text-[15px]">K+</span>ratings){" "}
              <span className="text-gray-500">•</span> ₹350 for two
            </p>
          </div>

          <p className="text-orange-500 cursor-pointer font-bold underline px-5 py-[6px] text-[14px] leading-tight">
            {restaurant.name}
          </p>
          <div className="flex items-center gap-3 px-5">
            <div className="flex flex-col items-center">
              <div className="w-[6px] h-[6px] bg-gray-400 rounded-full"></div>
              <div className="w-[2px] h-6 bg-gray-300"></div>
              <div className="w-[6px] h-[6px] bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2 font-bold text-[14px]">
              <p className="flex items-center gap-2">
                Outlet{" "}
                <span className="text-gray-700 font-extralight">
                  {restaurant.place}
                </span>{" "}
                <RxTriangleDown
                  className="cursor-pointer mt-1"
                  color="#f15700"
                />{" "}
              </p>
              <p>
                {restaurant.minTime} - {restaurant.maxTime} mins
              </p>
            </div>
          </div>
          <hr className="my-[14px]" />
          <div className="px-4">
            <div className="flex items-center gap-1">
              <img
                className="w-[20px]"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
                alt=""
              />
              <p className="text-[15px] leading-tight text-[#02060C99] font-bold">
                {restaurant.distance} kms | ₹{restaurant.DeliveryFee} Delivery
                fee will apply
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}


function StarRating(props) {
    return (
      <svg
        className={props.className}
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        role="img"
        aria-hidden="true"
        strokecolor="rgba(2, 6, 12, 0.92)"
        fillcolor="rgba(2, 6, 12, 0.92)"
      >
        <circle
          cx={10}
          cy={10}
          r={9}
          fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
        />
        <path
          d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="StoreRating20_svg__paint0_linear_32982_71567"
            x1={10}
            y1={1}
            x2={10}
            y2={19}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#21973B" />
            <stop offset={1} stopColor="#128540" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  