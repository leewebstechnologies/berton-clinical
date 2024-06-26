import Footer from "../../components/footer/Footer";
import "./dermatology.css";
import dermatology from "../../images/dermatology.jpg";

const Dermatology = () => {
  return (
    <>
      <div className="dermatology">
        <img src={dermatology} alt="dermatology" />
      </div>
      <Footer />
    </>
  );
};
export default Dermatology;
