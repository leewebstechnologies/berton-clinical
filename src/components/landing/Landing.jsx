import "./landing.css";
import molecules from "../../videos/molecules.mp4";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <video className="molecules" src={molecules} autoPlay loop muted />
        <h4 className="heading">
          As the world evolves at an unprecedented pace, the forefront of
          innovation lies within the realm of biotechnology. Welcome to a
          journey where science meets possibility, where breakthroughs redefine
          our understanding of life itself. Join us as we navigate the endless
          frontiers of global innovation in biotechnology, shaping the future
          one discovery at a time.
        </h4>
      </div>
    </>
  );
};
export default Landing;
