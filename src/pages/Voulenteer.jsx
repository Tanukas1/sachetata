import React from "react";
import Layout from "../layout/Layout";

function Voulenteer() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img loading="lazy"
            src="assets/images/banner/volunteer.webp"
            className="img-fluid"
            alt
          />
        </div>
        <section className="pt-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Volunteers</h2>
              <span className="heading-border" />
              <p>
                Join our team of dedicated volunteers and make a difference in
                your community! By volunteering with us, you'll have the
                opportunity to contribute your time and skills to meaningful
                projects that positively impact the lives of others. Whether
                you're passionate about education, environmental conservation,
                or social welfare, there's a place for you on our team. Join us
                today and be part of something truly rewarding!
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 aft">
                <img loading="lazy" src="assets\img\vol-13.png" style={{ width: "75%" }} alt />
              </div>
              <div className="col-md-6">
                <form className="frm shadow-lg">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact No"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Gender</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">AGE</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>20+</option>
                      <option>25+</option>
                      <option>30+</option>
                      <option>35+</option>
                      <option>40+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      ADDRESS *
                    </label>
                    <input
                      id="address-line1"
                      name="address-line1"
                      type="text"
                      autoComplete="address-line1"
                      placeholder="address line 1"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section bg-grey bd-bottom padding">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Volunteers at Sachetataa Foundation</h2>
              <span className="heading-border" />
              <p>
                Volunteers at Sachetataa Foundation are the driving force behind
                our mission.
              </p>
            </div>
            <div className="row about-wrap"></div>
            <div className="row">
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
                <div className="col-lg-6 sm-padding ">
                  <div className="team-content p-2">
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
                        Joining is tottaly free. We dont need any money from
                        you.
                      </li>
                    </ul>
                    <a href="/contact" className="default-btn">
                      Join With Us
                    </a>
                  </div>
                </div>
              </div>
              <p className="p-2">
                Our volunteers are the heart and soul of Sachetataa Foundation,
                embodying the spirit of compassion and dedication in every task
                they undertake. From offering a helping hand to organizing
                community events, their unwavering commitment creates a ripple
                effect of positivity in the lives of children with special
                needs. Their selfless contributions inspire us to strive for
                greater impact and inclusivity, making our organization a beacon
                of hope for those we serve.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Voulenteer;
