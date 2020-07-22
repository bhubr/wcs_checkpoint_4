import React from 'react'

function Admin() {
  return (
    <div id='admin'>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="/">Home</a></li>
          <li><a className="smoothscroll" href="/#about">About</a></li>
          <li><a className="smoothscroll" href="/#portfolio">Projects</a></li>
        </ul>
      </nav>
      Admin
    </div>
  )
}

export default Admin
