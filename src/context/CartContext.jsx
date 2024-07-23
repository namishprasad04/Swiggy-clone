/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (item, newQuantity, restaurantId, restaurantName) => {
    setCart((prevCart) => {
      const restaurantCart = prevCart[restaurantId] || {};
      return {
        ...prevCart,
        [restaurantId]: {
          ...restaurantCart,
          restaurantName,
          items: {
            ...restaurantCart.items,
            [item.id]: {
              ...item,
              quantity: newQuantity,
              image: item.image,
              price: item.defaultPrice || item.price
            },
          },
        },
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const removeRestaurant = (restaurantId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[restaurantId];
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeRestaurant }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);