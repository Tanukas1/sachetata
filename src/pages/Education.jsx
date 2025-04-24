import React from 'react'
import Layout from '../layout/Layout'

function Education() {
  return (
    <Layout>
<div>
  <div className="header-height" />
  <div>
    <img loading='lazy' src="assets\img\education-banner.webp" className="img-fluid" alt />
  </div>
  <section className="about-section bg-grey bd-bottom padding">
    <div className="container">
      <div className="section-heading text-center mb-40">
        <h2>Educational Support: .</h2>
        <span className="heading-border" />
        <p>Our programs are crafted with the input of a dedicated team of professionals, including special educators, therapists, and technologists, all skilled in creating supportive</p>
      </div>
      <div className="row about-wrap">
        <div className="col-md-6 xs-padding">
          <div className="about-image">
            <img loading='lazy' src="assets\img\ser-10.jpg" alt="about image" />
          </div>
        </div>
        <div className="col-md-6 xs-padding">
          <div className="about-content">
            <p>Sachetataa Foundation provides specialized educational programs tailored to the diverse needs of children with disabilities. This includes individualized learning plans, assistive technologies, and a team of trained professionals skilled in addressing various learning styles.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </Layout>
  )
}

export default Education
