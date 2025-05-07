import React, { useState } from "react";
import Layout from "../layout/Layout";

function VerifyDonation() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
    donationAmount: "",
    screenshot: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0] 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img
            loading="lazy"
            src="assets/img/donate-banner.webp"
            className="img-fluid"
            alt=""
          />
        </div>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Verify Donation</h2>
              <span className="heading-border" />
            </div>
            <form>
            <div className="row from">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="bodyTest">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-sm-6 mb-2">
                            {/* First Name input */}
                            <div className="form-group">
                              <label htmlFor="firstName" className="control-label">
                                First Name
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="Full Name"
                                placeholder="First Name"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 mb-2">
                            {/* Email input */}
                            <div className="form-group">
                              <label htmlFor="email" className="control-label">
                                Email
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 mb-2">
                            {/* Contact Number input */}
                            <div className="form-group">
                              <label htmlFor="contactNumber" className="control-label">
                                Contact No
                              </label>
                              <input
                                id="contactNumber"
                                name="contactNumber"
                                type="text"
                                autoComplete="Contact Number"
                                placeholder="Contact Number"
                                className="form-control"
                                value={formData.contactNumber}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 mb-2">
                            {/* Donation Amount input */}
                            <div className="form-group">
                              <label htmlFor="donationAmount" className="control-label">
                                Donation Amount Paid
                              </label>
                              <input
                                id="donationAmount"
                                name="donationAmount"
                                type="text"
                                autoComplete="Donation Amount Paid"
                                placeholder="Donation Amount Paid"
                                className="form-control"
                                value={formData.donationAmount}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 mb-2">
                            {/* Screenshot Upload */}
                            <div className="form-group">
                              <label htmlFor="screenshot" className="control-label">
                                Donation Amount Screenshot (Upload)
                              </label>
                              <input
                                id="screenshot"
                                name="screenshot"
                                type="file"
                                className="form-control"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mt-3 mb-2">
                            {/* Submit Button */}
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
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default VerifyDonation;
