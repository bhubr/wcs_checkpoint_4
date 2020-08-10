import React from 'react'
import social from '../Data/social'

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {social.map((i) => (
              <li key={i.name}>
                <a href={i.url}>
                  <i className={i.className}></i>
                </a>
              </li>
            ))}
          </ul>
          <a href="src/CV-HailinSIM-dev.pdf" className="button">
            <i className="fa fa-download"></i> Download Resume
          </a>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Lena Hailin SIM</li>
            <li>
              Design by{' '}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
