import React from "react"
function Intro() {
    return (
        <section id="home" className="parallax-section" tabIndex="0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="home-img" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="home-thumb">
                            <div className="section-title">
                                <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Yash Chaturvedi</strong> currently based in Jacksonville, Florida.</h1>
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s">I am a Web Developer</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.9s"></p>                             
                                <a href="YashResume_WebDev-2021.docx" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s" download>Download Resume</a>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}
export default Intro