import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SecondaryButton from '../components/secondary-button'
import PrimaryButton from '../components/primary-button'
import SecondaryButton2 from '../components/secondary-button2'
import './inv.css'

const Inv = (props) => {
  return (
    <div className="inv-container">
      <Helmet>
        <title>Inv - Nuxt</title>
        <meta property="og:title" content="Inv - Nuxt" />
      </Helmet>
      <section className="inv-hero">
        <video
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-1500w.png"
          preload="auto"
          autoPlay
          playsInline
          className="inv-video"
        ></video>
        <header data-thq="thq-navbar" className="inv-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
            className="inv-branding"
          />
          <div data-thq="thq-burger-menu" className="inv-burger-menu">
            <div className="inv-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="inv-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="inv-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="inv-nav"
            >
              <div className="inv-container01">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="inv-image"
                />
                <div data-thq="thq-close-menu" className="inv-menu-close">
                  <svg viewBox="0 0 1024 1024" className="inv-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="inv-nav1"
              >
                <Link to="/" className="inv-navlink">
                  About
                </Link>
                <Link to="/inv" className="inv-navlink1">
                  Join now!
                </Link>
                <Link to="/hall" className="inv-navlink2">
                  Minecraft SMP
                </Link>
              </nav>
              <div className="inv-container02">
                <Link to="/inv" className="inv-login button">
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="inv-hero-content">
          <div className="inv-header-container">
            <div className="inv-header">
              <h1 className="inv-heading">
                <span>Join Section</span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="inv-container03">
        <div className="inv-container04">
          <img
            alt="image"
            src="/playground_assets/screenshot_20230418-230106_mbwhatsapp%5B22%5D-200h.png"
            className="inv-image1"
          />
        </div>
        <div className="inv-container05">
          <h3 className="inv-text02">Nuxt Community</h3>
          <div className="inv-container06">
            <span className="inv-text03 TextSM">
              Minecraft Community &amp; SMP
            </span>
          </div>
          <div className="inv-container07">
            <a
              href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
              target="_blank"
              rel="noreferrer noopener"
              className="inv-link"
            >
              <SecondaryButton
                button="Whatsapp"
                className="inv-component"
              ></SecondaryButton>
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="inv-link1"
            >
              <PrimaryButton
                button="Discord"
                className="inv-component1"
              ></PrimaryButton>
            </a>
          </div>
          <span className="inv-text04">
            <span>
              Sebuah Grup Komunitas Minecraft Yang Di-accuire Oleh Nuxt
              Community Dan Kini Menjadi Satu. Gabung Sekarang!
            </span>
            <br></br>
          </span>
        </div>
        <div className="inv-container08"></div>
      </div>
      <div className="inv-container09">
        <div className="inv-container10">
          <img
            alt="image"
            src="/playground_assets/3f6c161d-62e6-48d9-a0ab-98b5f7e837a2-200h.webp"
            className="inv-image2"
          />
        </div>
        <div className="inv-container11">
          <h3 className="inv-text07">Info Minecraft Indonesia</h3>
          <div className="inv-container12">
            <span className="inv-text08">minecraftpedia.id</span>
          </div>
          <div className="inv-container13">
            <a
              href="https://instagram.com/minecraftpedia.id"
              target="_blank"
              rel="noreferrer noopener"
              className="inv-link2"
            >
              <SecondaryButton2
                button="INSTAGRAM"
                rootClassName="secondary-button2-root-class-name"
                className="inv-component2"
              ></SecondaryButton2>
            </a>
          </div>
          <span className="inv-text09">
            <span>
              Sebuah Profil Instagram Yang Memberi Info Dan Update Tentang
              Minecraft.
            </span>
            <br></br>
          </span>
        </div>
        <div className="inv-container14"></div>
      </div>
      <div className="inv-footer">
        <div className="inv-content">
          <div className="inv-main">
            <div className="inv-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-300h.png"
                className="inv-image3"
              />
            </div>
          </div>
          <div className="inv-bottom"></div>
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

export default Inv
