import React, { useState } from "react";
import Layout from "../layout/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Donate() {
  const [birthdate, setBirthdate] = useState(null);

  const [formData, setFormData] = useState({
    citizenship: "Indian Citizen",
    donationType: "Donate Once",
    fullName: "",
    email: "",
    mobileNo: "",
    alternateMobileNo: "",
    receiveCertificate: false,
    panNumber: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.fullName || !formData.email || !formData.mobileNo) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.receiveCertificate) {
      if (
        !formData.panNumber ||
        !formData.address ||
        !formData.pinCode ||
        !formData.city ||
        !formData.state
      ) {
        toast.error("Please complete all certificate fields.");
        return;
      }
    }

    const finalData = {
      ...formData,
      birthdate: birthdate ? birthdate.toISOString().split("T")[0] : null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/donation/submit-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Donation form submitted successfully!");
      } else {
        toast.error(result.message || "Failed to submit the form.");
      }
    } catch (err) {
      toast.error("Server error occurred. Please try again later.");
      console.error(err);
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

              <div className="col-sm-12 mt-3">
                <h3>Personal Details</h3>
              </div>

              <div className="col-sm-6 mb-2">
                <label>Full Name*</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-6 mb-2">
                <label>Email*</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-6 mb-2">
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
                  name="mobileNo"
                  type="text"
                  placeholder="Mobile No."
                  className="form-control"
                  value={formData.mobileNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-12 mb-2">
                <label>Alternate Mobile No.</label>
                <input
                  name="alternateMobileNo"
                  type="text"
                  placeholder="Alternate Mobile No."
                  className="form-control"
                  value={formData.alternateMobileNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-12 mb-2">
                <input
                  type="checkbox"
                  checked={formData.receiveCertificate}
                  onChange={handleCheckboxChange}
                />{" "}
                I would like to receive 80(G) Certificate
              </div>

              {formData.receiveCertificate && (
                <>
                  <div className="col-sm-6 mb-2">
                    <label>PAN Number*</label>
                    <input
                      name="panNumber"
                      type="text"
                      placeholder="Pan Card No."
                      className="form-control"
                      value={formData.panNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 mb-2">
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
                  <div className="col-sm-6 mb-2">
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
                  <div className="col-sm-6 mb-2">
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
                  <div className="col-sm-6 mb-2">
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
                  <div className="col-sm-6 mb-2">
                    <label>Preference State</label>
                    <input
                      name="preferenceState"
                      type="text"
                      placeholder="Preference State"
                      className="form-control"
                      value={formData.preferenceState}
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
