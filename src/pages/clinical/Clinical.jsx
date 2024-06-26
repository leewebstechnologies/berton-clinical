import Footer from "../../components/footer/Footer";
import "./clinical.css";
import training from "../../images/training.jpg";

const Clinical = () => {
  return (
    <>
      <div className="clinical">
        <img className="training" src={training} alt="training" />
        <div className="texts">
          <br />
          <h1>Clinical Research Professional Trainings</h1>
          <h3>Launch Your Career in Clinical Research</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Clinical;
