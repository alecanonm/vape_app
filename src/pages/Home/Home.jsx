import mussblack from "../../assets/mussblack (2).png";
const Home = () => {
  return (
    <div className="">
      <section className=" max-sm:flex-col  flex justify-center items-center h-screen  bg-black text-white">
        <div className=" flex flex-col gap-10">
          <h1 className=" uppercase font-bold text-4xl text-center">
            Muss Marmol 700
          </h1>
          <button className=" uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg  bg-[#7474745d] self-center ">
            Saber mas
          </button>
        </div>
        <figure>
          <img src={mussblack} alt="mussblack" width={600} height={600} />
        </figure>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;
