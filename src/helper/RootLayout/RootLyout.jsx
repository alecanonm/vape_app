import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import shoppingCart from "../../assets/shopping-cart.png";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" flex-1 bg-slate-300 -z-10">
        <Outlet />
        <div
          role="button"
          className="fixed  bg-[#619c89] right-5 bottom-6  rounded-full"
        >
          <img
            src={shoppingCart}
            alt="shopping-cart"
            width={30}
            height={30}
            className=" m-4"
          />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
