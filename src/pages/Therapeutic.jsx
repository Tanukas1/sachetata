import React from "react";
import Layout from "../layout/Layout";

function Therapeutic() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy"
            src="assets\img\Therapeutic-banner.webp"
            className="img-fluid"
            alt
          />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Therapeutic Services.</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="assets\img\ser-3.jpg" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content">
                  <p>
                    Sachetataa Foundation is a non-government organization
                    registered as a trust by The NGO offers a range of
                    therapeutic services such as speech therapy, special
                    education, and behavioral interventions. These services aim
                    to enhance the overall well-being of the children and assist
                    them in developing essential life skills.
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

export default Therapeutic;
