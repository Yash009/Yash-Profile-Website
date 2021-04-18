
import React from "react"
function Contact() {
    return (
        <section id="service" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="bg-teel col-md-3 col-sm-6">
              <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
              <a className="color-white" href="mailto:yash.900209@gmail.com">
                  <i className="fa fa-envelope" />
                  <h3>Contact By</h3>
                  <h3>Email</h3>
                  <p className="color-white">yash.900209@gmail.com</p></a>
              </div>
            </div>
            <div className="bg-skills col-md-3 col-sm-6">
              <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                <i className="fa fa-phone" />
                <h3>Reach by</h3>
                <h3>Phone</h3>
                <p className="color-white">+1 201-616-2490</p>
              </div>
            </div>
            <div className="bg-dark col-md-3 col-sm-6">
              <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                <a href="https://github.com/yash009">
                  <i className="fa fa-github" />
                  <h3>GitHub</h3>
                  <p className="color-white">Yash Chaturvedi's</p>
                  <u><p className="color-white">Github link</p></u>
                </a>
              </div>
            </div>
            <div className="bg-white col-md-3 col-sm-6">
              <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                <a href="https://www.linkedin.com/in/yashgchaturvedi/">
                  <i className="fa fa-linkedin-square" />
                  <h3>LinkedIn</h3>
                  <p>Yash Chaturvedi's LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact