import Footer from "../../components/footer/Footer";
import "./staffing.css";
import staffing from "../../images/staffing.jpg";

const Staffing = () => {
  return (
    <>
      <div className="staffing">
        <img src={staffing} alt="staffing" />
        <div className="texts">
          <h1>STAFFING SERVICES</h1>
          <h3>
            Elevating Biotech, Pharma, Healthcare, and IT Careers with Precision
            Recruitment
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Staffing;
