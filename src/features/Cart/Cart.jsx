import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


export default function Cart() {
  const navigate = useNavigate();
  const { cart, addToCart, removeRestaurant } = useCart();

  function calculateTotal() {
    return Object.values(cart).reduce((total, restaurant) => 
      total + Object.values(restaurant.items).reduce(
        (restaurantTotal, item) => restaurantTotal + item.price * item.quantity,
        0
      ),
      0
    );
  }

  function onUpdateQuantity(restaurantId, itemId, newQuantity) {
    if (newQuantity === 0) {
      onRemoveItem(restaurantId, itemId);
    } else {
      const item = cart[restaurantId].items[itemId];
      addToCart(item, newQuantity, restaurantId, cart[restaurantId].restaurantName);
    }
  }

  function onRemoveItem(restaurantId, itemId) {
    const item = cart[restaurantId].items[itemId];
    addToCart(item, 0, restaurantId, cart[restaurantId].restaurantName);
  }

  const restaurants = Object.entries(cart).filter(([, restaurant]) => 
    Object.values(restaurant.items).some(item => item.quantity > 0)
  );

  if (restaurants.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Add some delicious items to your cart and come back!
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Browse Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mx-auto px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        >
          Back to menu
        </button>

        {restaurants.map(([restaurantId, restaurant]) => (
          <div key={restaurantId} className="mt-4 md:mt-8">
            <h2 className="text-xl font-semibold">
              Your cart from{" "}
              <span className="text-2xl font-bold uppercase">
                {restaurant.restaurantName}
              </span>
            </h2>

            <ul className="mt-3 divide-y divide-stone-200 border-b">
              {Object.values(restaurant.items)
                .filter(item => item.quantity > 0)
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.image}`}
                        alt={item.name}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-sm md:text-md lg:text-lg">{item.name}</h3>
                        <p className="text-gray-600">₹{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <button
                        onClick={() => onUpdateQuantity(restaurantId, item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-green-600  text-white rounded-l"
                      >
                        -
                      </button>
                      <span className="px-2 md:px-4 py-1 bg-gray-100 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(restaurantId, item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-green-600 rounded-r text-white"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(restaurantId, item.id)}
                        className="ml-2 md:ml-4 text-xs text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
              ))}
            </ul>
            <button
              onClick={() => removeRestaurant(restaurantId)}
              className="mt-4 text-red-500 hover:text-red-600"
            >
              Remove all items from this restaurant
            </button>
          </div>
        ))}

        <div className="mt-6">
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>₹{calculateTotal().toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white p-2 py-2 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}