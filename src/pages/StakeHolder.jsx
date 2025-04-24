import React from "react";
import Layout from "../layout/Layout";

function StakeHolder() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy" src="assets\img\collab-banner.webp" className="img-fluid" alt />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Stakeholder Collaborations.</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="assets\img\ser-9.jpg" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content">
                  <p>
                    Collaboration with stakeholders such as schools, healthcare
                    providers, and local businesses is integral to Sachetataa
                    Foundation' strategy. By fostering partnerships, the NGO
                    ensures a holistic approach to support, involving various
                    sectors in the empowerment journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default StakeHolder;
