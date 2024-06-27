import Footer from "../../components/footer/Footer";
import "./locations.css";
import location from "../../images/location.jpg";

const Locations = () => {
  return (
    <>
      <div className="locations">
        <img src={location} alt="" />
      </div>
      <Footer />
    </>
  );
};
export default Locations;
