import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SecondaryButton from '../components/secondary-button'
import './page1.css'

const Page1 = (props) => {
  return (
    <div className="page1-container">
      <Helmet>
        <title>page1 - Nuxt</title>
        <meta property="og:title" content="page1 - Nuxt" />
      </Helmet>
      <section className="page1-hero">
        <video
          src="https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4"
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-800h.png"
          preload="auto"
          autoPlay
          playsInline
          className="page1-video"
        ></video>
        <header data-thq="thq-navbar" className="page1-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
            className="page1-branding"
          />
          <div data-thq="thq-burger-menu" className="page1-burger-menu">
            <div className="page1-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="page1-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="page1-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="page1-nav"
            >
              <div className="page1-container01">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="page1-image"
                />
                <div data-thq="thq-close-menu" className="page1-menu-close">
                  <svg viewBox="0 0 1024 1024" className="page1-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="page1-nav1"
              >
                <span className="page1-text">About</span>
                <Link to="/" className="page1-navlink">
                  Home
                </Link>
                <span className="page1-text01">Minecraft SMP</span>
                <Link to="/page1" className="page1-navlink1">
                  Team
                </Link>
              </nav>
              <div className="page1-container02">
                <Link to="/" className="page1-login button">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="page1-hero-content">
          <div className="page1-header-container">
            <div className="page1-header">
              <h1 className="page1-heading">
                <span>staff &amp; profile</span>
                <br></br>
              </h1>
            </div>
            <p className="page1-caption">Home &gt; profile</p>
          </div>
        </div>
      </section>
      <div className="page1-container03">
        <div className="page1-container04">
          <img
            alt="image"
            src="/playground_assets/e0yfcaivgaeic9i-200h.png"
            className="page1-image1"
          />
        </div>
        <div className="page1-container05">
          <h3 className="page1-text04">iotzbruhh</h3>
          <div className="page1-container06">
            <span className="page1-text05 TextSM">Owner</span>
          </div>
          <div className="page1-container07">
            <SecondaryButton
              button="Whatsapp"
              className="page1-component"
            ></SecondaryButton>
          </div>
          <span className="page1-text06">
            <span>
              Hai! Saya hanyalah seseorang yang tiba tiba mempunyai Ide membuat
              sebuah komunitas... Ya, saya awalnya cuma jadi staff di Hallsmp,
              Tapi karena ada masalah, saya Menjadi Owner Hallsmp ini.
            </span>
            <br></br>
          </span>
        </div>
        <div className="page1-container08"></div>
      </div>
      <div className="page1-container09">
        <div className="page1-container10">
          <img
            alt="image"
            src="/playground_assets/1091948c6b80b65b9eef8c163f0ae42a-200h.jpg"
            className="page1-image2"
          />
        </div>
        <div className="page1-container11">
          <h3 className="page1-text09">Nabil</h3>
          <div className="page1-container12">
            <span className="page1-text10 TextSM">CO OWNER</span>
          </div>
          <div className="page1-container13">
            <SecondaryButton
              button="Whatsapp"
              className="page1-component1"
            ></SecondaryButton>
          </div>
          <span className="page1-text11">
            <span>
              Just Wildin. i dint doing anything. I working with guy above me
            </span>
            <br></br>
          </span>
        </div>
        <div className="page1-container14"></div>
      </div>
      <div className="page1-container15">
        <div className="page1-container16">
          <img
            alt="image"
            src="/playground_assets/7ea0fb45a8edfe380ff42773fb3b2f11-200h.jpg"
            className="page1-image3"
          />
        </div>
        <div className="page1-container17">
          <h3 className="page1-text14">
            <span>Cherlyn</span>
            <br></br>
          </h3>
          <div className="page1-container18">
            <span className="page1-text17 TextSM">Staff 1st</span>
          </div>
          <div className="page1-container19">
            <SecondaryButton
              button="Whatsapp"
              className="page1-component2"
            ></SecondaryButton>
          </div>
          <span className="page1-text18">
            <span>
              Just Wildin. i dint doing anything. I working with guy above me
            </span>
            <br></br>
          </span>
        </div>
        <div className="page1-container20"></div>
      </div>
      <div className="page1-container21">
        <div className="page1-container22">
          <img
            alt="image"
            src="/playground_assets/e96fd4bf93c722f2544efd815b5fbc10-200h.jpg"
            className="page1-image4"
          />
        </div>
        <div className="page1-container23">
          <h3 className="page1-text21">
            <span>Cloud</span>
            <br></br>
          </h3>
          <div className="page1-container24">
            <span className="page1-text24 TextSM">founder</span>
          </div>
          <div className="page1-container25">
            <SecondaryButton
              button="Whatsapp"
              className="page1-component3"
            ></SecondaryButton>
          </div>
          <span className="page1-text25">
            <span>Founder Of HallSMP. Sekarang Tidak Meminpin Apapun.</span>
            <br></br>
          </span>
        </div>
        <div className="page1-container26"></div>
      </div>
      <div className="page1-footer">
        <div className="page1-content">
          <div className="page1-main">
            <div className="page1-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-300h.png"
                className="page1-image5"
              />
            </div>
          </div>
          <div className="page1-bottom">
            <span className="page1-text28">
              © 2020 - 2023 NuxtTeam- All rights reserved
            </span>
            <button data-role="scroll-top" className="page1-button button">
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="page1-image6"
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

export default Page1
