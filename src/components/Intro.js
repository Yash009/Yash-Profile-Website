import React from "react"
function Intro() {
    return (
        <section id="home-section" tabIndex="0">
            <div className="flex-container">
                <div className="flex-row left-section">
                    <div className="flex-item">
                        <img src="/images/home-img.jpg" className="img-responsive" alt="Main Display image" />
                    </div>
                </div>
                <div className="flex-row right-section">
                    <div className="flex-item">
                        <div className="home-thumb">
                            <div className="section-title">
                                <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Yash Chaturvedi</strong> currently based in Jacksonville, Florida.</h1>
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s">I am a Web Developer</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.9s"></p>                             
                                <a href="/resume/Yash_frontEnd-4-2021.docx" download="/resume/Yash_frontEnd-4-2021.docx" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s" download>Download Resumé</a>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}
export default Intro