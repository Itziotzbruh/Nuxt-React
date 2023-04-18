import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SecondaryButton from '../components/secondary-button'
import PrimaryButton from '../components/primary-button'
import SecondaryButton2 from '../components/secondary-button2'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>page - Nuxt</title>
        <meta property="og:title" content="page - Nuxt" />
      </Helmet>
      <section className="page-hero">
        <video
          src="https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4"
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-800h.png"
          preload="auto"
          autoPlay
          playsInline
          className="page-video"
        ></video>
        <header data-thq="thq-navbar" className="page-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
            className="page-branding"
          />
          <div data-thq="thq-burger-menu" className="page-burger-menu">
            <div className="page-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="page-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="page-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="page-nav"
            >
              <div className="page-container01">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="page-image"
                />
                <div data-thq="thq-close-menu" className="page-menu-close">
                  <svg viewBox="0 0 1024 1024" className="page-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="page-nav1"
              >
                <span className="page-text">About</span>
                <Link to="/" className="page-navlink">
                  Home
                </Link>
                <span className="page-text01">Minecraft SMP</span>
                <Link to="/page1" className="page-navlink1">
                  Team
                </Link>
              </nav>
              <div className="page-container02">
                <Link to="/" className="page-login button">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="page-hero-content">
          <div className="page-header-container">
            <div className="page-header">
              <h1 className="page-heading">
                <span>Join Section</span>
                <br></br>
              </h1>
            </div>
            <p className="page-caption">Home &gt; About</p>
          </div>
        </div>
      </section>
      <div className="page-container03">
        <div className="page-container04">
          <img
            alt="image"
            src="/playground_assets/screenshot_20230418-230106_mbwhatsapp%5B22%5D-200h.png"
            className="page-image1"
          />
        </div>
        <div className="page-container05">
          <h3 className="page-text04">Nuxt Community</h3>
          <div className="page-container06">
            <span className="page-text05 TextSM">
              Minecraft Community &amp; SMP
            </span>
          </div>
          <div className="page-container07">
            <a
              href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link"
            >
              <SecondaryButton
                button="Whatsapp"
                className="page-component"
              ></SecondaryButton>
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link1"
            >
              <PrimaryButton
                button="Discord"
                className="page-component1"
              ></PrimaryButton>
            </a>
          </div>
          <span className="page-text06">
            <span>
              Sebuah Grup Komunitas Minecraft Yang Di-accuire Oleh Nuxt
              Community Dan Kini Menjadi Satu. Gabung Sekarang!
            </span>
            <br></br>
          </span>
        </div>
        <div className="page-container08"></div>
      </div>
      <div className="page-container09">
        <div className="page-container10">
          <img
            alt="image"
            src="/playground_assets/3f6c161d-62e6-48d9-a0ab-98b5f7e837a2-200h.webp"
            className="page-image2"
          />
        </div>
        <div className="page-container11">
          <h3 className="page-text09">Info Minecraft Indonesia</h3>
          <div className="page-container12">
            <span className="page-text10">mc_info_id</span>
          </div>
          <div className="page-container13">
            <a
              href="https://instagram.com/mcinfo_id"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link2"
            >
              <SecondaryButton2
                button="INSTAGRAM"
                rootClassName="secondary-button2-root-class-name"
                className="page-component2"
              ></SecondaryButton2>
            </a>
          </div>
          <span className="page-text11">
            <span>
              Sebuah Profil Instagram Yang Memberi Info Dan Update Tentang
              Minecraft.
            </span>
            <br></br>
          </span>
        </div>
        <div className="page-container14"></div>
      </div>
      <div className="page-footer">
        <div className="page-content">
          <div className="page-main">
            <div className="page-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-300h.png"
                className="page-image3"
              />
            </div>
          </div>
          <div className="page-bottom">
            <span className="page-text14">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="page-button button">
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="page-image4"
              />
            </button>
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

export default Page
