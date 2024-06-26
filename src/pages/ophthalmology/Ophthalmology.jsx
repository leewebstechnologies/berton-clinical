import Footer from "../../components/footer/Footer";
import "./ophthalmology.css";
import ophthalmology from "../../images/ophthalmology.jpg";

const Ophthalmology = () => {
  return (
    <>
      <div className="ophthalmology">
        <img src={ophthalmology} alt="ophthalmology" />
      </div>
      <Footer />
    </>
  );
};
export default Ophthalmology;
