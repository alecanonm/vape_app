import mussblack from "../../assets/mussblack (2).png";
import lostMary from "../../assets/pineappleice-removebg-preview (1).png";
const Home = () => {
  return (
    <div className="">
      <section className=" max-sm:flex-col  flex justify-center items-center h-screen  bg-black text-white">
        <div className=" flex flex-col gap-10">
          <h1 className=" uppercase font-bold text-4xl text-center">
            Muss Marmol 700
          </h1>
          <button className=" max-sm:hidden uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg  bg-[#7474745d] self-center ">
            Saber mas
          </button>
        </div>
        <figure>
          <img src={mussblack} alt="mussblack" width={600} height={600} />
        </figure>
        <button className=" max-sm:block hidden uppercase font-semibold p-2 w-64 rounded-lg  bg-[#7474745d]">
          Saber mas
        </button>
      </section>
      <section className=" max-sm:flex-col  flex justify-center items-center h-screen  bg-[#a36969] text-white">
        <div className=" flex flex-col gap-10">
          <h1 className=" uppercase font-bold text-4xl text-center">
            Lost Mary Bm 600
          </h1>
          <button className=" max-sm:hidden uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg  bg-[#7474745d] self-center ">
            Saber mas
          </button>
        </div>
        <figure>
          <img src={lostMary} alt="lost mary" width={500} height={500} />
        </figure>
        <button className=" max-sm:block hidden uppercase font-semibold p-2 w-64 rounded-lg  bg-[#7474745d]">
          Saber mas
        </button>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
