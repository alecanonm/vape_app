import mussblack from "../../assets/mussblack (2).png";
import lostMary from "../../assets/pineappleice-removebg-preview (1).png";
import FrontPage from "../../components/FrontPage/FrontPage";
import fluum from "../../assets/sourApple.png";
const Home = () => {
  return (
    <div className=" max-sm:mt-20">
      <FrontPage
        title={"Muss Marmol 700"}
        img={mussblack}
        width={600}
        height={600}
        bgColor={"bg-black"}
      />
      <FrontPage
        title={"Lost Mary Bm 600"}
        img={lostMary}
        width={450}
        height={450}
        bgColor={" bg-[#CE5A67]"}
      />
      <FrontPage
        title={"Fluum 6000"}
        img={fluum}
        width={150}
        height={150}
        bgColor={" bg-[#1D5D9B]"}
      />
    </div>
  );
};

export default Home;
