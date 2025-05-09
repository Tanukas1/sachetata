import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "../layout/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function DonateInHonor() {
  const initialFormData = {
    citizenship: "",
    occasionDate: null,
    occasionName: "",
    honoreeName: "",
    relationshipWithHonoree: "",
    honoreeEmail: "",
    honoreeMobile: "",
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
  const [birthdate, setBirthdate] = useState(null);
  const [occasionDate, setOccasionDate] = useState(null); // Separate state for occasionDate
  const navigate = useNavigate(); // Initialize useNavigate

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
    if (!date) return null;
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
      !occasionDate
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const mobileRegex = /^[0-9]{10,13}$/;
    if (!mobileRegex.test(formData.mobileNumber)) {
      toast.error("Enter a valid Mobile Number (10-13 digits).");
      return;
    }

    if (
      formData.alternateMobileNumber &&
      !mobileRegex.test(formData.alternateMobileNumber)
    ) {
      toast.error(
        "Enter a valid Alternate Mobile Number (10-13 digits) or leave it blank."
      );
      return;
    }

    if (formData.honoreeMobile && !mobileRegex.test(formData.honoreeMobile)) {
      toast.error(
        "Enter a valid Honoree Mobile Number (10-13 digits) or leave it blank."
      );
      return;
    }

    const finalData = {
      ...formData,
      occasionDate: occasionDate ? formatDateOnly(occasionDate) : null,
      birthdate: birthdate ? formatDateOnly(birthdate) : null,
      panNumber: formData.certificateDetails.panCardNumber || "XYZAB5678C",
    };

    try {
      const response = await axios.post(
        "https://sucheta.traficoanalytica.com/api/v1/enquiry/add-in-honour-donation",
        finalData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Donation form submitted successfully!", {
          autoClose: 3000, 
          onClose: () => {
            navigate("/thank-you");
          },
        });
        setFormData(initialFormData);
        setBirthdate(null);
        setOccasionDate(null);
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
                      <form onSubmit={handleSubmit}>
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
                                      required
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
                                selected={occasionDate}
                                onChange={(date) => setOccasionDate(date)}
                                placeholderText="Select Date"
                                className="form-control"
                                required
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
                              required
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">
                              Relationship With
                            </label>
                            <input
                              name="relationshipWithHonoree"
                              value={formData.relationshipWithHonoree}
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
                              pattern="[0-9]{10,13}"
                              maxLength={13}
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ""
                                );
                              }}
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
                              required
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
                              required
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">Birthdate</label>
                            <DatePicker
                              selected={birthdate}
                              onChange={(date) => setBirthdate(date)}
                              placeholderText="Select your birthdate"
                              className="form-control"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <label className="control-label">Mobile No.*</label>
                            <input
                              name="mobileNumber"
                              value={formData.mobileNumber}
                              onChange={handleChange}
                              type="text"
                              placeholder="Mobile No.*"
                              className="form-control"
                              pattern="[0-9]{10,13}"
                              maxLength={13}
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ""
                                );
                              }}
                              required
                            />
                          </div>
                          <div className="col-12 col-sm-12 mb-2">
                            <label className="control-label">
                              Alternate Mobile No.
                            </label>
                            <input
                              name="alternateMobileNumber"
                              value={formData.alternateMobileNumber}
                              onChange={handleChange}
                              type="text"
                              placeholder="Alternate Mobile No."
                              className="form-control"
                              pattern="[0-9]{10,13}"
                              maxLength={13}
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ""
                                );
                              }}
                            />
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default DonateInHonor;