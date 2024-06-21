import "./slider.css";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="hero-slider">
          <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider2.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed nisl pellentesque, faucibus libero eu, gravida
                      quam.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed nisl pellentesque, faucibus libero eu, gravida
                      quam.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider3.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can
                      <span>Trust!</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed nisl pellentesque, faucibus libero eu, gravida
                      quam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Slider;
