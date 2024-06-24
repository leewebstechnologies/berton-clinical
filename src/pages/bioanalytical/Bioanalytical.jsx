import Footer from "../../components/footer/Footer";
import "./bioanalytical.css";

const Bioanalytical = () => {
  return (
    <>
      <div
        className="single-slider"
        style={{ backgroundImage: 'url("img/bio.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text">
                <p>
                  As the world evolves at an unprecedented pace, the forefront
                  of innovation lies within the realm of biotechnology. Welcome
                  to a journey where science meets possibility, where
                  breakthroughs redefine our understanding of life itself. Join
                  us as we navigate the endless frontiers of global innovation
                  in biotechnology, shaping the future one discovery at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Bioanalytical;
