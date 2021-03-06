import React from "react"
function Experience() {
    return (
      <section id="experience" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12c text-left">
              <div className="color-white experience-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                  <h2>My Education</h2>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                  <div className="media-body">
                    <h3 className="media-heading"><i className="fa fa-laptop" /> Btech in Information Technology<small> (Jul 2008 - May 2012 )</small></h3>
                    <p className="color-white">NMIMS University (Mumbai). </p>
                  </div>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                  <div className="media-body">
                    <h3 className="media-heading"><i className="fa fa-laptop" /> Masters In Computer Science<small> (Sep 2015 - May 2017)</small></h3>
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