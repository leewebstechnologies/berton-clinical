import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>
                  We Maintain Cleanliness Rules In Our Clinical Research Centre
                </h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  We incorporate new technology into the cleaning and
                  disinfecting process to leverage those innovations to mitigate
                  pathogen transmission.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src="img/pf1.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf2.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf3.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf4.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf1.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf2.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf3.jpg" alt="#" />
                </div>
                <div className="single-pf">
                  <img src="img/pf4.jpg" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
