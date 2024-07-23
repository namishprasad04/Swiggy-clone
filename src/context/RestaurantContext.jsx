/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';
import { restaurantApi } from '../../data/resturantApi';

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState(null);

  const selectRestaurant = (title) => {
    const selectedRestaurant = restaurantApi.find(
      (rest) => rest.source === title
    );
    setRestaurant(selectedRestaurant);
  };

  return (
    <RestaurantContext.Provider value={{ restaurant, selectRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);