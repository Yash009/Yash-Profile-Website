import React from "react"
function Skills() {
    return (
      <section id="about" className="parallax-section">
        <div className="container flex-container">
          <div className="flex-row left-section">
            <div className="flex-item about-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                <h2>My Work</h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <p className="text-left">
                  I am a UI/X developer and I code for living and as a hobby. 
                  I am very passionate about my job and I live by the principle that if you love your job it doesn't feel like one! 
                  I try to deliver quality products to the best of my abilities and am always pushing to improve my skillset every day. 
                  I enjoy problem solving and I do feel like a lot of problems in the modern world can be solved by computer science.
                </p>
                <p className="text-left">My Current work mostly involves: </p>
                <ul className="text-left">
                  <li><strong>Working with the design team to deliver high quality UI/UX Experience</strong></li>
                  <li><strong>Helping the SEO team to monitor core web vitals in order to recommend and implement solutions.</strong></li>
                  <li><strong>Mitigateing and Solving and production issues faced by the Customer Focus Team and B2B</strong></li>
                </ul>
              </div>
            </div>
            <div className="flex-item second-section-image">
                <img src="/images/about1.jpg" className="img-responsive" alt="Main Display image" />
            </div>
          </div>
          <div className="bg-skills flex-row right-section">
            <div className="skill-thumb">
              <div className="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                <h2>My Skills</h2>
              </div>
              <div className="skills flex-row">
                <div className ="flex-item">
                    <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                        <strong>HTML5</strong>
                        <span className="color-white pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                        </div>
                        <strong>CSS</strong>
                        <span className="color-white pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                        </div>
                        <strong>React</strong>
                        <span className="color-white pull-right">65%</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={60} style={{width: '60%'}} />
                        </div>
                      </div>
                  </div>
                  <div className ="flex-item">
                    <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                      <strong>Javascript</strong>
                      <span className="color-white pull-right">75%</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                      </div>
                      <strong>JQuery</strong>
                      <span className="color-white pull-right">75%</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                      </div>
                      <strong>PHP</strong>
                      <span className="color-white pull-right">70%</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Skills