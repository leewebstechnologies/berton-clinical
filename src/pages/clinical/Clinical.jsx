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
        <div className="paragraph">
          <p>
            Welcome to Berton Academy, where we specialize in offering
            comprehensive training programs meticulously crafted to equip you
            with the skills and knowledge necessary for a successful and
            fulfilling career in clinical research. <br /> Our programs are
            meticulously designed to cover all aspects of the clinical research
            field, including regulatory compliance, protocol design, data
            management, and ethical considerations. Led by industry experts with
            years of practical experience, our courses provide hands-on training
            and real-world insights that prepare you to excel in this dynamic
            and rapidly evolving industry. <br /> One of the key advantages of
            enrolling at Berton Academy is our extensive network of industry
            connections. We serve as your gateway to the vibrant ecosystem of
            clinical research professionals, providing unparalleled
            opportunities for networking, mentorship, and career advancement.
            Through our connections with leading pharmaceutical companies,
            research organizations, and regulatory agencies, we ensure that our
            students have access to the latest trends, best practices, and job
            opportunities in the field.
            <br /> At Berton Academy, we understand the value of collaboration
            and growth within the clinical research community. Our programs not
            only focus on individual skill development but also foster a
            collaborative learning environment where students can exchange
            ideas, share experiences, and build professional relationships that
            last a lifetime.
            <br /> Whether you're looking to launch your career in clinical
            research or advance to the next level, Berton Academy is here to
            support your journey every step of the way. Join us and discover the
            countless opportunities awaiting you in the exciting world of
            clinical research.
          </p>
          <br />
          <h4>Discover the Possibilities If You're</h4>
          <ul style={{ listStyleType: "disc;" }}>
            <li>Registered Nurse</li>
            <li>College Graduat</li>
            <li>Non-Medical Professional</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Clinical;
