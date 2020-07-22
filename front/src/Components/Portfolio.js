import React from 'react'
import axios from 'axios'
import Project from './Project'
import './Project.scss'

function Portfolio() {

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="project">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
