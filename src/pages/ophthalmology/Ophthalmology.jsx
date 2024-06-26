import Footer from "../../components/footer/Footer";
import "./ophthalmology.css";
import ophthalmology from "../../images/ophthalmology.jpg";

const Ophthalmology = () => {
  return (
    <>
      <div className="ophthalmology">
        <img src={ophthalmology} alt="ophthalmology" />
        <div className="text">
          <br />
          <h1>Ophthalmology</h1>
          <h3>Advancing Cutting-Edge Ophthalmology Treatments</h3>
        </div>
        <div className="paragraph">
          <p>
            At Berton Clinical, our comprehensive expertise in ophthalmology
            spans the entire spectrum of clinical research, from Phase I through
            Phase IV trials, encompassing a wide range of eye diseases and
            conditions. Our tailored approach to ophthalmic research allows us
            to address the unique challenges and complexities associated with
            each study phase and indication.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Ophthalmology;
