import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "../layout/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Donate() {
  const [birthdate, setBirthdate] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    citizenship: "",
    donationType: "",
    fullName: "",
    email: "",
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

    if (!formData.fullName || !formData.email || !formData.mobileNumber) {
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

    const finalData = {
      ...formData,
      birthdate: birthdate ? formatDateOnly(birthdate) : null,
      panNumber: "XYZAB5678C",
    };

    try {
      const response = await axios.post(
        "https://sucheta.traficoanalytica.com/api/v1/enquiry/add-dedicate-donation",
        finalData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Donation form submitted successfully!", {
          onClose: () => {
            navigate("/thank-you");
          },
        });
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
      <div className="header-height" />
      <div>
        <img
          loading="lazy"
          src="assets/img/donate-banner.webp"
          className="img-fluid"
          alt="Donate Banner"
        />
      </div>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>Online Donations</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row frm">
              {/* Citizenship */}
              <div className="col-sm-12 mt-2">
                <h3>Select your citizenship</h3>
                <div className="d-flex gap-4">
                  {["Indian Citizen", "Foreign National"].map((type) => (
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

              {/* Donation Type */}
              <div className="col-sm-12 mt-2">
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

              {/* Personal Details */}
              <div className="col-sm-12 mt-3">
                <h3>Personal Details</h3>
              </div>

              <div className="col-sm-6 mb-2">
                <label>Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-sm-6 mb-2">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
              <div className="col-sm-6 mb-2">
                <label>Mobile No.*</label>
                <input
                  name="mobileNumber"
                  type="text"
                  placeholder="Mobile No."
                  className="form-control"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,13}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  required
                  minLength={10}
                  maxLength={13}
                  inputMode="numeric"
                  pattern="\d{10,13}"
                />
              </div>

              <div className="col-sm-12 mb-2">
                <label>Alternate Mobile No.</label>
                <input
                  name="alternateMobileNumber"
                  type="text"
                  placeholder="Alternate Mobile No."
                  className="form-control"
                  value={formData.alternateMobileNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,13}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  minLength={10}
                  maxLength={13}
                  inputMode="numeric"
                  pattern="\d{10,13}"
                />
              </div>

              <div className="col-sm-12 mb-2">
                <h4 className="mt-3">
                  <input
                    type="checkbox"
                    checked={formData.wants80GCertificate}
                    onChange={handleCheckboxChange}
                  />{" "}
                  I would like to receive 80(G) Certificate
                </h4>
              </div>

              {/* Certificate Section */}
              {formData.wants80GCertificate && (
                <>
                  <div className="col-sm-6 mb-2">
                    <label>PAN Number</label>
                    <input
                      name="panCardNumber"
                      type="text"
                      placeholder="Pan Card No."
                      className="form-control"
                      value={formData.certificateDetails.panCardNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-2">
                    <label>Address*</label>
                    <input
                      name="certificateAddress"
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      value={formData.certificateDetails.certificateAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-2">
                    <label>Pin Code*</label>
                    <input
                      name="certificatePinCode"
                      type="text"
                      placeholder="Pin Code"
                      className="form-control"
                      value={formData.certificateDetails.certificatePinCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-2">
                    <label>City*</label>
                    <input
                      name="certificateCity"
                      type="text"
                      placeholder="City"
                      className="form-control"
                      value={formData.certificateDetails.certificateCity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-2">
                    <label>State*</label>
                    <input
                      name="certificateState"
                      type="text"
                      placeholder="State"
                      className="form-control"
                      value={formData.certificateDetails.certificateState}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-2">
                    <label>Preference State</label>
                    <input
                      name="preferenceState"
                      type="text"
                      placeholder="Preference State"
                      className="form-control"
                      value={formData.certificateDetails.preferenceState}
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
      </section>
    </Layout>
  );
}

export default Donate;