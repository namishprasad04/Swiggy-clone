import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import Menu from "./features/menu/Menu";
import Cart from "./features/Cart/Cart";
import PageNotFound from "./pages/PageNotFound";
import { RestaurantProvider } from "./context/RestaurantContext";
import { CartProvider } from "./context/CartContext";
import SearchPage from "./pages/SearchPage";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu/:title",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return (
    <RestaurantProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </RestaurantProvider>
  );
}

export default App;
