import React, { useContext } from 'react'
import SocialContext from './context/Social'

function Header() {
  const [social] = useContext(SocialContext)

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li>
            <a className="smoothscroll" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/admin">
              Admin
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Lena Hailin SIM</h1>
          <h3>
            {' '}
            I&apos;m <span>Web Developer</span> <br /> React · Node JS · MySQL
          </h3>
          <hr />
          <ul className="social">
            {social.map((i) => (
              <li key={i.name}>
                <a href={i.url}>
                  <i className={i.className}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  )
}

export default Header
