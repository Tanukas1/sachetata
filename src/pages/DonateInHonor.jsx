import React, { useState } from "react";
import Layout from "../layout/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DonateInHonor() {
  const [formData, setFormData] = useState({
    citizenship: "Indian Citizen",
    donationType: "Donate Once",
    honoreeName: "",
    relationship: "",
    honoreeEmail: "",
    honoreeMobile: "",
    occasionName: "",
    occasionDate: null,
    fullName: "",
    email: "",
    birthdate: null,
    mobile: "",
    altMobile: "",
    receiveCertificate: false,
    pan: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    preferenceState: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      receiveCertificate: e.target.checked,
    }));
  };

  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img
            loading="lazy"
            src="assets/images/banner/honor.webp"
            className="img-fluid"
            alt=""
          />
        </div>
        <section className="padding pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Donate in Honour of the one you admire</h2>
            </div>
            <div className="row frm">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="bodyTest">
                      <form>
                        <div className="row">
                          <div className="col-12 col-sm-12 mb-2">
                            <h3>Select your citizenship</h3>
                            <div className="d-flex gap-4">
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
                          <div className="col-12 col-sm-12 mb-2">
                            <h3>
                              I want my donation to be dedicated to: In Honour
                              Of
                            </h3>
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <div className="control-group">
                              <label className="control-label">
                                Occasion Date
                              </label>
                              <DatePicker
                                selected={formData.occasionDate}
                                onChange={(date) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    occasionDate: date,
                                  }))
                                }
                                placeholderText="Select Date"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">
                              Occasion Name
                            </label>
                            <input
                              name="occasionName"
                              value={formData.occasionName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Occasion Name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">
                              Honoree Name
                            </label>
                            <input
                              name="honoreeName"
                              value={formData.honoreeName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Honoree Name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">
                              Relationship With
                            </label>
                            <input
                              name="relationship"
                              value={formData.relationship}
                              onChange={handleChange}
                              type="text"
                              placeholder="Relationship With"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">
                              Honoree Email Id
                            </label>
                            <input
                              name="honoreeEmail"
                              value={formData.honoreeEmail}
                              onChange={handleChange}
                              type="email"
                              placeholder="Honoree Email Id"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">
                              Honoree Mobile No.
                            </label>
                            <input
                              name="honoreeMobile"
                              value={formData.honoreeMobile}
                              onChange={handleChange}
                              type="text"
                              placeholder="Honoree Mobile No."
                              className="form-control"
                            />
                          </div>

                          <div className="col-12 col-sm-12 mt-2">
                            <h3>Personal Details</h3>
                          </div>

                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">Full Name</label>
                            <input
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Full Name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">Email</label>
                            <input
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              type="email"
                              placeholder="Email"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">Birthdate</label>
                            <DatePicker
                              selected={formData.birthdate}
                              onChange={(date) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  birthdate: date,
                                }))
                              }
                              placeholderText="Select your birthdate"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">Mobile No.*</label>
                            <input
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              type="text"
                              placeholder="Mobile No.*"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-12 mb-2">
                            <label className="control-label">
                              Alternate Mobile No.
                            </label>
                            <input
                              name="altMobile"
                              value={formData.altMobile}
                              onChange={handleChange}
                              type="text"
                              placeholder="Mobile Number"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-12 mb-2">
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
                                <label className="control-label">Pan Number</label>
                                <input
                                  name="pan"
                                  value={formData.pan}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="Pan Card No."
                                  className="form-control"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="control-label">Address*</label>
                                <input
                                  name="address"
                                  value={formData.address}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="Address"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="control-label">Pin Code*</label>
                                <input
                                  name="pinCode"
                                  value={formData.pinCode}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="Pin Code"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="control-label">City*</label>
                                <input
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="City"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="control-label">State*</label>
                                <input
                                  name="state"
                                  value={formData.state}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="State"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="control-label">
                                  Preference State
                                </label>
                                <input
                                  name="preferenceState"
                                  value={formData.preferenceState}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="State"
                                  className="form-control"
                                />
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

export default DonateInHonor;
