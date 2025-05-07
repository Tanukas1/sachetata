import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Occasional() {
  const [birthdate, setBirthdate] = useState(null);
  const [formData, setFormData] = useState({
    citizenship: "Indian Citizen",
    donationType: "Donate Once",
    honoreeName: "",
    relationship: "",
    occasionName: "",
    occasionDate: "",
    birthday: "", // Added birthday field here
    receiveCertificate: false,
    fullName: "",
    email: "",
    mobileNo: "",
    alternateMobileNo: "",
    panNumber: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    preferenceState: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, receiveCertificate: e.target.checked });
  };

  const handleDateChange = (date) => {
    setBirthdate(date);
    setFormData({ ...formData, occasionDate: date });
  };

  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img
            loading="lazy"
            src="assets/images/banner/occasional.webp"
            className="img-fluid"
            alt="Occasional Donation"
          />
        </div>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Donate For A Special Occasion</h2>
            </div>
            <div className="row frm">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="bodyTest">
                      <form>
                        <div className="row">
                          <div className="col-12 col-sm-12">
                            {/* Citizenship Input */}
                            <h3>Select your citizenship</h3>
                            <div className="d-flex flex-wrap gap-3">
                              {[
                                "Indian Citizen",
                                "Indian Citizen (NRE, NRI, NRO)",
                                "Foreign National",
                              ].map((type) => (
                                <div key={type} className="form-check form-check-inline">
                                  <input
                                    type="radio"
                                    name="citizenship"
                                    value={type}
                                    checked={formData.citizenship === type}
                                    onChange={handleChange}
                                    className="form-check-input"
                                  />
                                  <label className="form-check-label">{type}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <h3 className="mt-3">Select donation type</h3>
                            <div className="d-flex gap-4">
                              {["Donate Once", "Donate Monthly"].map((type) => (
                                <div key={type} className="form-check form-check-inline">
                                  <input
                                    type="radio"
                                    name="donationType"
                                    value={type}
                                    checked={formData.donationType === type}
                                    onChange={handleChange}
                                    className="form-check-input"
                                  />
                                  <label className="form-check-label">{type}</label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-12 col-sm-12">
                            <h3 className="mt-3">
                              I want my donation to be dedicated to: In Memory Of
                            </h3>
                          </div>

                          {/* Honoree Name Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Honoree Name</label>
                              <input
                                id="honoreeName"
                                name="honoreeName"
                                type="text"
                                value={formData.honoreeName}
                                onChange={handleChange}
                                placeholder="Honoree Name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Relationship With Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Relationship With</label>
                              <input
                                id="relationship"
                                name="relationship"
                                type="text"
                                value={formData.relationship}
                                onChange={handleChange}
                                placeholder="Relationship With"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Occasion Name Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Occasion Name</label>
                              <input
                                id="occasionName"
                                name="occasionName"
                                type="text"
                                value={formData.occasionName}
                                onChange={handleChange}
                                placeholder="Occasion Name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Occasion Date Picker */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Occasion Date</label>
                              <DatePicker
                                selected={birthdate}
                                onChange={handleDateChange}
                                placeholderText="Select Date"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Full Name Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Full Name</label>
                              <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Email Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Email</label>
                              <input
                                id="email"
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Birthday Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Birthday</label>
                              <DatePicker
                                selected={formData.birthday}
                                onChange={(date) => setFormData({ ...formData, birthday: date })}
                                placeholderText="Select Birthday"
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* Mobile No. Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Mobile No.*</label>
                              <input
                                id="mobileNo"
                                name="mobileNo"
                                type="text"
                                value={formData.mobileNo}
                                onChange={handleChange}
                                placeholder="Mobile No.*"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Alternate Mobile No. Input */}
                          <div className="col-12 col-sm-12 mb-3">
                            <div className="control-group">
                              <label className="control-label">Alternate Mobile No.</label>
                              <input
                                id="alternateMobileNo"
                                name="alternateMobileNo"
                                type="text"
                                value={formData.alternateMobileNo}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Certificate Checkbox */}
                          <div className="col-12 col-sm-12 mb-3">
                            <h4 className="mt-3">
                              <input
                                type="checkbox"
                                checked={formData.receiveCertificate}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                              />
                               I would like to receive 80(G) Certificate
                            </h4>
                          </div>

                          {formData.receiveCertificate && (
                            <>
                              {/* Pan Number Input */}
                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label">Pan Number</label>
                                  <input
                                    id="panNumber"
                                    name="panNumber"
                                    type="text"
                                    value={formData.panNumber}
                                    onChange={handleChange}
                                    placeholder="Pan Card No."
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Address Input */}
                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label">Address*</label>
                                  <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Pin Code Input */}
                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label">Pin Code*</label>
                                  <input
                                    id="pinCode"
                                    name="pinCode"
                                    type="text"
                                    value={formData.pinCode}
                                    onChange={handleChange}
                                    placeholder="Pin Code"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* City Input */}
                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label">City*</label>
                                  <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* State Input */}
                              <div className="col-sm-6">
                                <div className="control-group">
                                  <label className="control-label">State*</label>
                                  <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="form-control"
                                  />
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
                            <button id="submit" className="default-btn" type="submit">
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

export default Occasional;
