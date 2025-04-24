import React from "react";
import { NavLink } from 'react-router-dom'
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <section className="widget-section padding">
        <div className="container">
          <div className="widget-wrap row">
            <div className="col-md-1">
              <div id="fixed-social">
                <div>
                  <a href="mailto:sachetataa@gmail.com" className="bg-info" target="_blank">
                    <i className="fa fa-envelope" />
                  </a>
                </div>
                <div>
                  <a className="fixed-call" href="tel:+918696700555">
                    <i className="fa fa-phone" />
                  </a>
                </div>
                {/* <div>
                  <a
                    href="https://wa.me/918696700555"
                    className="fixed-gplus"
                    target="_blank"
                  >
                    <i className="fa fa-whatsapp my-float" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget-content">
                <a href="{{url('/')}}">
                  <h2 style={{ color: "#ddd" }}>
                    {" "}
                    Sachetataa <br />{" "}
                    <span
                      className="fs-1"
                      style={{ color: "#f8b864", fontSize: 30 }}
                    >
                      Foundation
                    </span>
                  </h2>
                </a>
                <p>
                Sachetataa Foundation is dedicated to supporting individuals with special needs, focusing on empowerment, stakeholder involvement, and raising awareness about communication disorders and disabilities.
                </p>
                <ul className="social-icon">
                <li>
                    <NavLink to="https://www.facebook.com/share/12BP72emNZm/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://youtube.com/@sachetataanehatiwari?si=8lHElwz5jIvyjAHX" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="widget-content">
                <h3>Recent Activities</h3>
                <ul className="widget-link">
                  <li>
                    <a href="celebration-of-major-days">
                    Celebration of Major Days  {" "}
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="widget-content">
                <h3>Contact Us</h3>
                <ul className="address">
                  <li>
                    <i className="ti-email" />
                    <NavLink to="mailto:sachetataa@gmail.com" className="text-white">
                      sachetataa@gmail.com
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="tel:+918696700555" className="text-white">
                      <i className="ti-mobile" /> +91 8696700555
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 sm-padding">
              <div className="copyright">
                © Copyright © {currentYear} . All right reserved. Made with ❤ by Digital
                Nawab
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
