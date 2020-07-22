import React, { Component } from 'react';

class Header extends Component {
   social = [
      {
         "name": "facebook",
         "url": "https://www.facebook.com/lenahailinsim",
         "className": "fa fa-facebook"
      },
      {
         "name": "email",
         "url": "hailin.sim@gmail.com",
         "className": "fas fa-at"
      },
      {
         "name": "linkedin",
         "url": "https://www.linkedin.com/in/lena-hailin-sim/",
         "className": "fa fa-linkedin"
      },
      {
         "name": "instagram",
         "url": "http://instagram.com/simsimhaerin",
         "className": "fa fa-instagram"
      },
      {
         "name": "github",
         "url": "http://github.com/lenasim",
         "className": "fa fa-github"
      }
   ]

   render() {
      return (
         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Lena Hailin SIM</h1>
                  <h3> I'm <span>Web Developer</span> <br /> React · Node JS · MySQL</h3>
                  <hr />
                  <ul className="social">
                     {this.social.map(i => <li key={i.name}><a href={i.url}><i className={i.className}></i></a></li>)}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
         </header>
      );
   }
}

export default Header;
