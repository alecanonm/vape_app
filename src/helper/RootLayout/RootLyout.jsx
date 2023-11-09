import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" flex-1 bg-black">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
