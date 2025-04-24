import React from "react";
import Layout from "../layout/Layout";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HomeGallery from "./HomeGallery";
// import Crausel from "../components/Crausel";


function Home() {
  return (
    <Layout>
      {/* <Crausel/> */}
      <div>
        <div className="header-height"></div>
        <section className="slider-section">
          <OwlCarousel className="owl-theme" style={{
            position: "relative"
          }} items={1} loop nav>
            <div style={{
              position: "relative"
            }}>
              <img loading="lazy"
                src="assets/images/banner/home1.webp"
                alt
                className="slider-img"
                title="#slider-caption-1"
              />
              <div className="overlay"></div>
              <div
                id="slider-caption-1"
                className="nivo-html-caption slider-caption"
              >
                <div className="display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="slider-text">
                        <h5 className="wow cssanimation fadeInBottom">
                          Join Us Today
                        </h5>
                        <h1 className="wow cssanimation leFadeInRight sequence">
                          Better Life for People
                        </h1>
                        <p
                          className="wow cssanimation fadeInTop"
                          data-wow-delay="1s"
                        >
                          Help today because tomorrow you may be the one who
                          needs helping! <br />
                          Forget what you can get and see what you can give.{" "}
                        </p>
                        <a
                          href="/contact"
                          className="default-btn1  wow cssanimation fadeInBottom"
                          data-wow-delay="0.8s"
                        >
                          Join Us
                        </a>
                        <a
                          href="/donate"
                          className="default-btn wow cssanimation fadeInBottom"
                          data-wow-delay="0.8s"
                        >
                          Donate Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative"
            }}>
              <img loading="lazy"
                src="assets/images/banner/home2.webp"
                alt
                className="slider-img"

                title="#slider-caption-2"
              />
              <div className="overlay"></div>
              <div
                id="slider-caption-2"
                className="nivo-html-caption slider-caption"
              >
                <div className="display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="slider-text">
                        <h1
                          className="wow cssanimation fadeInTop"
                          data-wow-delay="1s"
                          data-wow-duration="800ms"
                        >
                          Together we <br />
                          can make a Difference{" "}
                        </h1>
                        <p
                          className="wow cssanimation fadeInBottom"
                          data-wow-delay="1s"
                        >
                          Help today because tomorrow you may be the one who
                          needs helping! <br />
                          Forget what you can get and see what you can give.{" "}
                        </p>
                        <a
                          href="/contact"
                          className="default-btn1 wow cssanimation fadeInBottom"
                          data-wow-delay="0.8s"
                        >
                          Join Us
                        </a>
                        <a
                          href="/donate"
                          className="default-btn wow cssanimation fadeInBottom"
                          data-wow-delay="0.8s"
                        >
                          Donate Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative"
            }}>
              <img loading="lazy"
                src="assets/images/banner/home3.webp"
                alt
                className="slider-img"

                title="#slider-caption-3"
              />
              <div className="overlay"></div>
              <div
                id="slider-caption-3"
                className="nivo-html-caption slider-caption"
              >
                <div className="display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="slider-text">
                        <h5 className="wow cssanimation fadeInBottom">
                          Join Us Today
                        </h5>
                        <h1
                          className="wow cssanimation lePushReleaseFrom sequence"
                          data-wow-delay="1s"
                        >
                          Give a little. Change a lot.
                        </h1>
                        <p
                          className="wow cssanimation fadeInTop"
                          data-wow-delay="1s"
                        >
                          Help today because tomorrow you may be the one who
                          needs helping! <br />
                          Forget what you can get and see what you can give.{" "}
                        </p>
                        <a
                          href="/contact"
                          className="default-btn1 wow cssanimation fadeInBottom"
                          data-wow-delay="0.8s"
                        >
                          Join Us
                        </a>
                        <a
                          href="/donate"
                          className="default-btn wow cssanimation fadeInBottom"
                          data-wow-delay="0.8s"
                        >
                          Donate Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>

        </section>
        <section className="promo-section bd-bottom">
          <div className="promo-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 xs-padding">
                  <div className="promo-content ">
                    <img loading="lazy" src="assets/img/icon-1.png" alt="prmo icon" />
                    <h3>Make a Donation</h3>
                    <p>
                      Support children with special needs and their parents by funding essential resources, therapy, and education. Every donation brings us closer to inclusivity, opportunity, and empowerment.
                    </p>
                    <a href="/contact" className="default-btn text-white">
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 xs-padding">
                  <div className="promo-content">
                    <img loading="lazy" src="assets/img/icon-2.png" alt="prmo icon" />
                    <h3>Fund Raising</h3>
                    <p>
                      Join Sachetataa Foundation in raising funds to provide rehabilitation services to the children with communication disorders and special needs along with their parents. Your generosity fuels their journey to a better future.
                    </p>
                    <a href="/contact" className="default-btn text-white">
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 xs-padding">
                  <div className="promo-content">
                    <img loading="lazy" src="assets/img/icon-3.png" alt="prmo icon" />
                    <h3>Become A Volunteer</h3>
                    <p>
                      Volunteer with Sachetataa Foundation and help children with special needs through education, therapy, and social inclusion. Together, we can build a more inclusive community.
                    </p>
                    <a href="/about" className="default-btn text-white">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-5 padding">
          <div className="container pb-5">
            <div className="section-heading text-center mb-40 mt-5">
              <h2>About Us</h2>
                <span className="heading-border" />
            </div>
            <div className="row">
              <div className="col-md-6 bor ">
                <img loading="lazy"
                  src="assets/images/gallery/g-21.webp"
                  className="img-fluid abt-img shadow-lg"
                  alt
                />
              </div>
              <div className="col-md-6 padding-p">
                <h3 className="text-uppercase" style={{ color: "#f8b864" }}>
                  Sachetataa Foundation
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Sachetataa Foundation which started as a campaign in the year 2002 and registered as a foundation in 2023, stands as a beacon of hope for children with special needs and their parents, striving to create a more inclusive society where every child can thrive regardless of his/her abilities.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Sachetataa Foundation is registered under Societies Act 1860 with the registration no LUC/05947/2023-2024 and is granted exemption under Section 12A & 80G. The Foundation is dedicated to supporting children with special needs, focusing on empowerment, stakeholder involvement, and raising awareness about communication disorders and disabilities .
                </p>
                <p style={{ textAlign: "justify" }}>
                  It has been playing a pivotal role in addressing the unique challenges faced by children especially those from marginalized communities in the realm of social development and inclusivity.
                </p>
                <a href="/about" className="default-btn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="causes-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Programmes and Initiatives</h2>
              <span className="heading-border" />
            </div>
            <div className="causes-wrap row">
              <div className="col-md-4 col-sm-6 col-12 shadow-lg">
                <div className="causes-content">
                  <div className="causes-thumb">
                    <img loading="lazy" src="/assets/images/whatwedogallery/awareness/1.webp" alt="causes" />
                  </div>
                  <div className="causes-details">
                    <h3>Awareness Campaigns</h3>
                    <p>
                      Sachetataa Foundation raises awareness about inclusive society through campaigns in schools, communities, and online platforms, educating stakeholders on communication disorders, their impact, and support systems. {" "}
                    </p>
                    <a href="/awareness" className="default-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 shadow-lg">
                <div className="causes-content">
                  <div className="causes-thumb">
                    <img loading="lazy" src="/assets/images/whatwedogallery/community/4.webp" alt="causes" />
                  </div>
                  <div className="causes-details">
                    <h3>Community Inclusion</h3>
                    <p>
                      In collaboration with stake holders and institutions, the NGO organizes events and activities that promote the inclusion of individuals with special needs. {" "}
                    </p>
                    <a href="/community" className="default-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 shadow-lg">
                <div className="causes-content">
                  <div className="causes-thumb">
                    <img loading="lazy" src="/assets/images/whatwedogallery/identification/1.webp" alt="causes" />
                  </div>
                  <div className="causes-details">
                    <h3>Early Identification</h3>
                    <p>
                      With the aim of early intervention, organisation conducts various screening programmes to early identify disorders among children.
                    </p>
                    <a href="/early-identification" className="default-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 shadow-lg">
                <div className="causes-content">
                  <div className="causes-thumb">
                    <img loading="lazy" src="/assets/images/whatwedogallery/invention/7.webp" alt="causes" />
                  </div>
                  <div className="causes-details">
                    <h3>Early Intervention</h3>
                    <p>
                      The NGO offers a range of therapeutic services such as speech therapy, special education, and behavioral interventions.
                    </p>
                    <a href="/early-intervention" className="default-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 shadow-lg">
                <div className="causes-content">
                  <div className="causes-thumb">
                    <img loading="lazy" src="/assets/images/whatwedogallery/empowerment/7.webp" alt="causes" />
                  </div>
                  <div className="causes-details">
                    <h3>Empowerment</h3>
                    <p>
                      Recognizing the crucial role of parents and caregivers, Sachetataa Foundation conducts workshops and support groups to empower them with the knowledge and skills needed to better understand and cater to the unique needs of their children.
                    </p>
                    <a href="/empowerment" className="default-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 shadow-lg">
                <div className="causes-content">
                  <div className="causes-thumb">
                    <img loading="lazy" src="/assets/images/celebration/autism/2.webp" alt="causes" />
                  </div>
                  <div className="causes-details">
                    <h3>Celebration </h3>
                    <p>
                      The organization celebrates days signifying social cohesion and inclusive society.
                    </p>
                    <a href="/celebration-of-major-days" className="default-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="campaigns-section bd-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 xs-padding">
                <div className="campaigns-wrap">
                  <h4>Future Projects</h4>
                  <h2>Build an Inclusive School</h2>
                  {/* {"{"}
                  {"{"}--{" "} */}
                  <p>
                    Featured Project: "Empowerment Through Education" provides
                    specialized support for children with special needs to
                    thrive academically and socially.
                  </p>
                  {/* {" "}
                  --{"}"}
                  {"}"} */}
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="wow cssanimation fadeInLeft">0%</span>
                    </div>
                  </div>
                  <a href="#" className="default-btn">
                    Donate for School
                  </a>
                </div>
              </div>
              {/* <div className="col-md-6 xs-padding">
                <div className="video-wrap">
                  <img loading="lazy" src="assets/images/gallery/g-8.webp" alt="video" /> 
                  <div className="play">
                    <a
                      className="img-popup"
                      data-autoplay="true"
                      data-vbtype="video"
                      href="https://www.youtube.com/watch?v=_IlLwfC2dNc"
                    >
                      <i className="ti-control-play" />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="team-section bg-grey bd-bottom circle shape padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Meet Our Volunteers</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="team-wrapper row">
              <div className="col-lg-6 sm-padding">
                <div className="team-wrap row">
                  <div className="col-md-6">
                    <div className="team-details">
                      <img loading="lazy" src="assets/images/volunteer/vol-1.webp" alt="team" />
                      <div className="hover">
                        <h3>
                          {" "}
                          Vidhi <span>student</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-details">
                      <img loading="lazy" src="assets/images/volunteer/vol-7.webp" alt="team" />
                      <div className="hover">
                        <h3>
                          {" "}
                          Rahul <span>student</span>{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-details">
                      <img loading="lazy" src="assets/images/volunteer/vol-4.webp" alt="team" />
                      <div className="hover">
                        <h3>
                          Kashi<span>Student</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-details">
                      <img loading="lazy" src="assets/images/volunteer/vol-2.webp" alt="team" />
                      <div className="hover">
                        <h3>
                          {" "}
                          Sujeet Maurya <span>student</span>{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 sm-padding">
                <div className="team-content">
                  <h2>Become a Volunteer?</h2>
                  <h3>
                    Join your hand with us for a better life and beautiful
                    future.
                  </h3>
                  <p>
                    The secret to happiness lies in helping others. Never
                    underestimate the difference YOU can make in the lives of
                    the poor, the abused and the helpless.
                  </p>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check" />
                      We are friendly to each other.
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      If you join with us,We will give you free training.
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Its an opportunity to help poor children.
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      No goal requirements.
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Joining is tottaly free. We dont need any money from you.
                    </li>
                  </ul>
                  <a href="#" className="default-btn">
                    Join With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="events-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Upcoming Event</h2>
              <span className="heading-border" />
            </div>
            <div class="row">
              <div className="col-md-4">
                <div className="event-thumb">
                  <img loading="lazy" src="assets/images/home/upcomingevent/1.webp" alt="events" style={{ width: "100%",height:"200px", objectFit:"cover" }} />
                </div>
                <div className="event-details">
                  <h3>National Rehabilitation Awareness Week (18-24 September, 2025)</h3>
                </div>
              </div>
              <div className="col-md-4">    
                <div className="event-thumb">
                  <img loading="lazy" src="assets/images/home/upcomingevent/2.webp" alt="events" style={{ width: "100%",height:"200px", objectFit:"cover" }} />
                </div>
                <div className="event-details">
                  <h3>Dyslexia awareness month <br/> (October)</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="event-thumb">
                  <img loading="lazy" src="assets/images/home/upcomingevent/3.webp" alt="events" style={{ width: "100%",height:"200px", objectFit:"cover" }} />
                </div>
                <div className="event-details">
                  <h3>International Day of Disabilities <br/> (3rd December)</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="testimonial-section bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>What People Say</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div
              id="testimonial-carousel"
              className="testimonial-carousel owl-carousel"
            >
              <div className="testimonial-item">
                <p>
                  The programs offered by Sachetataa Foundation have made a
                  significant difference in our community. The educational
                  support and advocacy initiatives have helped raise awareness
                  and promote inclusivity.
                </p>
                <div className="testi-footer">
                  <img loading="lazy" src="public/assets/img/vol-1.jpeg" alt="profile" />
                  <h4>Aniket</h4>
                </div>
              </div>
              <div className="testimonial-item">
                <p>
                  Advocacy and awareness campaigns by Sachetataa Foundation are
                  making a difference. Their efforts to influence policies and
                  educate the public about communication disorders are essential
                  steps towards a more inclusive society.
                </p>
                <div className="testi-footer">
                  <img loading="lazy" src="assets/img/vol-2.jpeg" alt="profile" />
                  <h4>Ridhi</h4>
                </div>
              </div>
              <div className="testimonial-item">
                <p>
                  Working with Sachetataa Foundation has been truly inspiring.
                  Their dedication to supporting children with special needs is
                  unmatched, and the impact they have on these children's lives
                  is remarkable environment for all.
                </p>
                <div className="testi-footer">
                  <img loading="lazy" src="assets/img/vol-3.jpeg" alt="profile" />
                  <h4>Priya</h4>
                </div>
              </div>
              <div className="testimonial-item">
                <p>
                  These initiatives are changing lives. The therapeutic services
                  and community inclusion events organized by Sachetataa
                  Foundation have helped bridge gaps and foster understanding
                  among community members.
                </p>
                <div className="testi-footer">
                  <img loading="lazy" src="assets/img/vol-4.jpeg" alt="profile" />
                  <h4>Ashutosh</h4>
                </div>
              </div>
            </div>
          </div>
        </section> */}

         <HomeGallery/>

        {/* <section className="blog-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Recent Stories</h2>
              <span className="heading-border" />
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!{" "}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12 xs-padding">
                <div className="blog-items grid-list row">
                  <div className="col-md-4 padding-15">
                    <div className="blog-post">
                      <img loading="lazy" src="assets/images/gallery/g-27.jpeg" alt="blog post" />
                      <div className="blog-content">
                        <span className="date">
                          <i className="fa fa-clock-o" /> January 01.2021{" "}
                        </span>
                        <h3>
                          <a href="#">The History of Donation Told</a>
                        </h3>
                        <p>
                          The secret to happiness lies in helping others. Never
                          underestimate the difference YOU can make in the lives
                          of the poor, the abused and the helpless.
                        </p>
                        <a href="#" className="default-btn text-white">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 padding-15">
                    <div className="blog-post">
                      <img loading="lazy" src="assets/images/gallery/g-29.jpeg" alt="blog post" />
                      <div className="blog-content">
                        <span className="date">
                          <i className="fa fa-clock-o" /> January 01.2021{" "}
                        </span>
                        <h3>
                          <a href="#">Help the Comunity</a>
                        </h3>
                        <p>
                          The secret to happiness lies in helping others. Never
                          underestimate the difference YOU can make in the lives
                          of the poor, the abused and the helpless.
                        </p>
                        <a href="#" className="default-btn text-white">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 padding-15">
                    <div className="blog-post">
                      <img loading="lazy" src="assets/images/gallery/g-17.jpeg" alt="blog post" />
                      <div className="blog-content">
                        <span className="date">
                          <i className="fa fa-clock-o" /> January 01.2021{" "}
                        </span>
                        <h3>
                          <a href="#">Charity Ever Rule the World?</a>
                        </h3>
                        <p>
                          The secret to happiness lies in helping others. Never
                          underestimate the difference YOU can make in the lives
                          of the poor, the abused and the helpless.
                        </p>
                        <a href="#" className="default-btn text-white">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="pb-5 padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>FAQ</h2>
              <span className="heading-border" />
            </div>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="faq" id="accordion">
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-1"
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          What is Sachetataa Foundation?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-1"
                      className="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Sachetataa Foundation is a non-profit organization
                          dedicated to supporting children with disabilities
                          through specialized educational programs, assistive
                          technologies, and a team of trained professionals. Our
                          mission is to empower these children, foster
                          inclusivity, and raise awareness about their
                          challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="faqHeading-2">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-2"
                          data-aria-expanded="false"
                          data-aria-controls="faqCollapse-2"
                        >
                          {" "}
                          How can I donate to Sachetataa Foundation?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-2"
                      className="collapse"
                      aria-labelledby="faqHeading-2"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          You can donate to Sachetataa Foundation through our
                          website by clicking on the "Donate" button. We also
                          accept donations via bank transfer and check. Your
                          contribution will make a meaningful difference in the
                          lives of children with disabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="faqHeading-3">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-3"
                          data-aria-expanded="false"
                          data-aria-controls="faqCollapse-3"
                        >
                          What kind of educational programs does Sachetataa
                          Foundation offer?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-3"
                      className="collapse"
                      aria-labelledby="faqHeading-3"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Sachetataa Foundation provides specialized educational
                          programs tailored to the diverse needs of children
                          with disabilities. These programs include
                          individualized learning plans, assistive technologies,
                          and a team of professionals skilled in addressing
                          various learning styles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="faqHeading-4">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-4"
                          data-aria-expanded="false"
                          data-aria-controls="faqCollapse-4"
                        >
                          How can I volunteer with Sachetataa Foundation?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-4"
                      className="collapse"
                      aria-labelledby="faqHeading-4"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          If you're interested in volunteering with us, please
                          fill out the volunteer application form on our
                          website. We welcome individuals with various skills
                          and backgrounds to join us in supporting children with
                          disabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="faqHeading-5">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-5"
                          data-aria-expanded="false"
                          data-aria-controls="faqCollapse-5"
                        >
                          Is Sachetataa Foundation a registered organization?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-5"
                      className="collapse"
                      aria-labelledby="faqHeading-5"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Yes, Sachetataa Foundation is a registered non-profit
                          organization. We operate as a trust and are recognized
                          by the government. Our registration number is
                          [LUC/05947/2023-2024].
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="faqHeading-6">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-6"
                          data-aria-expanded="false"
                          data-aria-controls="faqCollapse-6"
                        >
                          What are the eligibility criteria for children to
                          participate in Sachetataa Foundation's programs?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-6"
                      className="collapse"
                      aria-labelledby="faqHeading-6"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Sachetataa Foundation's programs are designed for
                          children with disabilities, including but not limited
                          to physical, cognitive, and developmental
                          disabilities. We welcome children of all ages and
                          backgrounds to participate in our programs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="faqHeading-7">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-7"
                          data-aria-expanded="false"
                          data-aria-controls="faqCollapse-7"
                        >
                          How does Sachetataa Foundation measure its impact?{" "}
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="faqCollapse-7"
                      className="collapse"
                      aria-labelledby="faqHeading-7"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Sachetataa Foundation measures its impact through
                          various metrics, including the progress of children in
                          our programs, feedback from families and caregivers,
                          and the overall improvement in the well-being of
                          children with disabilities. We regularly assess our
                          programs to ensure they are meeting the needs of the
                          community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counter" className="counter-section">
          <div className="container">
            <ul className="row counters">
              <li className="col-md-4 col-sm-6 sm-padding">
                <div className="counter-content">
                  <i className="ti-face-smile" />
                  <h3 className="counter">01</h3>
                  <h4 className="text-white">Donors</h4>
                </div>
              </li>
              <li className="col-md-4 col-sm-6 sm-padding">
                <div className="counter-content">
                  <i className="ti-face-smile" />
                  <h3 className="counter">72</h3>
                  <h4 className="text-white">Volunteers</h4>
                </div>
              </li>
              <li className="col-md-4 col-sm-6 sm-padding">
                <div className="counter-content">
                  <i className="ti-user" />
                  <h3 className="counter">3300</h3>
                  <h4 className="text-white">People Impacted</h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
