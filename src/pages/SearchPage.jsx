/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SearchRestaurants } from "../features/Search/SearchRestaurants";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(() => {
    if (!searchQuery) {
      setSearchResults([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const results = SearchRestaurants(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching restaurants:", error);
      setError("An error occurred while searching. Please try again.");
      // Handle error (e.g., show error message to user)
    }
    setIsLoading(false);
  }, [searchQuery]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [handleSearch]);

  return (
    <div className="max-w-[840px] mx-auto my-10">
      <div className="flex justify-between items-center relative mx-5 md:mx-0 outline-none border border-[#282c3f33] py-3">
        <input
          className="w-full outline-none mx-5 placeholder:font-semibold"
          type="text"
          name="search"
          placeholder="Search for restaurants and food"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IoIosSearch
          size={25}
          color="#3e3f44"
          className="absolute right-5"
          onClick={handleSearch}
        />
      </div>

      {isLoading && <p className="mt-4 text-center">Searching...</p>}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {!isLoading && !error && searchResults.length > 0 && (
        <div className="mt-6 mx-5 md:mx-0">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <ul className="divide-y divide-gray-200">
            {searchResults.map((restaurant) => (
              <li key={restaurant.id} className="py-4">
                <Link
                  to={`/menu/${restaurant.source}`}
                  className="flex items-center hover:bg-gray-50"
                >
                  <img
                    src={restaurant.image}
                    alt={restaurant.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {restaurant.title}
                    </h3>
                    <p className="text-sm text-gray-500">{restaurant.name}</p>
                    <p className="text-sm text-gray-500">
                      {restaurant.place} • {restaurant.distance} km
                    </p>
                    <p className="text-sm text-gray-500">
                      ⭐ {restaurant.rating} • {restaurant.minTime}-
                      {restaurant.maxTime} min • ₹{restaurant.DeliveryFee}{" "}
                      delivery fee
                    </p>
                    {restaurant.offer && (
                      <p className="text-sm text-green-600">
                        {restaurant.offer}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isLoading && !error && searchQuery && searchResults.length === 0 && (
        <p className="mt-4 text-center">No results found for "{searchQuery}"</p>
      )}
    </div>
  );
}
