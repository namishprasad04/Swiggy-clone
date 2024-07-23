import { Link } from "react-router-dom";
import { restaurantApi } from "../../data/resturantApi";
import Card from "./Card";

export default function OnlineDelivery() {
  return (
    <div className="container mx-auto mb-[250px] px-3">
      <div className="flex my-5 items-center justify-between">
        <div className="text-lg md:text-[25px] font-bold">
          Restaurants with online food delivery in Visakhapatnam
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {restaurantApi.map((restaurant, index) => (
          <Link key={index} to={`/menu/${restaurant.source}`}>
            <Card restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
