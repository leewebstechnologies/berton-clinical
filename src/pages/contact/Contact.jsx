import Footer from "../../components/footer/Footer";
import "./contact.css";
import contact from "../../images/contact.png";

const Contact = () => {
  return (
    <>
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Submit Request</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Take the First Step Toward Clinical Success - Submit your
                  request today to explore how Berton Clinical's customized
                  solutions and proven expertise can propel your clinical
                  development goals across the finish line.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="country" type="text" placeholder="Country" />
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex={0}
                      >
                        <span className="current">Department</span>
                        <ul className="list">
                          <li data-value={1} className="option selected ">
                            Department
                          </li>
                          <li data-value={2} className="option">
                            Cardiac Clinic
                          </li>
                          <li data-value={3} className="option">
                            Neurology
                          </li>
                          <li data-value={4} className="option">
                            Dentistry
                          </li>
                          <li data-value={5} className="option">
                            Gastroenterology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex={0}
                      >
                        <span className="current">Doctor</span>
                        <ul className="list">
                          <li data-value={1} className="option selected ">
                            Doctor
                          </li>
                          <li data-value={2} className="option">
                            Dr. Akther Hossain
                          </li>
                          <li data-value={3} className="option">
                            Dr. Dery Alex
                          </li>
                          <li data-value={4} className="option">
                            Dr. Jovis Karon
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div>
                  </div> */}
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here....."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>( Your message has been sent! )</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="appointment-image">
                <img src={contact} alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6  col-12">
              <div className="subscribe-text ">
                <h6>Sign up for newsletter</h6>
                <p className>
                  Subscribe to our newsletter to get periodical updates.
                </p>
              </div>
            </div>
            <div className="col-lg-6  col-12">
              <div className="subscribe-form ">
                <form
                  action=""
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="EMAIL"
                    placeholder="Your email address"
                    className="common-input"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your email address'"
                    required
                    type="email"
                  />
                  <button className="btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;
