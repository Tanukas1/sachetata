import React from "react";
import Layout from "../layout/Layout";
import MasonryGallery from "../components/MasonryGallery";

const communityImages = [
  "/assets/images/whatwedogallery/community/1.webp",
  "/assets/images/whatwedogallery/community/2.webp",
  "/assets/images/whatwedogallery/community/3.webp",
  "/assets/images/whatwedogallery/community/4.webp",
  "/assets/images/whatwedogallery/community/5.webp",
  "/assets/images/whatwedogallery/community/6.webp",
  "/assets/images/whatwedogallery/community/7.webp",
  "/assets/images/whatwedogallery/community/8.webp",
  "/assets/images/whatwedogallery/community/9.webp",
  "/assets/images/whatwedogallery/community/10.webp",
  "/assets/images/whatwedogallery/community/11.webp",
  "/assets/images/whatwedogallery/community/12.webp",
  "/assets/images/whatwedogallery/community/13.webp",
  "/assets/images/whatwedogallery/community/14.webp",
  "/assets/images/whatwedogallery/community/15.webp",
  "/assets/images/whatwedogallery/community/16.webp",
];



function Community() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy" src="assets/images/banner/community.webp" className="img-fluid" alt />
        </div>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Community Inclusion</h2>
              <span className="heading-border" />
            </div>
            <div className="row about-wrap">
              <div className="col-md-6 xs-padding">
                <div className="about-image">
                  <img loading="lazy" src="/assets/images/whatwedogallery/community/12.webp" alt="about image" />
                </div>
              </div>
              <div className="col-md-6 xs-padding">
                <div className="about-content px-2">
                  <p>
                    In collaboration with stake holders and institutions, the NGO organizes events and activities that promote the inclusion of individuals with special needs.
                  </p>
                  <p>This not only helps in breaking down societal barriers but also fosters understanding and empathy among community members.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MasonryGallery images={communityImages} title="community Gallery"/>;
      </div>
    </Layout>
  );
}

export default Community;
