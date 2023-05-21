import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import OutlineGrayButton1 from '../components/outline-gray-button1'
import './hall.css'

const Hall = (props) => {
  return (
    <div className="hall-container">
      <Helmet>
        <title>Hall - Nuxt</title>
        <meta property="og:title" content="Hall - Nuxt" />
      </Helmet>
      <section className="hall-hero">
        <video
          loop
          muted
          poster="/playground_assets/2023-01-21_06.48.43-1500w.png"
          preload="auto"
          autoPlay
          playsInline
          className="hall-video"
        ></video>
        <header data-thq="thq-navbar" className="hall-navbar">
          <img
            alt="image"
            src="/playground_assets/picsart_23-04-20_13-52-31-454-200h.png"
            className="hall-branding"
          />
          <div data-thq="thq-burger-menu" className="hall-burger-menu">
            <div className="hall-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="hall-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="hall-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="hall-nav"
            >
              <div className="hall-container01">
                <img
                  alt="image"
                  src="/playground_assets/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                  className="hall-image"
                />
                <div data-thq="thq-close-menu" className="hall-menu-close">
                  <svg viewBox="0 0 1024 1024" className="hall-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="hall-nav1"
              >
                <Link to="/" className="hall-navlink">
                  About
                </Link>
                <Link to="/inv" className="hall-navlink1">
                  Join now!
                </Link>
                <Link to="/hall" className="hall-navlink2">
                  Minecraft SMP
                </Link>
              </nav>
              <div className="hall-container02">
                <Link to="/inv" className="hall-login button">
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="hall-hero-content">
          <div className="hall-header-container">
            <div className="hall-header">
              <h1 className="hall-heading">
                <span className="hall-text">React.</span>
                <br></br>
              </h1>
            </div>
            <p className="hall-caption">SMP </p>
          </div>
        </div>
      </section>
      <section className="hall-note">
        <h2 className="hall-caption1">
          Welcome to React SMP! &quot;Not&quot; best in the world but we try to
          improving oveer and over.
        </h2>
      </section>
      <section className="hall-get-started">
        <div className="hall-header-container1">
          <div className="hall-button"></div>
        </div>
        <div className="hall-card">
          <h1 className="hall-text02">Lah, klo gw join dapat apa? V;</h1>
          <span className="hall-text03">
            Pastinya, kamu bisa bermain server ini:)
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/2023-01-21_06.49.35-800w.png"
          className="hall-image1"
        />
      </section>
      <section className="hall-experience">
        <div className="hall-content">
          <div className="hall-header01">
            <div className="hall-header-container2">
              <div className="hall-header02">
                <h2 className="hall-heading1">Apa YANG kita punya</h2>
              </div>
            </div>
            <div className="hall-checkmarks">
              <div className="hall-check">
                <div className="hall-mark">
                  <svg viewBox="0 0 1024 1024" className="hall-icon03">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="hall-text04">
                  Tidak adanya konten berbau 18+
                </span>
              </div>
              <div className="hall-check1">
                <div className="hall-mark1">
                  <svg viewBox="0 0 1024 1024" className="hall-icon05">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="hall-text05">Cross-Play Based</span>
              </div>
              <div className="hall-check2">
                <div className="hall-mark2">
                  <svg viewBox="0 0 1024 1024" className="hall-icon07">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="hall-text06">
                  Best Minecraft smp experience
                </span>
              </div>
              <div className="hall-check3">
                <div className="hall-mark3">
                  <svg viewBox="0 0 1024 1024" className="hall-icon09">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="hall-text07">Up to Date</span>
              </div>
              <div className="hall-check4">
                <div className="hall-mark4">
                  <svg viewBox="0 0 1024 1024" className="hall-icon11">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="hall-text08">Secure. Protect</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hall-images"></div>
      </section>
      <div className="hall-container03">
        <div className="hall-card1">
          <div className="hall-container04">
            <h1 className="hall-text09">Plugins Tutorial</h1>
            <span className="hall-text10">
              Bingung cara pakai pluginnya? Ayo baca tutorialnya biar paham!
            </span>
            <div className="hall-container05">
              <button className="hall-button1 button">
                <span className="hall-text11">Read more</span>
                <svg viewBox="0 0 1024 1024" className="hall-icon13">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hall-container06"></div>
        </div>
      </div>
      <div className="hall-container07">
        <div className="hall-card2">
          <div className="hall-container08">
            <h1 className="hall-text12">Staff Profile</h1>
            <span className="hall-text13">Do u wanna see em? come here!</span>
            <div className="hall-container09">
              <button className="hall-button2 button">
                <span className="hall-text14">Read more</span>
                <svg viewBox="0 0 1024 1024" className="hall-icon15">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hall-container10"></div>
        </div>
      </div>
      <div className="hall-container11">
        <Link to="/commmunity" className="hall-navlink3">
          <div className="hall-card3 button">
            <div className="hall-container12">
              <h1 className="hall-text15">Mau Join?</h1>
              <div className="hall-container13">
                <OutlineGrayButton1 button="Join Now!"></OutlineGrayButton1>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <section className="hall-faq">
        <div className="hall-header03">
          <h2 className="hall-heading2">F.A.Q</h2>
        </div>
        <div className="hall-content01">
          <div className="hall-column">
            <div className="hall-element">
              <h3 className="hall-header04">
                Gimana nih cara pakai pluginnya?
              </h3>
              <p className="hall-content02">
                Kamu bisa mengecek &quot;plugin&quot; section untuk melihat
                tutorial!
              </p>
            </div>
            <div className="hall-element1">
              <h3 className="hall-header05">
                Servernya bayar ga? ini realm atau server?
              </h3>
              <p className="hall-content03">ini server bang :v</p>
            </div>
          </div>
        </div>
      </section>
      <div className="hall-footer">
        <div className="hall-content04">
          <div className="hall-main">
            <div className="hall-branding1">
              <img
                alt="image"
                src="/playground_assets/picsart_23-04-18_20-56-05-302%5B20%5D-200h.png"
                className="hall-image2"
              />
            </div>
          </div>
          <div className="hall-bottom">
            <span className="hall-text16">
              © 2020 - 2023 NuxtTeam- All rights reserved
            </span>
          </div>
        </div>
      </div>
      <section className="hall-faq1">
        <h2 className="hall-header06">We have all the answers</h2>
        <div className="hall-accordion">
          <div
            data-role="accordion-container"
            className="hall-element2 accordion1"
          >
            <div className="hall-content05">
              <span className="hall-header07">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span data-role="accordion-content" className="hall-description">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="hall-icon-container">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="hall-icon17"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="hall-icon19"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="hall-element3 accordion1"
          >
            <div className="hall-content06">
              <span className="hall-header08">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </span>
              <span data-role="accordion-content" className="hall-description1">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="hall-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="hall-icon21"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="hall-icon23"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="hall-element4 accordion1"
          >
            <div className="hall-content07">
              <span className="hall-header09">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </span>
              <span data-role="accordion-content" className="hall-description2">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="hall-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="hall-icon25"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="hall-icon27"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="hall-element5 accordion1"
          >
            <div className="hall-content08">
              <span className="hall-header10">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span data-role="accordion-content" className="hall-description3">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="hall-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="hall-icon29"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="hall-icon31"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="hall-element6 accordion1"
          >
            <div className="hall-content09">
              <span className="hall-header11">
                Incididunt ut labore et dolore?
              </span>
              <span data-role="accordion-content" className="hall-description4">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="hall-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="hall-icon33"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="hall-icon35"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hall
