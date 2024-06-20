import { Link, Outlet } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                {/* Contact */}
                <ul className="top-link">
                  <li>
                    <Link className="a" to="/about">
                      About
                    </Link>
                    {/* <a href="#">About</a> */}
                  </li>

                  <li>
                    <Link className="a" to="/contact">
                      Contact
                    </Link>
                    {/* <a href="#">Contact</a> */}
                  </li>
                  <li>
                    <Link className="a" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
                {/* End Contact */}
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                {/* Top Contact */}
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone" />
                    +880 1234 56789
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="mailto:support@yourmail.com">
                      support@yourmail.com
                    </a>
                  </li>
                </ul>
                {/* End Top Contact */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    <a href="index.html">
                      <img src="img/logo.png" alt="#" />
                    </a>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <a href="#">Home </a>
                        </li>
                        <li>
                          <a href="#">
                            Solutions <i className="icofont-rounded-down" />
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="index.html">Bioanalytical Lab</a>
                              <a href="index.html">Drug Manufacturing</a>
                              <a href="index.html">
                                Medical Supplies & Logistics
                              </a>
                              <a href="index.html">Staffing Services</a>
                              <a href="index.html">
                                Clinical Research Professional Trainings
                              </a>
                              <a href="index.html">
                                Rescue Research - Save Studies
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Expertise <i className="icofont-rounded-down" />
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="index.html">Neuroscience</a>
                            </li>
                            <li>
                              <a href="index.html">Ophthalmology</a>
                            </li>
                            <li>
                              <a href="index.html">Dermatology</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">About Us </a>
                          <ul className="dropdown">
                            <li>
                              <a href="index.html">Our Strategy</a>
                            </li>
                            <li>
                              <a href="index.html">Corporate Philanthropy</a>
                            </li>
                            <li>
                              <a href="index.html">Locations</a>
                            </li>
                            <li>
                              <a href="index.html">Investigators</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Blog </a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
      <Outlet />
    </>
  );
};
export default Header;
