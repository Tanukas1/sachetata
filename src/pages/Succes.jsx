import React from "react";
import Layout from "../layout/Layout";

function Succes() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy" src="assets\img\banner.webp" className="img-fluid" alt />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Impact and Success Stories</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="assets\img\ser-8.jpg" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content">
                  <p>
                    Sachetataa Foundation measures its success through the
                    improved quality of life and increased opportunities for
                    children with special needs. Success stories include
                    children achieving academic milestones, increased social
                    interactions, and successful integration into mainstream
                    society.
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

export default Succes;
