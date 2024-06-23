import { Link } from "react-router-dom";
import "./call.css";

const Call = () => {
  return (
    <>
      <section class="call-action overlay" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <div class="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque porttitor dictum turpis nec gravida.
                </p>
                <div class="button">
                  <a href="#" class="btn">
                    Contact Now
                  </a>
                  <a href="#" class="btn second">
                    Learn More<i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className="call-action overlay"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque porttitor dictum turpis nec gravida.
                </p>
                <div className="button">
                  <Link to="/contact" className="btn">
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Call;
