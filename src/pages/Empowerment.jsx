import React from "react";
import Layout from "../layout/Layout";
import MasonryGallery from "../components/MasonryGallery";

const empowermentImages = [
    "/assets/images/whatwedogallery/empowerment/1.webp",
    "/assets/images/whatwedogallery/empowerment/2.webp",
    "/assets/images/whatwedogallery/empowerment/3.webp",
    "/assets/images/whatwedogallery/empowerment/4.webp",
    "/assets/images/whatwedogallery/empowerment/5.webp",
    "/assets/images/whatwedogallery/empowerment/6.webp",
    "/assets/images/whatwedogallery/empowerment/7.webp",
    "/assets/images/whatwedogallery/empowerment/8.webp",
    "/assets/images/whatwedogallery/empowerment/9.webp",
    "/assets/images/whatwedogallery/empowerment/10.webp",
    "/assets/images/whatwedogallery/empowerment/11.webp",
    "/assets/images/whatwedogallery/empowerment/12.webp",
    "/assets/images/whatwedogallery/empowerment/13.webp",
    "/assets/images/whatwedogallery/empowerment/14.webp",
    "/assets/images/whatwedogallery/empowerment/15.webp",
    "/assets/images/whatwedogallery/empowerment/16.webp",
    "/assets/images/whatwedogallery/empowerment/17.webp",
    "/assets/images/whatwedogallery/empowerment/18.webp",
    "/assets/images/whatwedogallery/empowerment/19.webp",
  ];
  

function Empowerment() {
    return (
        <Layout>
            <div>
                <div className="header-height" />
                <div>
                    <img loading="lazy"
                        src="assets/images/banner/empowerment.webp"
                        className="img-fluid"
                        alt
                    />
                </div>
                <section className="about-section bg-grey bd-bottom padding">
                    <div className="container">
                        <div className="section-heading text-center mb-40">
                            <h2>Empowerment</h2>
                            <span className="heading-border" />

                        </div>
                        <div className="row about-wrap">
                            <div className="col-md-6 xs-padding">
                                <div className="about-image">
                                    <img loading="lazy" src="/assets/images/whatwedogallery/empowerment/7.webp" alt="about image" />
                                </div>
                            </div>
                            <div className="col-md-6 xs-padding">
                                <div className="about-content px-2">
                                    <p>
                                        Recognizing the crucial role of parents and caregivers, Sachetataa Foundation conducts workshops and support groups to empower them with the knowledge and skills needed to better understand and cater to the unique needs of their children.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <MasonryGallery images={empowermentImages} title="Empowerment Gallery" />;
            </div>
        </Layout>
    );
}

export default Empowerment;
