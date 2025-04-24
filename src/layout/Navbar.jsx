import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="header-section">
      <div className="top-header">
        <div className="container">
          <div className="top-content-wrap row">
            <div className="col-sm-8">
              <ul className="left-info">
                <li>
                  <NavLink to="mailto:sachetataa@gmail.com">
                    <i className="ti-email" />
                    sachetataa@gmail.com
                  </NavLink>
                </li>
                <li>
                  <NavLink to="tel:+918696700555">
                    <i className="ti-mobile" />
                    +91 8696700555
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 d-none d-md-block">
              <ul className="right-info">
                <li>
                  <NavLink
                    to="https://www.facebook.com/share/12BP72emNZm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://youtube.com/@sachetataanehatiwari?si=8lHElwz5jIvyjAHX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-header p-2">
        <div className="container">
          <div className="bottom-content-wrap row align-items-center">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">
                  <img src="assets/images/logo.jpeg" alt="Logo" height="80" />
                </a>

                {/* Mobile Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/about">
                          About-Us
                        </a>
                        <a className="dropdown-item" href="/mission">
                          Mission & Vision
                        </a>
                        <a className="dropdown-item" href="/volunteer">
                          Volunteers
                        </a>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="/gallery">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        What We Do
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/awareness">
                          Awareness Campaigns
                        </a>
                        <a className="dropdown-item" href="/community">
                          Community Inclusion
                        </a>
                        <a
                          className="dropdown-item"
                          href="/early-identification"
                        >
                          Early Identification
                        </a>
                        <a className="dropdown-item" href="/early-intervention">
                          Early Intervention
                        </a>
                        <a className="dropdown-item" href="/empowerment">
                          Empowerment
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        How To Help
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/school">
                          Fundraise With Us
                        </a>
                        <a className="dropdown-item" href="/sponsor">
                          Sponsor a School
                        </a>
                        <a className="dropdown-item" href="/occasional">
                          Occasional
                        </a>
                        <a className="dropdown-item" href="/donate-in-honor">
                          Donate in Honor
                        </a>
                        <a className="dropdown-item" href="/donate-in-memory">
                          Donate in Memory
                        </a>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>

                    {/* Mobile View Donate & Verify Buttons */}
                    <div className="d-block d-lg-none text-center mt-3">
                      <NavLink
                        to="/donate"
                        className="default-btn mr-2 d-block"
                      >
                        Donate Now
                      </NavLink>
                      <NavLink
                        to="/verify-donation"
                        className="default-btn d-block mt-2"
                      >
                        Verify Donation
                      </NavLink>
                    </div>
                  </ul>
                </div>

                {/* Desktop View Donate & Verify Buttons */}
                <div className="d-none d-lg-flex align-items-center">
                  <NavLink to="/donate" className="default-btn">
                    Donate Now
                  </NavLink>
                  <NavLink to="/verify-donation" className="default-btn">
                    Verify Donation
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
