import React from "react";
import Layout from "../layout/Layout";
import { NavLink } from 'react-router-dom'

function Thankyou() {
    return (
        <Layout>
            <div>
                <div className="header-height" />
                <div>
                    <img loading="lazy"
                        src="assets/images/banner/thankyou.webp"
                        className="img-fluid"
                        alt
                    />
                </div>
                <section className="about-section bg-grey bd-bottom padding">
                    <div className="container">
                        <div className="section-heading text-center mb-40">
                            <h2>Thank You for Your Submission!</h2>
                            <span className="heading-border" />
                        </div>
                        <div className="row about-wrap">
                            <div className="col-md-12 xs-padding">
                                <div className="about-content">
                                    <p>
                                        <b>Step 1:</b> Your donation form has been successfully submitted.
                                    </p>
                                    <p>
                                        <b>Step 2:</b> Please proceed with your donation using the QR Code or Bank Transfer details provided below.
                                    </p>
                                    <p>
                                        <b>Step 3:</b> Once the transfer is completed, click on the "Verify Donation" link (available here, in the website header, and footer).
                                    </p>
                                    <p>
                                        <b>Step 4:</b> Fill out the Verify Donation Form, upload the payment screenshot, and submit the details for verification.
                                    </p>
                                    <p>
                                        <b>Step 5:</b> After verification, you will receive your 80G certificate via email within 7 days.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-12 text-center">
                                <div className="section-heading text-center mb-40">
                                    <h2>Donate via QR or Bank Transfer</h2>
                                    <span className="heading-border" />
                                    <p>If you would like to contribute, please find our payment details below:</p>
                                </div>
                                {/* <h3>Support Us </h3>
                                <p>If you would like to contribute, please find our payment details below:</p> */}
                            </div>
                            <div className="col-md-6 text-center">
                                <p><strong>Account name:</strong> Sachetataa Foundation</p>
                                <p><strong>Account No:</strong> 42629864160</p>
                                <p><strong>IFSC Code:</strong> SBIN0011512</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="qr-code-container">
                                    <img src="assets/img/qr.jpeg" alt="QR Code" className="qr-code" style={{ width: '300px' }} />
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <NavLink to="/verify-donation" className="default-btn">
                                    Verify Donation
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export default Thankyou;