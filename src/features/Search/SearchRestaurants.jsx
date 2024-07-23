import { restaurantApi } from "../../../data/resturantApi";

export function SearchRestaurants(query) {
  const normalizedQuery = query.toLowerCase().trim();

  return restaurantApi.filter((restaurant) => {
    // Search in restaurant name
    if (restaurant.title.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Search in cuisine types
    if (restaurant.name.toLowerCase().includes(normalizedQuery)) {
        return true;
      }
    if (restaurant.place.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Search in menu items
    if (restaurant.recommendedMenu && restaurant.recommendedMenu.some(item => 
        item.name.toLowerCase().includes(normalizedQuery) ||
        (item.description && item.description.toLowerCase().includes(normalizedQuery))
      )) {
        return true;
      }

    return false;
  });
}
