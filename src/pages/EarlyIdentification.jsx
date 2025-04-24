import React from "react";
import Layout from "../layout/Layout";
import MasonryGallery from "../components/MasonryGallery";


const earlyIdentificationImages = [
    "/assets/images/whatwedogallery/identification/1.webp",
    "/assets/images/whatwedogallery/identification/2.webp",
    "/assets/images/whatwedogallery/identification/3.webp",
    "/assets/images/whatwedogallery/identification/4.webp",
    "/assets/images/whatwedogallery/identification/5.webp",
    "/assets/images/whatwedogallery/identification/6.webp",
    "/assets/images/whatwedogallery/identification/7.webp",
    "/assets/images/whatwedogallery/identification/8.webp",
    // "/assets/images/whatwedogallery/identification/9.webp",
    "/assets/images/whatwedogallery/identification/10.webp",
    "/assets/images/whatwedogallery/identification/11.webp",
    "/assets/images/whatwedogallery/identification/12.webp",
    "/assets/images/whatwedogallery/identification/13.webp",
    "/assets/images/whatwedogallery/identification/14.webp",
    "/assets/images/whatwedogallery/identification/15.webp",
    "/assets/images/whatwedogallery/identification/16.webp",
    "/assets/images/whatwedogallery/identification/17.webp",
    "/assets/images/whatwedogallery/identification/18.webp",
    "/assets/images/whatwedogallery/identification/19.webp",
    "/assets/images/whatwedogallery/identification/20.webp",
    "/assets/images/whatwedogallery/identification/21.webp",
    "/assets/images/whatwedogallery/identification/22.webp",
    "/assets/images/whatwedogallery/identification/23.webp",
    "/assets/images/whatwedogallery/identification/24.webp",
    "/assets/images/whatwedogallery/identification/25.webp",
    "/assets/images/whatwedogallery/identification/26.webp",
    "/assets/images/whatwedogallery/identification/27.webp",
    "/assets/images/whatwedogallery/identification/29.webp",
    "/assets/images/whatwedogallery/identification/30.webp",
    "/assets/images/whatwedogallery/identification/31.webp",
    "/assets/images/whatwedogallery/identification/32.webp",
    "/assets/images/whatwedogallery/identification/33.webp",
    "/assets/images/whatwedogallery/identification/34.webp",
    "/assets/images/whatwedogallery/identification/35.webp",
    "/assets/images/whatwedogallery/identification/36.webp",
    "/assets/images/whatwedogallery/identification/37.webp",
    "/assets/images/whatwedogallery/identification/38.webp",
    "/assets/images/whatwedogallery/identification/39.webp",
    "/assets/images/whatwedogallery/identification/40.webp",
    "/assets/images/whatwedogallery/identification/41.webp",
    "/assets/images/whatwedogallery/identification/42.webp",
    "/assets/images/whatwedogallery/identification/43.webp",
    "/assets/images/whatwedogallery/identification/44.webp",
    "/assets/images/whatwedogallery/identification/45.webp",
    "/assets/images/whatwedogallery/identification/46.webp",
    "/assets/images/whatwedogallery/identification/47.webp",
];


function EarlyIdentification() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy"
            src="assets/images/banner/indentification.webp"
            className="img-fluid"
            alt
          />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Early Identification </h2>
              <span className="heading-border" />
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="/assets/images/whatwedogallery/identification/1.webp" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content px-2">
                  <p>
                     With the aim of early intervention, organisation conducts various screening programmes to early identify disorders among children.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MasonryGallery images={earlyIdentificationImages} title="Event Gallery" />;
      </div>
    </Layout>
  );
}

export default EarlyIdentification;
