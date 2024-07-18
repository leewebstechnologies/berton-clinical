import { Link, Outlet } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li>
                    <Link className="a" to="/strategy">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link className="a" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="a" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone" />
                    +234 1234 56789
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="mailto:bertonclinical@gmail.com">
                      bertonclinical@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <a href="index.html">
                      <img src="img/logo.png" alt="#" />
                    </a>
                  </div>
                  <div className="mobile-nav" />
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <a tabIndex="0">
                            Solutions <i className="icofont-rounded-down" />
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/bioanalytical">Bioanalytical Lab</Link>
                              <Link to="/drug">Drug Manufacturing</Link>
                              <Link to="/medical">
                                Medical Supplies & Logistics
                              </Link>
                              <Link to="/staffing">Staffing Services</Link>
                              <Link to="clinical">
                                Clinical Research Professional Trainings
                              </Link>
                              <Link to="rescue">
                                Rescue Research - Save Studies
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a tabIndex="0">
                            Expertise <i className="icofont-rounded-down" />
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="neuroscience">Neuroscience</Link>
                            </li>
                            <li>
                              <Link to="ophthalmology">Ophthalmology</Link>
                            </li>
                            <li>
                              <Link to="dermatology">Dermatology</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/">About Us</Link>
                          <ul className="dropdown">
                            <li>
                              <Link to="strategy">Our Strategy</Link>
                            </li>
                            <li>
                              <Link to="corporate">Corporate Philanthropy</Link>
                            </li>
                            <li>
                              <Link to="locations">Locations</Link>
                            </li>
                            <li>
                              <Link to="investigators">Investigators</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
