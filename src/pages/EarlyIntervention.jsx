import React from "react";
import Layout from "../layout/Layout";
import MasonryGallery from "../components/MasonryGallery";

const inventionImages = [
    "/assets/images/whatwedogallery/invention/1.webp",
    "/assets/images/whatwedogallery/invention/2.webp",
    "/assets/images/whatwedogallery/invention/3.webp",
    "/assets/images/whatwedogallery/invention/4.webp",
    "/assets/images/whatwedogallery/invention/5.webp",
    "/assets/images/whatwedogallery/invention/6.webp",
    "/assets/images/whatwedogallery/invention/7.webp",
    "/assets/images/whatwedogallery/invention/8.webp",
    "/assets/images/whatwedogallery/invention/9.webp",
    "/assets/images/whatwedogallery/invention/10.webp",
    "/assets/images/whatwedogallery/invention/11.webp",
    "/assets/images/whatwedogallery/invention/12.webp",
    "/assets/images/whatwedogallery/invention/13.webp",
    "/assets/images/whatwedogallery/invention/14.webp",
    "/assets/images/whatwedogallery/invention/15.webp",
    "/assets/images/whatwedogallery/invention/16.webp",
    "/assets/images/whatwedogallery/invention/17.webp",
    "/assets/images/whatwedogallery/invention/18.webp",
    "/assets/images/whatwedogallery/invention/19.webp",
    "/assets/images/whatwedogallery/invention/20.webp",
    "/assets/images/whatwedogallery/invention/21.webp",
    "/assets/images/whatwedogallery/invention/22.webp",
    "/assets/images/whatwedogallery/invention/23.webp",
    // "/assets/images/whatwedogallery/invention/24.webp",
    "/assets/images/whatwedogallery/invention/25.webp",
    "/assets/images/whatwedogallery/invention/26.webp",
    // "/assets/images/whatwedogallery/invention/27.webp",
    // "/assets/images/whatwedogallery/invention/28.webp",
    // "/assets/images/whatwedogallery/invention/video28.webm",
    // "/assets/images/whatwedogallery/invention/video29.webm",
  ];
  
function EarlyIntervention() {
    return (
        <Layout>
            <div>
                <div className="header-height" />
                <div>
                    <img loading="lazy"
                        src="assets/images/banner/intervention.webp"
                        className="img-fluid"
                        alt
                    />
                </div>
                <section className="about-section bg-grey bd-bottom padding">
                    <div className="container">
                        <div className="section-heading text-center mb-40">
                            <h2>Early Intervention </h2>
                            <span className="heading-border" />
                        </div>
                        <div className="row about-wrap">
                            <div className="col-md-6 xs-padding">
                                <div className="about-image">
                                    <img loading="lazy" src="/assets/images/whatwedogallery/invention/14.webp" alt="about image" />
                                </div>
                            </div>
                            <div className="col-md-6 xs-padding">
                                <div className="about-content px-2">
                                    <p>
                                        The NGO offers a range of therapeutic services such as speech therapy, special education, and behavioral interventions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <MasonryGallery images={inventionImages} title="Early Invention Gallery" />
            </div>
        </Layout>
    );
}

export default EarlyIntervention;
