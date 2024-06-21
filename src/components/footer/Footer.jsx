import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer id="footer" className="footer ">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>Berton Clinical's Commitment to Making a Global Impact</p>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-pinterest" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li>
                          <Link to="/">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/bioanalytical">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Bio-analytical Lab
                          </Link>
                        </li>
                        <li>
                          <Link to="/drug">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Drug Manucaturing
                          </Link>
                        </li>
                        <li>
                          <Link to="/medical">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Medical Supplies & Logistics
                          </Link>
                        </li>
                        <li>
                          <Link to="/clinical">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Clinical Research Professional Trainings
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li>
                          <Link to="/rescue">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Rescue Research - Save Studies
                          </Link>
                        </li>
                        <li>
                          <Link to="/neuroscience">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Neuroscience
                          </Link>
                        </li>
                        <li>
                          <Link to="/ophthalmology">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Ophthalmology
                          </Link>
                        </li>
                        <li>
                          <Link to="/dermatology">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Dermatology
                          </Link>
                        </li>
                        <li>
                          <Link to="/strategy">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Our Strategy
                          </Link>
                        </li>
                        <li>
                          <Link to="/corporate">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Corporate Philanthropy
                          </Link>
                        </li>
                        <li>
                          <Link to="/locations">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Locations
                          </Link>
                        </li>
                        <li>
                          <Link to="/investigators">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Investigators
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>

                  <ul className="time-sidual">
                    <li className="day">
                      Monday - Friday <span>8.00-20.00</span>
                    </li>
                    <li className="day">
                      Saturday - Sunday <span>9.00-18.30</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <p>
                    subscribe to our newsletter to get allour news in your
                    inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit,
                  </p>
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="email"
                      placeholder="Email Address"
                      className="common-input"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your email address'"
                      required
                      type="email"
                    />
                    <button className="button">
                      <i className="icofont icofont-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright {year} | All Rights Reserved By Berton Clinical
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
