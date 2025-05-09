import React, { useState, useRef } from "react";
import Layout from "../layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function VerifyDonation() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
    donationAmount: "",
    donationScreenshot: null,
  });

  const donationScreenshotRef = useRef(null); // Create a reference for the file input

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      email,
      contactNumber,
      donationAmount,
      donationScreenshot,
    } = formData;

    if (
      !firstName ||
      !email ||
      !contactNumber ||
      !donationAmount ||
      !donationScreenshot
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const digitsOnly = contactNumber.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      toast.error("Contact number must be between 10 and 13 digits.");
      return;
    }

    const data = {
      firstName,
      email,
      contactNumber,
      donationAmount,
    };

    try {
      const formDataToSend = new FormData();

      for (const [key, value] of Object.entries(data)) {
        formDataToSend.append(key, value);
      }

      // Append the file separately
      formDataToSend.append("donationScreenshot", donationScreenshot);

      const res = await axios.post(
        "http://sucheta.traficoanalytica.com/api/v1/enquiry/add-verify-donation",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        toast.success("Verify Donation form submitted successfully!");
        setFormData({
          firstName: "",
          email: "",
          contactNumber: "",
          donationAmount: "",
          donationScreenshot: null,
        });
        donationScreenshotRef.current.value = null; // Reset the file input field
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
        <img src="assets/img/donate-banner.webp" className="img-fluid" alt="" />

        <section className="pt-5 pb-5">
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Verify Donation</h2>
              <span className="heading-border" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row frm">
                <div className="col-sm-6 mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    className="form-control"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    pattern="[0-9]{10,13}"
                    minLength={10}
                    maxLength={13}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    required
                  />
                </div>

                <div className="col-sm-6 mb-3">
                  <label htmlFor="donationAmount">Donation Amount Paid</label>
                  <input
                    type="number"
                    name="donationAmount"
                    className="form-control"
                    placeholder="Donation Amount Paid"
                    value={formData.donationAmount}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12 mb-4">
                  <label htmlFor="donationScreenshot">
                    Donation Amount Screenshot (Upload)
                  </label>
                  <input
                    type="file"
                    name="donationScreenshot"
                    id="donationScreenshot"
                    className="form-control"
                    onChange={handleChange}
                    ref={donationScreenshotRef} // Attach the ref
                  />
                </div>
                <div className="col-sm-12">
                  <button type="submit" className="default-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Layout>
  );
}

export default VerifyDonation;
