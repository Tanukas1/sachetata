import React from "react";
import Layout from "../layout/Layout";

function About() {
  return (
    <Layout>
      <div className="header-height"></div>
      {/* <div className="pager-header"></div> */}
      <section className="about-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center pb-4">
            <h2>About Us</h2>
            <span className="heading-border" />
            <p>
              Sachetataa Foundation, a non-profit trust, supports children with
              disabilities through specialized educational programs.
            </p>
          </div>
          <div className="row about-wrap">
            <div className="col-md-6 xs-padding">
              <div className="about-image">
                <img loading="lazy"
                  src="assets/img/abt-2.jpeg"
                  style={{ height: "24rem" }}
                  alt="about image"
                />
              </div>
            </div>
            <div className="col-md-6 xs-padding">
              <div className="about-content  px-2">
                <p>
                  Sachetataa Foundation is a non-government organization
                  registered as a trust by the registrar of state with the
                  registration no. LUC/05947/2023-2024. "Sachetataa Foundation”
                  is dedicated to supporting children with special needs,
                  focusing on empowerment, stakeholder involvement, and raising
                  awareness about communication disorders. It has been playing a
                  pivotal role in addressing the unique challenges faced by
                  children especially those from marginalized communities in the
                  realm of social development and inclusivity. Sachetataa
                  Foundation stands as a beacon of hope for children with
                  special needs, emphasizing the importance of empowerment,
                  community engagement, and awareness. By addressing
                  communication disorders and advocating for inclusivity, this
                  NGO plays a vital role in creating a more equitable and
                  compassionate society for all.
                </p>
                {/* <a href="#" className="default-btn">
                  More About Us
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counter" className="counter-section">
        <div className="container">
          <ul className="row counters">
            <li className="col-md-4 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-face-smile" />
                <h3 className="counter">01</h3>
                <h4 className="text-white">Donors</h4>
              </div>
            </li>
            <li className="col-md-4 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-face-smile" />
                <h3 className="counter">72</h3>
                <h4 className="text-white">Volunteers</h4>
              </div>
            </li>
            <li className="col-md-4 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-user" />
                <h3 className="counter">3300</h3>
                <h4 className="text-white">People Impacted</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default About;
