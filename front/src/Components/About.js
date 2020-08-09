import React from 'react'

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="images/profilepic.png"
            alt="Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            I'm a junior developer based in Paris. I specialise in React, Node
            JS, SQL as well as UX/UI design. <br />
          </p>
        </div>

        <div className="nine columns main-col">
          <hr />
          <div className="row">
            <div className="columns contact-details">
              <h2> Skills </h2>
              <p>
                HTML5 | CSS3 | JS ES6 | React | React Hooks | Node JS | Express
                | Git | Github | MySQL | MongoDB | Redux | MaterialUI |
                Bootstrap | Adobe Photoshop
              </p>
              <ul className="social-links">
                <li>
                  <i className="fab fa-html5"></i>
                </li>
                <li>
                  <i className="fab fa-css3-alt"></i>
                </li>
                <li>
                  <i className="fab fa-js-square"></i>
                </li>
                <li>
                  <i className="fab fa-react"></i>
                </li>
                <li>
                  <i className="fab fa-node"></i>
                </li>
                <li>
                  <i className="fab fa-git-alt"></i>
                </li>
                <li>
                  <i className="fab fa-github"></i>
                </li>
                <li>
                  <i className="fab fa-bootstrap"></i>
                </li>
                <li>
                  <i className="fas fa-database"></i>
                </li>
                <li>
                  <i className="fab fa-adobe"></i>
                </li>
              </ul>
            </div>
            <div className="columns download">
              <h2>Soft Skills</h2>
              <p> </p>
              <ul>
                <li>&#10004; Mobile-First, Responsive Design</li>
                <li>&#10004; Agile &amp; Scrum developmenet</li>
                <li>&#10004; Marketing &amp; UX &amp; UI experiences </li>
                <li>&#10004; Project managing and PR experiences </li>
                <li>&#10004; Team player</li>
                <li>&#10004; French | English | Korean</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Lena Hailin SIM</span>
                <br />
                <span>07 83 81 75 77</span>
                <br />
                <span>hailin.sim@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="src/CV-HailinSIM-dev.pdf" className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
