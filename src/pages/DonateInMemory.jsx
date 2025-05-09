import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function DonateInMemory() {
  const [occasionDate, setOccasionDate] = useState(null);
  const [birthdate, setBirthdate] = useState(null);

  const initialFormData = {
    citizenship: "",
    donationType: "",
    honoreeName: "",
    relationshipWithHonoree: "",
    occasionName: "",
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
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (
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

    if (!formData.fullName || !formData.email || !formData.mobileNumber) {
      toast.error("Please fill all required fields.");
      return;
    }

    const digitsOnly = formData.mobileNumber.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      toast.error("Contact number must be between 10 and 13 digits.");
      return;
    }

    const finalData = {
      ...formData,
      birthdate: birthdate ? formatDateOnly(birthdate) : null,
      occasionDate: occasionDate ? formatDateOnly(occasionDate) : null,
      panNumber: formData.certificateDetails.panCardNumber || "XYZAB5678C",
    };

    try {
      const response = await axios.post(
        "http://sucheta.traficoanalytica.com/api/v1/enquiry/add-in-memory-donation",
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
      <ToastContainer />
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
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-12 col-sm-12 mt-2">
                          <h3>Select your citizenship</h3>
                          <div className="d-flex flex-wrap gap-4">
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

                        <div className="col-12 col-sm-12 mt-2">
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

                        <div className="col-12 col-sm-12 mt-2">
                          <h3>
                            I want my donation to be dedicated to: In Memory Of
                          </h3>
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
                            name="relationshipWithHonoree"
                            type="text"
                            placeholder="Relationship With"
                            className="form-control"
                            value={formData.relationshipWithHonoree}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Occassion Name</label>
                          <input
                            name="occasionName"
                            type="text"
                            placeholder="Occassion Name"
                            className="form-control"
                            value={formData.occasionName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                          <label>Occassion Date</label>
                          <DatePicker
                            selected={occasionDate}
                            onChange={(date) => setOccasionDate(date)}
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
                            name="mobileNumber"
                            type="tel"
                            placeholder="Mobile No."
                            className="form-control"
                            value={formData.mobileNumber}
                            onChange={handleChange}
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
                          <label>Alternate Mobile No.</label>
                          <input
                            name="alternateMobileNumber"
                            type="tel"
                            placeholder="Alternate Mobile No."
                            className="form-control"
                            value={formData.alternateMobileNumber}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
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
                            <div className="col-sm-6 mb-2">
                              <label>PAN Number</label>
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
                            <div className="col-sm-6 mb-2">
                              <label>Address*</label>
                              <input
                                name="certificateAddress"
                                type="text"
                                placeholder="Address"
                                className="form-control"
                                value={
                                  formData.certificateDetails.certificateAddress
                                }
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
                                value={
                                  formData.certificateDetails.certificatePinCode
                                }
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
                                value={
                                  formData.certificateDetails.certificateCity
                                }
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
                                value={
                                  formData.certificateDetails.certificateState
                                }
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
        </section>
      </div>
    </Layout>
  );
}

export default DonateInMemory;
