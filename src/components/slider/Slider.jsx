import "./slider.css";
import molecules from "../../videos/molecules.mp4";
import lab from "../../videos/lab.mp4";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="hero-slider">
          <video className="videos" src={molecules} autoPlay loop muted />
          {/* <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider4.jpg")' }}
          > */}
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <p>
                      As the world evolves at an unprecedented pace, the
                      forefront of innovation lies within the realm of
                      biotechnology. Welcome to a journey where science meets
                      possibility, where breakthroughs redefine our
                      understanding of life itself. Join us as we navigate the
                      endless frontiers of global innovation in biotechnology,
                      shaping the future one discovery at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          <video className="videos" src={lab} autoPlay loop muted/>
          {/* <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider5.jpg")' }}
          > */}
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <p>
                      We help the most innovative company transform
                      life-changing ideas and breakthrough science into new
                      medical treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider6.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <p>
                      We help the most innovative company transform
                      life-changing ideas and breakthrough science into new
                      medical treatment.
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
