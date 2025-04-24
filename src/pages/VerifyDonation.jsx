import React from "react";
import Layout from "../layout/Layout";

function VarifyDonation() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img
            loading="lazy"
            src="assets\img\donate-banner.webp"
            className="img-fluid"
            alt
          />
        </div>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Verify Donation</h2>
              <span className="heading-border" />
            </div>
            <div className="row frm">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="bodyTest">
                      <form className>
                        <div className="row">
                          <div className="col-sm-6 mb-2">
                            {/* first name input*/}
                            <div className="form-group">
                              <label
                                htmlFor="firstname"
                                className="control-label"
                              >
                                First Name
                              </label>
                              <div className>
                                <input
                                  id="first-name"
                                  name="name"
                                  type="text"
                                  autoComplete="Full Name"
                                  placeholder="first Name"
                                  className="form-control"
                                />
                                <p className="help-block" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <div className="form-group">
                              <label
                                htmlFor="lastemail"
                                className="control-label"
                              >
                                Email
                              </label>
                              <div className>
                                <input
                                  id="last-name"
                                  name="lastname"
                                  type="email"
                                  autoComplete="email"
                                  placeholder="Email"
                                  className="form-control"
                                />
                                <p className="help-block" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <div className="control-group">
                              <label
                                htmlFor="company"
                                className="control-label "
                              >
                                Contact No
                              </label>
                              <div className>
                                <input
                                  id="company"
                                  name="contact_number"
                                  type="text"
                                  autoComplete="Contact Number"
                                  placeholder="Contact Number"
                                  className="form-control"
                                />
                                <p className="help-block" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <div className="control-group">
                              <label className="control-label">
                                Donation Amount Paid
                              </label>
                              <div className>
                                <input
                                  id="number"
                                  name="Donation Amount Paid"
                                  type="text"
                                  autoComplete="Donation Amount Paid"
                                  placeholder="Donation Amount Paid"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mb-2">
                            <div className="control-group">
                              <label className="control-label">
                                Donation Amount Screenshot (Upload)
                              </label>
                              <div className>
                                <input
                                  id="city"
                                  name="screenshot"
                                  type="file"
                                  autoComplete="Donation Amount Screenshot (Upload)"
                                  placeholder="Donation Amount Screenshot (Upload)"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 mt-3 mb-2">
                            <button
                              id="submit"
                              className="default-btn"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default VarifyDonation;
