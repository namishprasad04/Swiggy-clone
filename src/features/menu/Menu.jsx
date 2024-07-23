/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Link, useParams } from "react-router-dom";
import { useEffect} from "react";

import Offer from "../../components/Offer";
import OfferTemplate from "../../components/OfferTemplate";
import Recommended from "./Recommended";
import { useRestaurant } from "../../context/RestaurantContext";



export default function Menu() {
  const { title } = useParams();
  const { restaurant, selectRestaurant } = useRestaurant();

  useEffect(() => {
    selectRestaurant(title);
  }, [title, selectRestaurant]);
  if (!restaurant) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[500px] md:max-w-[800px] mt-[30px] mx-auto">
      <ul className="mb-[35px]">
        <li className="text-[10px] px-3 font-bold text-[#93959f]">
          <Link to="/">Home</Link> / {title}
        </li>
      </ul>
      <h1 className="text-2xl px-3 mb-4 font-bold">{restaurant.title}</h1>

      <OfferTemplate restaurant={restaurant} />
      
      <Offer restaurant={restaurant}/>
      <Recommended restaurant={restaurant}/>
    </div>
  );
}

