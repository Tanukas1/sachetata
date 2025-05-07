import React from "react";
import Layout from "../layout/Layout";

function Advocacy() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div className="pager-header">
          <div className="container">
            <div className="page-content">
              <h2>About Us </h2>
              <p>
                Help today because tomorrow you may be the one who <br />
                needs more helping!
              </p>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Advocacy and Policy Influence.</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="assets\img\ser-5.jpg" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content">
                  <p>
                    Sachetataa Foundation actively engages in advocacy efforts
                    to influence policies that promote inclusivity and
                    accessibility. The organization collaborates with government
                    bodies and other stakeholders to create an environment that
                    supports the rights of children with special needs.
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

export default Advocacy;
