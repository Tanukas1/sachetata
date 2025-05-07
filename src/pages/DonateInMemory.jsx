import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DonateInMemory() {
  const [birthdate, setBirthdate] = useState(null);
  const [formData, setFormData] = useState({
    citizenship: "Indian Citizen",
    donationType: "Donate Once",
    honoreeName: "",
    relationship: "",
    occasionName: "",
    occasionDate: "",
    fullName: "",
    email: "",
    mobile: "",
    altMobile: "",
    receiveCertificate: false,
    pan: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    prefState: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            src="assets/images/banner/memory.webp"
            className="img-fluid"
            alt="memory banner"
          />
        </div>
        <section className="padding pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Donate in memory of someone you love</h2>
            </div>
            <div className="row frm">
              <div className="col-xs-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <form>
                      <div className="row">
                        <div className="col-12 col-sm-12 mt-2">
                          <h3>Select your citizenship</h3>
                          <div className="d-flex flex-wrap gap-4">
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

                        <div className="col-12 col-sm-12 mt-2">
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

                        <div className="col-12 col-sm-12 mt-2">
                          <h3>I want my donation to be dedicated to: In Memory Of</h3>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Honoree Name</label>
                          <input
                            name="honoreeName"
                            type="text"
                            placeholder="Honoree Name"
                            className="form-control"
                            value={formData.honoreeName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Relationship With</label>
                          <input
                            name="relationship"
                            type="text"
                            placeholder="Relationship With"
                            className="form-control"
                            value={formData.relationship}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Occasion Name</label>
                          <input
                            name="occasionName"
                            type="text"
                            placeholder="Occasion Name"
                            className="form-control"
                            value={formData.occasionName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Occasion Date</label>
                          <DatePicker
                            selected={formData.occasionDate}
                            onChange={(date) =>
                              setFormData({ ...formData, occasionDate: date })
                            }
                            placeholderText="Select Date"
                            className="form-control"
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Full Name</label>
                          <input
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Birthdate</label>
                          <DatePicker
                            selected={birthdate}
                            onChange={(date) => setBirthdate(date)}
                            placeholderText="Select your birthdate"
                            className="form-control"
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Mobile No.*</label>
                          <input
                            name="mobile"
                            type="text"
                            placeholder="Mobile No."
                            className="form-control"
                            value={formData.mobile}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-12 mb-2">
                          <label>Alternate Mobile No.</label>
                          <input
                            name="altMobile"
                            type="text"
                            placeholder="Alternate Mobile No."
                            className="form-control"
                            value={formData.altMobile}
                            onChange={handleChange}
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
                              <label>Pan Number</label>
                              <input
                                name="pan"
                                type="text"
                                placeholder="Pan Card No."
                                className="form-control"
                                value={formData.pan}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>Address*</label>
                              <input
                                name="address"
                                type="text"
                                placeholder="Address"
                                className="form-control"
                                value={formData.address}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>Pin Code*</label>
                              <input
                                name="pinCode"
                                type="text"
                                placeholder="Pin Code"
                                className="form-control"
                                value={formData.pinCode}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>City*</label>
                              <input
                                name="city"
                                type="text"
                                placeholder="City"
                                className="form-control"
                                value={formData.city}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>State*</label>
                              <input
                                name="state"
                                type="text"
                                placeholder="State"
                                className="form-control"
                                value={formData.state}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>Preference State</label>
                              <input
                                name="prefState"
                                type="text"
                                placeholder="Preference State"
                                className="form-control"
                                value={formData.prefState}
                                onChange={handleChange}
                              />
                            </div>
                          </>
                        )}

                        <div className="col-md-12 mt-3 mb-2">
                          <button className="default-btn" type="submit">
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
        </section>
      </div>
    </Layout>
  );
}

export default DonateInMemory;
