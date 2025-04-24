import React from "react";
import Layout from "../layout/Layout";

function Teachers() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy" src="assets\img\teacher-banner.webp" className="img-fluid" alt />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Teachers, parents and Caregiver Empowerment.</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="assets\img\ser-2.jpg" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content">
                  <p>
                    Recognizing the crucial role of parents and caregivers,
                    Sachetataa Foundation conducts workshops and support groups
                    to empower them with the knowledge and skills needed to
                    better understand and cater to the unique needs of their
                    children.
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

export default Teachers;
