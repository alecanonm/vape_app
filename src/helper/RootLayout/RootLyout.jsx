import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import shoppingCart from "../../assets/shopping-cart.png";
import { useLocation } from "react-router-dom";
const RootLayout = () => {
  const { pathname } = useLocation();

  const showComponent = pathname !== "/login" && pathname !== "/register";

  return (
    <>
      {showComponent && (
        <header>
          <Navbar />
        </header>
      )}
      <main className=" flex-1   place-content-center grid">
        <Outlet />
        {showComponent && (
          <div
            role="button"
            className="fixed  bg-[#619c89] right-5 bottom-6  rounded-full "
          >
            <img
              src={shoppingCart}
              alt="shopping-cart"
              width={30}
              height={30}
              className=" m-4"
            />
          </div>
        )}
      </main>
      <footer className="flex items-center justify-center">
        <h3 className=" font-semibold text-lg">© Take my vape</h3>
      </footer>
    </>
  );
};

export default RootLayout;
