import mussblack from "../../assets/mussblack (2).png";
import lostMary from "../../assets/pineappleice-removebg-preview (1).png";
import FrontPage from "../../components/FrontPage/FrontPage";
const Home = () => {
  return (
    <div className="">
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
        bgColor={" bg-[#d12b59]"}
      />
    </div>
  );
};

export default Home;
