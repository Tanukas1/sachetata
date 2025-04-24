import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Sponsor() {
  const [birthdate, setBirthdate] = useState(null);
  const [formData, setFormData] = useState({
    citizenship: "Indian Citizen",
    donationType: "Donate Once",
    receiveCertificate: false,
  });
  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, receiveCertificate: e.target.checked });
  };

  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img
            loading="lazy"
            src="assets/images/banner/sponsor.webp"
            className="img-fluid"
            alt
          />
        </div>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Sponsor a School Through Your Donation</h2>
            </div>
            <div className="row frm">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="bodyTest">
                      <form className>
                        <div className="row">
                          <div className="col-12 col-sm-12">
                            {/* first name input*/}
                            <h3>Select your citizenship</h3>
                            <div className="d-flex flex-wrap gap-3">
                              {["Indian Citizen", "Foreign National"].map(
                                (type) => (
                                  <div
                                    key={type}
                                    className="form-check form-check-inline"
                                  >
                                    <input
                                      type="radio"
                                      name="citizenship"
                                      value={type}
                                      checked={formData.citizenship === type}
                                      onChange={handleChange}
                                      className="form-check-input"
                                    />
                                    <label className="form-check-label">
                                      {type}
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          <div className="col-12 col-sm-12">
                            <h3 className="mt-3">
                              I want to dedicate my donation in memory of
                              someone
                            </h3>
                          </div>

                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label ">
                                Full Name
                              </label>
                              <div className>
                                <input
                                  id="Full Name"
                                  name="Full Name"
                                  type="text"
                                  autoComplete="Full Name"
                                  placeholder="Full Name"
                                  className="form-control"
                                />
                                <p className="help-block" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            {/* country select */}
                            <div className="control-group">
                              <label className="control-label">Email</label>
                              <div className>
                                <input
                                  id="Email"
                                  name="Email"
                                  type="text"
                                  autoComplete="Email"
                                  placeholder="Email"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            {/* country select */}
                            <div className="control-group">
                              <label className="control-label ">
                                Birthdate
                              </label>
                              <div className>
                                <DatePicker
                                  selected={birthdate}
                                  onChange={(date) => setBirthdate(date)}
                                  placeholderText="Select your birthdate"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            {/* country select */}
                            <div className="control-group">
                              <label className="control-label ">
                                Pan Number
                              </label>
                              <div className>
                                <input
                                  id="Mobile No"
                                  name="Mobile No"
                                  type="text"
                                  autoComplete="Mobile No"
                                  placeholder="Pan card no."
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            {/* country select */}
                            <div className="control-group">
                              <label className="control-label ">
                                Mobile No.*
                              </label>
                              <div className>
                                <input
                                  id="Mobile No"
                                  name="Mobile No"
                                  type="text"
                                  autoComplete="Mobile No"
                                  placeholder="Mobile No.*"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            {/* country select */}
                            <div className="control-group">
                              <label className="control-label ">
                                Alternate Mobile No.
                              </label>
                              <div className>
                                <input
                                  id="Country"
                                  name="Country"
                                  type="text"
                                  autoComplete="Address"
                                  placeholder="Mobile Number"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            {/* Pin Code */}
                            <div className="control-group">
                              <label className="control-label">Pin Code</label>
                              <div className>
                                <input
                                  id="PinCode"
                                  name="PinCode"
                                  type="text"
                                  autoComplete="postal-code"
                                  placeholder="Enter Pin Code"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-sm-6 mb-3">
                            {/* Address */}
                            <div className="control-group">
                              <label className="control-label">Address</label>
                              <div className>
                                <input
                                  id="Address"
                                  name="Address"
                                  type="text"
                                  autoComplete="street-address"
                                  placeholder="Enter Address"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 mb-3">
                            <h4 className="mt-3">
                              <input
                                type="checkbox"
                                checked={formData.receiveCertificate}
                                onChange={handleCheckboxChange}
                              />{" "}
                              I would like to receive 80(G) Certificate
                            </h4>
                          </div>
                          {formData.receiveCertificate && (
                            <>
                              <div className="col-sm-6">
                                {/* country select */}
                                <div className="control-group">
                                  <label className="control-label ">
                                    Pan Number
                                  </label>
                                  <div className>
                                    <input
                                      id="Country"
                                      name="Country"
                                      type="text"
                                      autoComplete="Address"
                                      placeholder="Pan Card No."
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                {/* country select */}
                                <div className="control-group">
                                  <label className="control-label ">
                                    Address*
                                  </label>
                                  <div className>
                                    <input
                                      id="Address"
                                      name="Address"
                                      type="text"
                                      autoComplete="Address"
                                      placeholder="Address"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                {/* country select */}
                                <div className="control-group">
                                  <label className="control-label ">
                                    Pin Code*
                                  </label>
                                  <div className>
                                    <input
                                      id="Pin Code"
                                      name="Pin Code"
                                      type="text"
                                      autoComplete="Pin Code"
                                      placeholder="Pin Code"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                {/* country select */}
                                <div className="control-group">
                                  <label className="control-label ">
                                    City*
                                  </label>
                                  <div className>
                                    <input
                                      id="Country"
                                      name="Country"
                                      type="text"
                                      autoComplete="Address"
                                      placeholder="City"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                {/* country select */}
                                <div className="control-group">
                                  <label className="control-label c">
                                    State*
                                  </label>
                                  <div className>
                                    <input
                                      id="State"
                                      name="State"
                                      type="text"
                                      autoComplete="State"
                                      placeholder="State"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                {/* country select */}
                                <div className="control-group">
                                  <label className="control-label c">
                                    Preference State
                                  </label>
                                  <div className>
                                    <input
                                      id="State"
                                      name="State"
                                      type="text"
                                      autoComplete="State"
                                      placeholder="State"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
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

export default Sponsor;
