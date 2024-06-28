import Clients from "../../components/clients/Clients";
import Facts from "../../components/facts/Facts";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Landing from "../../components/landing/Landing";
import Portfolio from "../../components/portfolio/Portfolio";
import Schedule from "../../components/schedule/Schedule";
// import Slider from "../../components/slider/Slider";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* <Slider /> */}
      <Landing />

      <Features />
      <Facts />
      <Portfolio />
      <Clients />
      <Schedule />
      <Footer />
    </>
  );
};
export default Home;
