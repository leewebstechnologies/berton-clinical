import Facts from "../../components/facts/Facts";
import Features from "../../components/features/Features";
import Schedule from "../../components/schedule/Schedule";
import Slider from "../../components/slider/Slider";
import "./home.css";

const Home = () => {
  return (
    <>
      <Slider />
      <Schedule />
      <Features />
      <Facts />
    </>
  );
};
export default Home;
