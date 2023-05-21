import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './commmunity.css'

const Commmunity = (props) => {
  return (
    <div className="commmunity-container">
      <Helmet>
        <title>Commmunity - Nuxt</title>
        <meta property="og:title" content="Commmunity - Nuxt" />
      </Helmet>
      <section className="commmunity-hero">
        <video
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-1300h.png"
          preload="auto"
          autoPlay
          playsInline
          className="commmunity-video"
        ></video>
        <header data-thq="thq-navbar" className="commmunity-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
            className="commmunity-branding"
          />
          <div data-thq="thq-burger-menu" className="commmunity-burger-menu">
            <div className="commmunity-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="commmunity-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="commmunity-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="commmunity-nav"
            >
              <div className="commmunity-container01">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="commmunity-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="commmunity-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="commmunity-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="commmunity-nav1"
              >
                <Link to="/" className="commmunity-navlink">
                  About
                </Link>
                <Link to="/inv" className="commmunity-navlink1">
                  Join now!
                </Link>
                <Link to="/hall" className="commmunity-navlink2">
                  Minecraft SMP
                </Link>
              </nav>
              <div className="commmunity-container02">
                <Link to="/inv" className="commmunity-login button">
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="commmunity-hero-content">
          <div className="commmunity-header-container">
            <div className="commmunity-header">
              <h1 className="commmunity-heading">
                <span>Join Section</span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="commmunity-container03">
        <div className="commmunity-container04">
          <img
            alt="image"
            src="/playground_assets/screenshot_20230418-230106_mbwhatsapp%5B22%5D-200h.png"
            className="commmunity-image1"
          />
        </div>
        <div className="commmunity-container05">
          <h3 className="commmunity-text2">Nuxt Community</h3>
          <div className="commmunity-container06"></div>
          <span className="commmunity-text3">
            <span>
              Sebuah Grup Komunitas Minecraft Yang Di-accuire Oleh Nuxt
              Community Dan Kini Menjadi Satu. Gabung Sekarang!
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="commmunity-container07">
        <div className="commmunity-card button">
          <div className="commmunity-container08">
            <h1 className="commmunity-text6">Whatsapp</h1>
            <div className="commmunity-container09"></div>
          </div>
          <a
            href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
            target="_blank"
            rel="noreferrer noopener"
            className="commmunity-link"
          >
            <div className="commmunity-container10 button"></div>
          </a>
        </div>
      </div>
      <div className="commmunity-container11">
        <div className="commmunity-card1 button">
          <div className="commmunity-container12">
            <h1 className="commmunity-text7">Discord</h1>
            <div className="commmunity-container13"></div>
          </div>
          <a
            href="https:// discord.gg/Rb5yyGSEVv"
            target="_blank"
            rel="noreferrer noopener"
            className="commmunity-link1"
          >
            <div className="commmunity-container14 button"></div>
          </a>
        </div>
      </div>
      <div className="commmunity-footer">
        <div className="commmunity-content">
          <div className="commmunity-main">
            <div className="commmunity-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-300h.png"
                className="commmunity-image2"
              />
            </div>
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

export default Commmunity
