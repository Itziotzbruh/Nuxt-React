import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nuxt</title>
        <meta property="og:title" content="Nuxt" />
      </Helmet>
      <section className="home-hero">
        <video
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-800h.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
            className="home-branding"
          />
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <div className="home-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="home-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <Link to="/" className="home-navlink">
                  About
                </Link>
                <Link to="/page" className="home-navlink1">
                  Join now!
                </Link>
                <Link to="/page" className="home-navlink2">
                  Minecraft SMP
                </Link>
                <Link to="/page1" className="home-navlink3">
                  Team
                </Link>
              </nav>
              <div className="home-container2">
                <Link to="/page" className="home-login button">
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span className="home-text">Nuxt</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">COMMUNITY</p>
          </div>
          <Link to="/page" className="home-navlink4 button">
            <span>
              <span>Join Now!</span>
              <br></br>
            </span>
          </Link>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption1">
          NUXT Community adalah sebuah komunitas, Dimana Disini adalah tempat
          para pemain minecraft berkumpul, bermain bersama dan berbincang
        </h2>
      </section>
      <section className="home-slides">
        <div className="home-slider slider blaze-slider"></div>
        <div>
          <DangerousHTML
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header01">
            <h2 className="home-heading1">Apa sih... Keuntungan bergabung?</h2>
            <p className="home-caption2">
              Pastinya dengan bergabung ke sebuah komunitas, Mempunyai Tujuan
              nya masing masing, Nah ada keuntungannya nih join ke Nuxt
              Community
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-button"></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/2023-01-21_06.49.35-800w.png"
          className="home-image1"
        />
      </section>
      <section className="home-objectives">
        <div className="home-content">
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text05">Teman</h3>
              <p className="home-text06">
                Kesepian? Hmm mugkin kamu bisa bergabung disini. Kalian bisa
                bertemu sesama player minecraft disini, Baik java atau bedrock.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective1">
              <h3 className="home-text07">Nice Admin&amp;Member!</h3>
              <p className="home-text08">
                Pastinya, Kalian gamau komunitas yang toxic :)
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text09">Event!</h3>
              <p className="home-text10">
                Berbagai evernt terkadang tersedia! mulai dari SMP dll.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content01">
          <div className="home-header02">
            <div className="home-header03">
              <h2 className="home-heading2">
                <span>Tersedia : Minecraft Crossplay SMP!</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption3">
              Hmm, bayangkan, server minecraft, yang didalamnya terdapat semua
              yang bisa kamu lakukan! kamu bisa membuat negaramu sendiri! dan
              juga, anti grief 😎
            </p>
            <p className="home-caption4">
              Dan ini juga dapat dimainkan di semua versi minecraft! ( bedrock /
              PE &amp; java! )
            </p>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="/playground_assets/2023-01-21_06.48.43-800h.png"
            className="home-image2"
          />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="/playground_assets/-1611499537840-1400w.webp"
            className="home-image3"
          />
        </div>
        <div className="home-content02">
          <div className="home-header04">
            <div className="home-header-container2">
              <div className="home-header05">
                <h2 className="home-heading3">
                  Nuxt Team memastikan bahwa komunitas ini
                </h2>
              </div>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon03">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text13">
                  Tidak adanya konten berbau 18+
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon05">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text14">Free talks &amp; Speech</span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon07">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text15">
                  Best Minecraft smp experience
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon09">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text16">Up to Date</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header06">
          <h2 className="home-heading4">
            F.A.O ( PERTANYAAN YANG SERING DITANYAKAN )
          </h2>
        </div>
        <div className="home-content03">
          <div className="home-column">
            <div className="home-element">
              <h3 className="home-header07">-</h3>
              <p className="home-content04">
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element1">
              <h3 className="home-header08">-</h3>
              <p className="home-content05">-</p>
            </div>
            <div className="home-element2">
              <h3 className="home-header09">-</h3>
              <p className="home-content06">-</p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element3">
              <h3 className="home-header10">-</h3>
              <p className="home-content07">-</p>
            </div>
            <div className="home-element4">
              <h3 className="home-header11">-</h3>
              <p className="home-content08">
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header12">-</h3>
              <p className="home-content09">
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content10">
          <div className="home-main">
            <div className="home-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-200h.png"
                className="home-image4"
              />
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text17">
              © 2020 - 2023 NuxtTeam- All rights reserved
            </span>
            <button
              data-role="scroll-top"
              type="button"
              className="home-button1 button"
            >
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image5"
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

export default Home
