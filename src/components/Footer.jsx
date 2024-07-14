/* eslint-disable react/prop-types */
import { FaAngleDown } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#f0f0f5] h-[104px] p-3 overflow-hidden">
        <div className="max-w-[1000px] flex flex-row justify-around items-center h-full mx-auto">
          <h1 className="text-sm md:text-2xl md:w-[410px] font-bold text-[#02060cbf]">
            For better experience,download the Swiggy app now
          </h1>
          <div className="flex gap-2 md:gap-5">
            <img
              className="w-[150px] h-[30px] md:h-full md:w-[200px] cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt=""
            />
            <img
              className="w-[150px] h-[30px] md:h-full md:w-[200px] cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#02060c] h-[800px] lg:h-[500px] w-screen overflow-hidden">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-12 h-full w-full text-white">
          <div className="mt-[48px] p-5 md:p-0">
            <div className="flex md:gap-3 text-white">
              <SwiggyLogo className="h-[20px] md:h-full" />
              <h1 className="text-sm md:text-xl font-bold ">Swiggy</h1>
            </div>
            <p className="text-[#ffffff99] text-xs md:text-sm  font-bold mt-3">
              ©2024 Technologies Pvt.Ltd
            </p>
          </div>

          <div className="mt-[48px] p-5 md:p-0">
            <h1 className="text-sm md:text-xl font-bold">Company</h1>
            <ul className="flex text-sm md:text-lg flex-col gap-2 md:gap-3 text-[#ffffff99] font-bold mt-4">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Swiggy One</a>
              </li>
              <li>
                <a href="">Swiggy Instamart</a>
              </li>
              <li>
                <a href="">Swiggy Genie</a>
              </li>
            </ul>
          </div>

          <div className="mt-[48px] p-5 md:p-0">
            <h1 className="text-sm md:text-xl font-bold">Contact us</h1>
            <ul className="flex flex-col text-sm md:text-lg gap-3 text-[#ffffff99] font-bold mt-4">
              <li>
                <a href="">Help & Support</a>
              </li>
              <li>
                <a href="">Partner with us</a>
              </li>
              <li>
                <a href="">Ride with us</a>
              </li>
            </ul>
            <div className="mt-[48px]">
              <h1 className="text-sm md:text-xl font-bold ">Legal</h1>
              <ul className="flex flex-col text-sm md:text-lg gap-3 text-[#ffffff99] font-bold mt-4">
                <li>
                  <a href="">Terms & Conditions </a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Investor Relations</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-[48px] p-5 md:p-0">
            <h1 className="text-sm md:text-xl font-bold">We deliver to:</h1>
            <ul className="flex flex-col text-sm md:text-lg gap-3 text-[#ffffff99] font-bold mt-4">
              <li>
                <a href="">Bangalore</a>
              </li>
              <li>
                <a href="">Gurgaon</a>
              </li>
              <li>
                <a href="">Hyderabad</a>
              </li>
              <li>
                <a href="">Delhi</a>
              </li>
              <li>
                <a href="">Mumbai</a>
              </li>
              <li>
                <a href="">Pune</a>
              </li>
            </ul>
            <button className="mt-[50px] w-28 h-8 flex p-2 items-center border border-[#ffffff0d] text-[#ffffff99] rounded-md">
              589 cities <FaAngleDown className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const SwiggyLogo = ({ className }) => {
  return (
    <svg
      className={className}
      width={21}
      height={32}
      viewBox="0 0 21 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_674_19294)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3819 14.7977C20.5245 13.9563 20.3574 13.3121 19.9261 12.9756C19.2787 12.4711 18.3021 12.1959 15.9859 12.204C14.2724 12.2082 12.4327 12.2167 11.6469 12.2205C11.5739 12.2082 11.3093 12.1181 11.297 11.7938L11.2683 6.64781C11.2683 6.3236 11.5207 6.05694 11.8385 6.05694C12.1559 6.05694 12.412 6.31936 12.412 6.64358C12.412 6.64358 12.4285 9.43839 12.4327 10.4314C12.4327 10.5257 12.4897 10.7513 12.7011 10.8089C14.085 11.1822 21.0778 10.883 20.9639 9.57764C20.3536 4.16496 15.8884 -0.0164585 10.4829 4.87055e-05C8.78164 0.00385807 7.16965 0.426698 5.745 1.16952C2.33815 2.98744 -0.0755529 6.63977 0.00180748 10.8542C0.0546894 13.8374 1.98811 19.1396 3.16037 19.923C3.70173 20.2845 4.40996 20.1491 7.58886 20.1368C9.0298 20.1325 10.3732 20.1325 11.0324 20.1325C11.1016 20.1448 11.4599 20.2312 11.4637 20.5677L11.484 24.4782C11.484 24.8024 11.232 25.0691 10.9142 25.0691C10.5968 25.0691 10.3402 24.8109 10.3402 24.4824C10.3402 24.4824 10.3647 22.9108 10.3609 22.328C10.3609 22.1926 10.3689 21.9585 9.98235 21.7862C8.71622 21.2119 4.60532 21.5729 4.37737 22.2129C4.29191 22.4592 4.75185 23.4073 5.46418 24.6259C7.83331 28.4425 10.1571 31.4176 10.5318 31.8937C10.5563 31.9141 10.5766 31.9348 10.5968 31.9471C10.9104 31.5611 19.1078 22.2747 20.3819 14.7977Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_674_19294"
          x="-9.26002"
          y="-9.26002"
          width="39.4853"
          height="50.4673"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.63001" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_674_19294"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_674_19294"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
