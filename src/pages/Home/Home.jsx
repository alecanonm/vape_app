import mussblack from "../../assets/mussblack (2).png";
import smoke from "../../assets/somke.png";
import { useState } from "react";
const Home = () => {
  const [matches] = useState(window.matchMedia("(max-width: 900px)").matches);
  return (
    <div className="">
      <section className=" max-xl:flex-col  flex justify-center items-center h-screen  bg-black text-white">
        <div className=" flex flex-col gap-10">
          <h1 className=" uppercase font-bold text-4xl">Muss Marmol 700</h1>
          {!matches && (
            <button className=" uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg  bg-[#7474745d] self-center ">
              Saber mas
            </button>
          )}
        </div>
        <figure>
          <img
            src={smoke}
            alt="smoke"
            width={600}
            className="absolute -translate-x-4 -translate-y-10"
          />
          <img src={mussblack} alt="mussblack" width={600} height={600} />
        </figure>
        {matches && (
          <button className=" uppercase font-semibold p-2 w-64 rounded-lg  bg-[#7474745d]">
            Saber mas
          </button>
        )}
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;
