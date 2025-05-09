import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Occasional() {
  const [birthdate, setBirthdate] = useState(null);

  const initialFormData = {
    citizenship: "",
    donationType: "",
    honoreeName: "",
    relationshipWithHonoree: "",
    occasionName: "",
    occasionDate: null, 
    fullName: "",
    email: "",
    birthdate: null,
    mobileNumber: "",
    alternateMobileNumber: "",
    wants80GCertificate: false,
    certificateDetails: {
      panCardNumber: "",
      certificateAddress: "",
      certificatePinCode: "",
      certificateCity: "",
      certificateState: "",
      preferenceState: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      [
        "panCardNumber",
        "certificateAddress",
        "certificatePinCode",
        "certificateCity",
        "certificateState",
        "preferenceState",
      ].includes(name)
    ) {
      setFormData((prev) => ({
        ...prev,
        certificateDetails: {
          ...prev.certificateDetails,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      wants80GCertificate: e.target.checked,
    }));
  };

  const formatDateOnly = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.honoreeName ||
      !formData.occasionDate
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const finalData = {
      ...formData,
      birthdate: formData.birthdate ? formatDateOnly(formData.birthdate) : null,
      occasionDate: formData.occasionDate
        ? formatDateOnly(formData.occasionDate)
        : null,
    };

    try {
      const response = await axios.post(
        "http://sucheta.traficoanalytica.com/api/v1/enquiry/add-special-occasion-donation",
        finalData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Donation form submitted successfully!");
        setFormData(initialFormData);
        setBirthdate(null);
      } else {
        toast.error("Something went wrong while submitting the form.");
      }
    } catch (error) {
      console.error("Axios Error:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "Server error occurred.");
      } else if (error.request) {
        toast.error("No response from server.");
      } else {
        toast.error("Request error: " + error.message);
      }
    }
  };

  return (
    <Layout>
      <ToastContainer />
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
            <form onSubmit={handleSubmit}>
              <div className="row frm">
                <div className="col-xs-12 col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="bodyTest">
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
                              ))}
                            </div>
                          </div>

                          <div className="col-12 col-sm-12">
                            <h3 className="mt-3">Select donation type</h3>
                            <div className="d-flex gap-4">
                              {["Donate Once", "Donate Monthly"].map((type) => (
                                <div
                                  key={type}
                                  className="form-check form-check-inline"
                                >
                                  <input
                                    type="radio"
                                    name="donationType"
                                    value={type}
                                    checked={formData.donationType === type}
                                    onChange={handleChange}
                                    className="form-check-input"
                                  />
                                  <label className="form-check-label">
                                    {type}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-12 col-sm-12">
                            <h3 className="mt-3">
                              I want my donation to be dedicated to: In Memory
                              Of
                            </h3>
                          </div>

                          {/* Honoree Name Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">
                                Honoree Name
                              </label>
                              <input
                                name="honoreeName"
                                type="text"
                                value={formData.honoreeName}
                                onChange={handleChange}
                                placeholder="Honoree Name"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">
                                Relationship with Honoree
                              </label>
                              <input
                                name="relationshipWithHonoree"
                                type="text"
                                value={formData.relationshipWithHonoree}
                                onChange={handleChange}
                                placeholder="Relationship with Honoree"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Occasion Name Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">
                                Occassion Name
                              </label>
                              <input
                                name="occasionName"
                                type="text"
                                value={formData.occasionName}
                                onChange={handleChange}
                                placeholder="Occassion Name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Occasion Date Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">
                                Occassion Date
                              </label>
                              <DatePicker
                                selected={formData.occasionDate}
                                onChange={(date) =>
                                  setFormData({
                                    ...formData,
                                    occasionDate: date,
                                  })
                                }
                                placeholderText="Select Occassion Date"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Full Name Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Full Name</label>
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

                          {/* Email Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Email</label>
                              <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Birthdate Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">Birthdate</label>
                              <DatePicker
                                selected={formData.birthdate}
                                onChange={(date) =>
                                  setFormData({ ...formData, birthdate: date })
                                }
                                placeholderText="Select Your Birthdate"
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Mobile Number Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">
                                Mobile Number
                              </label>
                              <input
                                name="mobileNumber"
                                type="tel"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="form-control"
                                pattern="^[0-9]{10,13}$"
                                minLength={10}
                                maxLength={13}
                                required
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(
                                    /[^0-9]/g,
                                    ""
                                  );
                                }}
                              />
                            </div>
                          </div>

                          {/* Alternate Mobile Number Input */}
                          <div className="col-12 col-sm-6 mb-3">
                            <div className="control-group">
                              <label className="control-label">
                                Alternate Mobile Number (Optional)
                              </label>
                              <input
                                name="alternateMobileNumber"
                                type="tel"
                                value={formData.alternateMobileNumber}
                                onChange={handleChange}
                                placeholder="Alternate Mobile Number"
                                className="form-control"
                                pattern="^[0-9]{10,13}$"
                                minLength={10}
                                maxLength={13}
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(
                                    /[^0-9]/g,
                                    ""
                                  );
                                }}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 mb-2">
                            <h4 className="mt-3">
                              <input
                                type="checkbox"
                                checked={formData.wants80GCertificate}
                                onChange={handleCheckboxChange}
                              />{" "}
                              I would like to receive 80(G) Certificate
                            </h4>
                          </div>

                          {formData.wants80GCertificate && (
                            <>
                              <div className="col-sm-6">
                                <label>Pan Number</label>
                                <input
                                  name="panCardNumber"
                                  type="text"
                                  placeholder="Pan Card No."
                                  className="form-control"
                                  value={
                                    formData.certificateDetails.panCardNumber
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="col-sm-6">
                                <label>Address*</label>
                                <input
                                  name="certificateAddress"
                                  type="text"
                                  placeholder="Address"
                                  className="form-control"
                                  value={
                                    formData.certificateDetails
                                      .certificateAddress
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="col-sm-6">
                                <label>Pin Code*</label>
                                <input
                                  name="certificatePinCode"
                                  type="text"
                                  placeholder="Pin Code"
                                  className="form-control"
                                  value={
                                    formData.certificateDetails
                                      .certificatePinCode
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="col-sm-6">
                                <label>City*</label>
                                <input
                                  name="certificateCity"
                                  type="text"
                                  placeholder="City"
                                  className="form-control"
                                  value={
                                    formData.certificateDetails.certificateCity
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="col-sm-6">
                                <label>State*</label>
                                <input
                                  name="certificateState"
                                  type="text"
                                  placeholder="State"
                                  className="form-control"
                                  value={
                                    formData.certificateDetails.certificateState
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="col-sm-6">
                                <label>Preference State</label>
                                <input
                                  name="preferenceState"
                                  type="text"
                                  placeholder="Preference State"
                                  className="form-control"
                                  value={
                                    formData.certificateDetails.preferenceState
                                  }
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

export default Occasional;
