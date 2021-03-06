import React from "react"
function Header() {
    return (
      /* Navigation Section */
      <section id="navigation">
        <div className="navbar navbar-fixed-top custom-navbar" role="navigation">
          <div className="container">
            {/* navbar header */}
            <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
              </button>
              <a href="#" className="navbar-brand">YASH CHATURVEDI</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#home" className="smoothScroll">Home</a></li>
                <li><a href="#about" className="smoothScroll">About Me</a></li>
                <li><a href="#experience" className="smoothScroll">Experiences</a></li>
                <li><a href="#contact" className="smoothScroll">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    )
}
export default Header