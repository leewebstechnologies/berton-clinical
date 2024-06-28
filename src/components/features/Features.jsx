import "./features.css";

const Features = () => {
  return (
    <>
      <section className="Feautes section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <br />
                <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Industry leaders with comprehensive submission experience to
                  strategically position your products.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-ambulance-cross" />
                </div>
                <h3>Emergency Help</h3>
                <p>
                  We aim to improve the quality of urgent and emergency care
                  through rigorous objective independent .
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i class="icofont-blood"></i>
                </div>
                <h3>Blood Examination</h3>
                <p>
                  In phlebotomy daily practices, more than 78% of diagnostic
                  blood collection by venipuncture for outpatients is performed
                  on the median cubital vein.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-features last">
                <div className="signle-icon">
                  <i class="icofont-laboratory"></i>
                </div>
                <h3>Medical Treatment</h3>
                <p>
                  We conduct test on clinical specimens to obtain information
                  about the health of a patient to aid in diagnosis, treatment,
                  and prevention of disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
