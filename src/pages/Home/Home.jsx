import mussblack from "../../assets/mussblack (2).png";
import smoke from "../../assets/somke.png";
const Home = () => {
  return (
    <div className="">
      <section className=" max-xl:flex-col  flex justify-center items-center h-screen  bg-black text-white">
        <div className=" flex flex-col">
          <h1 className=" uppercase font-bold text-4xl">Muss Marmol 700</h1>
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
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;
