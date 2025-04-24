import React from "react";
import Layout from "../layout/Layout";
import MasonryGallery from "../components/MasonryGallery";

const awarenessImages = [
  "/assets/images/whatwedogallery/awareness/1.webp",
  "/assets/images/whatwedogallery/awareness/2.webp",
  "/assets/images/whatwedogallery/awareness/3.webp",
  "/assets/images/whatwedogallery/awareness/4.webp",
  "/assets/images/whatwedogallery/awareness/5.webp",
  "/assets/images/whatwedogallery/awareness/6.webp",
  "/assets/images/whatwedogallery/awareness/7.webp",
  "/assets/images/whatwedogallery/awareness/8.webp",
  "/assets/images/whatwedogallery/awareness/9.webp",
  "/assets/images/whatwedogallery/awareness/10.webp",
  "/assets/images/whatwedogallery/awareness/11.webp",
  // "/assets/images/whatwedogallery/awareness/12.webp",
  "/assets/images/whatwedogallery/awareness/13.webp",
  "/assets/images/whatwedogallery/awareness/14.webp",
  "/assets/images/whatwedogallery/awareness/15.webp",
  "/assets/images/whatwedogallery/awareness/16.webp",
  "/assets/images/whatwedogallery/awareness/17.webp",
  "/assets/images/whatwedogallery/awareness/18.webp",
  "/assets/images/whatwedogallery/awareness/19.webp",
  "/assets/images/whatwedogallery/awareness/20.webp",
  // "/assets/images/whatwedogallery/awareness/21.webp",
  "/assets/images/whatwedogallery/awareness/22.webp",
  "/assets/images/whatwedogallery/awareness/23.webp",
  "/assets/images/whatwedogallery/awareness/24.webp",
  "/assets/images/whatwedogallery/awareness/25.webp",
  "/assets/images/whatwedogallery/awareness/26.webp",
  "/assets/images/whatwedogallery/awareness/27.webp",
  "/assets/images/whatwedogallery/awareness/28.webp",
  "/assets/images/whatwedogallery/awareness/29.webp",
  "/assets/images/whatwedogallery/awareness/30.webp",
  "/assets/images/whatwedogallery/awareness/31.webp",
  "/assets/images/whatwedogallery/awareness/32.webp",
  "/assets/images/whatwedogallery/awareness/33.webp",
  "/assets/images/whatwedogallery/awareness/34.webp",
  "/assets/images/whatwedogallery/awareness/35.webp",
  "/assets/images/whatwedogallery/awareness/36.webp",
  "/assets/images/whatwedogallery/awareness/37.webp",
  "/assets/images/whatwedogallery/awareness/38.webp",
  "/assets/images/whatwedogallery/awareness/39.webp",
  "/assets/images/whatwedogallery/awareness/40.webp",
  "/assets/images/whatwedogallery/awareness/41.webp",
  // "/assets/images/whatwedogallery/awareness/42.webp",
  "/assets/images/whatwedogallery/awareness/43.webp",
  "/assets/images/whatwedogallery/awareness/44.webp",
  "/assets/images/whatwedogallery/awareness/45.webp",
  "/assets/images/whatwedogallery/awareness/46.webp",
  // "/assets/images/whatwedogallery/awareness/47.webp",
  "/assets/images/whatwedogallery/awareness/48.webp",
  // "/assets/images/whatwedogallery/awareness/49.webp",
  "/assets/images/whatwedogallery/awareness/50.webp",
  // "/assets/images/whatwedogallery/awareness/51.webp",
  "/assets/images/whatwedogallery/awareness/52.webp",
  "/assets/images/whatwedogallery/awareness/53.webp",
  "/assets/images/whatwedogallery/awareness/54.webp",
  "/assets/images/whatwedogallery/awareness/55.webp",
  // "/assets/images/whatwedogallery/awareness/video56.webm",
];


function Awareness() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy"
            src="assets/images/banner/awareness.webp"
            className="img-fluid"
            alt
          />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Awareness campaigns</h2>
              <span className="heading-border" />
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="/assets/images/whatwedogallery/awareness/1.webp" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content p-2">
                  <p>
                    Sachetataa Foundation recognizes the importance of raising awareness about inclusive society.
                  </p>
                  <p>The NGO conducts awareness campaigns in schools, communities, and online platforms to educate the stakeholders and public about various communication disorders, their impact, and the available support systems. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MasonryGallery images={awarenessImages} title="Awareness  Gallery" />
      </div>
      
    </Layout>
  );
}

export default Awareness;
