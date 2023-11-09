import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" flex-1 bg-slate-300">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
