import React from "react"
function Experience() {
    return (
      <section id="experience" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12c text-left">
              <div className="color-white experience-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                  <h1>My Education</h1>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                  <div className="media-body">
                    <h3 className="media-heading"><i className="fa fa-laptop" /> Btech in Information Technology<small> (2008 Jul - 2012 May)</small></h3>
                    <p className="color-white">NMIMS University (Mumbai). </p>
                  </div>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                  <div className="media-body">
                    <h3 className="media-heading"><i className="fa fa-laptop" /> Masters In Computer Science<small> (2015 Sep - 2017 May)</small></h3>
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
export default Experience