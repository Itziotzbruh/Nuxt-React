import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import OutlineGrayButton1 from '../components/outline-gray-button1'
import './staf.css'

const Staf = (props) => {
  return (
    <div className="staf-container">
      <Helmet>
        <title>staf - Nuxt</title>
        <meta property="og:title" content="staf - Nuxt" />
      </Helmet>
      <section className="staf-hero">
        <video
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-1500w.png"
          preload="auto"
          autoPlay
          playsInline
          className="staf-video"
        ></video>
        <header data-thq="thq-navbar" className="staf-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
            className="staf-branding"
          />
          <div data-thq="thq-burger-menu" className="staf-burger-menu">
            <div className="staf-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="staf-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="staf-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="staf-nav"
            >
              <div className="staf-container1">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="staf-image"
                />
                <div data-thq="thq-close-menu" className="staf-menu-close">
                  <svg viewBox="0 0 1024 1024" className="staf-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="staf-nav1"
              >
                <Link to="/" className="staf-navlink">
                  About
                </Link>
                <Link to="/inv" className="staf-navlink1">
                  Join now!
                </Link>
                <Link to="/hall" className="staf-navlink2">
                  Minecraft SMP
                </Link>
              </nav>
              <div className="staf-container2">
                <Link to="/inv" className="staf-login button">
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="staf-hero-content">
          <div className="staf-header-container">
            <div className="staf-header">
              <h1 className="staf-heading">
                <span className="staf-text">STAFF</span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="staf-row"></div>
      <div className="staf-row1"></div>
      <div className="staf-container3">
        <Link to="/commmunity" className="staf-navlink3">
          <div className="staf-card button">
            <div className="staf-container4">
              <h1 className="staf-text2">Mau Join?</h1>
              <div className="staf-container5">
                <OutlineGrayButton1 button="Join Now!"></OutlineGrayButton1>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="staf-footer">
        <div className="staf-content">
          <div className="staf-main">
            <div className="staf-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-200h.png"
                className="staf-image1"
              />
            </div>
          </div>
          <div className="staf-bottom">
            <span className="staf-text3">
              © 2020 - 2023 NuxtTeam- All rights reserved
            </span>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Staf
