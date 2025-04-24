import React from "react";
import Layout from "../layout/Layout";

function Contact() {
  return (
    <Layout>
      <div className="header-height"></div> 
      {/* <div className="pager-header"></div> */}
      <section className="contact-section padding">
        <div id="google_map" />
        <div className="container">
          <div className="section-heading text-center">
            <h2>Contact Us</h2>
            <span className="heading-border" />
            <p>
              We value your input and look forward to hearing from you. Thank
              you for your interest in Sachetataa Foundation.
            </p>
          </div>
          <div className="row contact-wrap">
            <div className="col-md-6">
              <div className="contact-info">
                <h3>Get in touch</h3>
                <p>
                  Whether you have questions about our programs, want to
                  volunteer, or are interested in supporting our cause, we'd
                  love to hear from you. Together, we can make a difference in
                  the lives of children with disabilities.
                </p>
                <p>
                  We welcome your inquiries, feedback, and support. Feel free to
                  reach out to us through any of the following channels:
                </p>
                <ul>
                  <li>
                    <a href="tel:+918696700555">
                        <i className="ti-mobile" /> +91 8696700555
                    </a>
                  </li>
                  <li>
                    <i className="ti-email" />
                    <a
                      href="mailto:sachetataa@gmail.com"
                      className="__cf_email__"
                      data-cfemail="441d2b31362129252d2804272b2934252a3d2a2529216a272b29"
                    >
                      sachetataa@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 xs-padding">
              <div className="contact-form">
                <h3>Drop us a line</h3>
                <form
                  action="https://html.dynamiclayers.net/dl/charitify/contact.php"
                  method="post"
                  id="ajax_form"
                  className="form-horizontal"
                >
                  <div className="form-group colum-row row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea
                        id="message"
                        name="message"
                        cols={30}
                        rows={5}
                        className="form-control message"
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <button id="submit" className="default-btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
