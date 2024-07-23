/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Recommended({ restaurant }) {
  const [showMenu, setShowMenu] = useState(true);
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const handleAddToCart = (item, newQuantity) => {
    addToCart(item, newQuantity, restaurant.id, restaurant.title);
  };

  const totalItems = Object.values(cart).reduce(
    (sum, restaurant) =>
      sum +
      Object.values(restaurant.items).reduce(
        (restaurantSum, item) => restaurantSum + item.quantity,
        0
      ),
    0
  );

  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <div className="container mx-auto mt-5 mb-[20px]">
      <div className="flex justify-between px-4 items-center cursor-pointer my-3">
        <h1 className="text-xl font-bold tracking-tight">
          Recommended ({restaurant.recommendedMenu.length})
        </h1>
        {showMenu ? (
          <LiaAngleDownSolid
            className="mr-4"
            size={15}
            onClick={handleShowMenu}
          />
        ) : (
          <LiaAngleUpSolid
            className="mr-4"
            size={15}
            onClick={handleShowMenu}
          />
        )}
      </div>

      {restaurant.recommendedMenu.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          showMenu={showMenu}
          onAddToCart={handleAddToCart}
          quantity={cart[menu.id]?.quantity || 0}
        />
      ))}
      {totalItems > 0 && (
        <div className="fixed max-w-3xl mx-auto bottom-0 left-0 right-0 bg-[#60b246] text-white p-2">
          <div className="mx-auto flex justify-between items-center">
            <span>
              {totalItems} item{totalItems > 1 ? "s" : ""} added
            </span>
            <button
              onClick={handleViewCart}
              className=" text-white font-bold px-4 py-1 rounded"
            >
              View Cart
            </button>
          </div>
        </div>
      )}

      <div className="w-full mt-5 p-2 bg-[#02060C0D]"></div>
      <footer className="bg-[#F1F1F6] w-full mt-5 pb-[140px] md:h-[500px] lg:h-full text-[#93959F]">
        <div className="mx-5">
          <h1 className="py-5 flex items-center gap-5">
            <img
              className="w-16"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
              alt=""
            />
            License No. 10121028000792
          </h1>
          <div className="px-5 h-[1px] bg-[#93959F] mb-5"></div>
          <div>
            <h1 className="text-md font-bold text-[#93959F]">
              {restaurant.title}
            </h1>
            <p>(Outlet:{restaurant.place})</p>
          </div>
          <div className="my-2 flex items-center gap-2">
            <MdLocationOn />
            <h1 className="text-sm tracking-tight">{restaurant.location}</h1>
          </div>
          <div className="px-5 h-[1px] bg-[#93959F] my-5"></div>
        </div>
        <div className="my-5 mx-5">
          <h1 className="text-center text-black text-xs md:text-sm font-bold">
            For better experience, download the Swiggy app now
          </h1>
          <div className="flex justify-center items-center p-5 gap-5">
            <img
              className="w-36"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt=""
            />
            <img
              className="w-36"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
