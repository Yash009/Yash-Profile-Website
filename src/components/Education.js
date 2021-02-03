import React from "react"
function Education() {
    return (
        <section id="experience" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="background-image experience-img" />
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="color-white experience-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                  <h1>My Education</h1>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Btech in Information Technology<small> 2008 Jul - 2012 May</small></h3>
                    <p className="color-white">NMIMS University (Mumbai). </p>
                  </div>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Masters In Computer Science<small> 2015 Sep - 2017 May</small></h3>
                    <p className="color-white">Pace University (New York City)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Education