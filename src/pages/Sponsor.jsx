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
    fullName: "",
    email: "",
    panNumber: "",
    mobileNo: "",
    alternateMobileNo: "",
    pinCode: "",
    address: "",
    city: "",
    state: "",
    preferenceState: "",
  });

<<<<<<< HEAD

=======
  // Handle Input Change
>>>>>>> 180b520e0e3eaf123690d0fbef5e3f68c32f014f
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Checkbox Change
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, receiveCertificate: e.target.checked });
  };

<<<<<<< HEAD

=======
  // Handle Date Change
>>>>>>> 180b520e0e3eaf123690d0fbef5e3f68c32f014f
  const handleDateChange = (date) => {
    setBirthdate(date);
  };

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
=======
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with an API call to submit data
>>>>>>> 180b520e0e3eaf123690d0fbef5e3f68c32f014f
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
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-12 col-sm-12">
                            {/* Citizenship Selection */}
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

                          {/* Dedicating Donation */}
                          <div className="col-12 col-sm-12">
                            <h3 className="mt-3">
                              I want to dedicate my donation in memory of someone
                            </h3>
                          </div>

                          {/* Full Name */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label ">Full Name</label>
                              <div>
                                <input
                                  name="fullName"
                                  type="text"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  placeholder="Full Name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Email */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Email</label>
                              <div>
                                <input
                                  name="email"
                                  type="text"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Email"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Birthdate */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label ">Birthdate</label>
                              <div>
                                <DatePicker
                                  selected={birthdate}
                                  onChange={handleDateChange}
                                  placeholderText="Select your birthdate"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Pan Number */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label ">Pan Number</label>
                              <div>
                                <input
                                  name="panNumber"
                                  type="text"
                                  value={formData.panNumber}
                                  onChange={handleChange}
                                  placeholder="Pan card no."
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Mobile Number */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label ">Mobile No.*</label>
                              <div>
                                <input
                                  name="mobileNo"
                                  type="text"
                                  value={formData.mobileNo}
                                  onChange={handleChange}
                                  placeholder="Mobile No.*"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Alternate Mobile No. */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label ">Alternate Mobile No.</label>
                              <div>
                                <input
                                  name="alternateMobileNo"
                                  type="text"
                                  value={formData.alternateMobileNo}
                                  onChange={handleChange}
                                  placeholder="Mobile Number"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Pin Code */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Pin Code</label>
                              <div>
                                <input
                                  name="pinCode"
                                  type="text"
                                  value={formData.pinCode}
                                  onChange={handleChange}
                                  placeholder="Enter Pin Code"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Address */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Address</label>
                              <div>
                                <input
                                  name="address"
                                  type="text"
                                  value={formData.address}
                                  onChange={handleChange}
                                  placeholder="Enter Address"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Receive Certificate Checkbox */}
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

                          {/* Conditional Fields for Certificate */}
                          {formData.receiveCertificate && (
                            <>
                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label ">Pan Number</label>
                                  <div>
                                    <input
                                      name="panNumber"
                                      type="text"
                                      value={formData.panNumber}
                                      onChange={handleChange}
                                      placeholder="Pan Card No."
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label ">Address*</label>
                                  <div>
                                    <input
                                      name="address"
                                      type="text"
                                      value={formData.address}
                                      onChange={handleChange}
                                      placeholder="Address"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label ">Pin Code*</label>
                                  <div>
                                    <input
                                      name="pinCode"
                                      type="text"
                                      value={formData.pinCode}
                                      onChange={handleChange}
                                      placeholder="Pin Code"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label ">City*</label>
                                  <div>
                                    <input
                                      name="city"
                                      type="text"
                                      value={formData.city}
                                      onChange={handleChange}
                                      placeholder="City"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label ">State*</label>
                                  <div>
                                    <input
                                      name="state"
                                      type="text"
                                      value={formData.state}
                                      onChange={handleChange}
                                      placeholder="State"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label ">Preference State</label>
                                  <div>
                                    <input
                                      name="preferenceState"
                                      type="text"
                                      value={formData.preferenceState}
                                      onChange={handleChange}
                                      placeholder="Preference State"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* Submit Button */}
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
