<template>
  <div class="staf-container">
    <section class="staf-hero">
      <video
        loop
        muted
        poster="/2023-01-21_06.48.43-1500w.png"
        preload="auto"
        autoplay
        playsinline
        class="staf-video"
      ></video>
      <header data-thq="thq-navbar" class="staf-navbar">
        <img
          alt="image"
          src="/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
          class="staf-branding"
        />
        <div data-thq="thq-burger-menu" class="staf-burger-menu">
          <div class="staf-hamburger">
            <img alt="image" src="/hamburger.svg" class="staf-icon" />
          </div>
        </div>
        <div data-thq="thq-mobile-menu" class="staf-mobile-menu">
          <div data-thq="thq-mobile-menu-nav" data-role="Nav" class="staf-nav">
            <div class="staf-container1">
              <img
                alt="image"
                src="/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                class="staf-image"
              />
              <div data-thq="thq-close-menu" class="staf-menu-close">
                <svg viewBox="0 0 1024 1024" class="staf-icon1">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              class="staf-nav1"
            >
              <nuxt-link to="/" class="staf-navlink">About</nuxt-link>
              <nuxt-link to="/inv" class="staf-navlink1">Join now!</nuxt-link>
              <nuxt-link to="/hall" class="staf-navlink2">
                Minecraft SMP
              </nuxt-link>
            </nav>
            <div class="staf-container2">
              <nuxt-link to="/inv" class="staf-login button">Join Now!</nuxt-link>
            </div>
          </div>
        </div>
      </header>
      <div class="staf-hero-content">
        <div class="staf-header-container">
          <div class="staf-header">
            <h1 class="staf-heading">
              <span class="staf-text">STAFF</span>
              <br />
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div class="staf-row"></div>
    <div class="staf-row1"></div>
    <div class="staf-container3">
      <nuxt-link to="/commmunity" class="staf-navlink3">
        <div class="staf-card button">
          <div class="staf-container4">
            <h1 class="staf-text2">Mau Join?</h1>
            <div class="staf-container5">
              <outline-gray-button1 button="Join Now!"></outline-gray-button1>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="staf-footer">
      <div class="staf-content">
        <div class="staf-main">
          <div class="staf-branding1">
            <img
              alt="image"
              src="/picsart_23-04-18_20-56-05-302%5B20%5D-200h.png"
              class="staf-image1"
            />
          </div>
        </div>
        <div class="staf-bottom">
          <span class="staf-text3">
            © 2020 - 2023 NuxtTeam- All rights reserved
          </span>
        </div>
      </div>
    </div>
    <div>
      <DangerousHTML
        html="<script>
  document.addEventListener('DOMContentLoaded', function() {
    // get the element with the 'scroll-top' data-role
    const scrollTopBtn = document.querySelector('[data-role='scroll-top']');
  
    // when the element is clicked
    scrollTopBtn.addEventListener('click', function() {
      // smoothly scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  </script>
  "
      ></DangerousHTML>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.mjs'

import OutlineGrayButton1 from '../components/outline-gray-button1'

export default {
  name: 'Staf',
  components: {
    OutlineGrayButton1,
    DangerousHTML,
  },
  head: {
    title: 'staf - Nuxt',
    meta: [
      {
        property: 'og:title',
        content: 'staf - Nuxt',
      },
    ],
  },
}
</script>

<style scoped>
.staf-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
}
.staf-hero {
  width: 100%;
  height: 301px;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-fiveunits);
  flex-direction: column;
  justify-content: flex-start;
}
.staf-video {
  top: 0px;
  left: 0px;
  width: 100%;
  filter: opacity(0.6);
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.staf-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: space-between;
}
.staf-branding {
  width: 141px;
  height: 78px;
  object-fit: cover;
}
.staf-burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.staf-hamburger {
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-fourunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: space-between;
  background-color: #98c8ff;
  -webkit-tap-highlight-color: transparent;
}
.staf-hamburger:hover {
  opacity: .5;
}
.staf-icon {
  width: 60px;
  object-fit: cover;
}
.staf-mobile-menu {
  top: 0px;
  color: var(--dl-color-gray-white);
  right: -3px;
  width: 317px;
  height: 100vh;
  display: flex;
  padding: 32px;
  z-index: 100;
  position: fixed;
  transform: translateX(100%);
  transition: 0.5s;
  flex-direction: column;
  backdrop-filter: blur(20px);
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.64);
}
.staf-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.staf-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  padding-right: 725px;
  justify-content: space-between;
}
.staf-image {
  height: 2rem;
}
.staf-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.staf-icon1 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.staf-nav1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.staf-navlink {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.staf-navlink1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.staf-navlink2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.staf-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.staf-login {
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: #464646;
}
.staf-hero-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  z-index: 100;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-right: 99px;
  flex-direction: column;
  justify-content: center;
}
.staf-header-container {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.staf-header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.staf-heading {
  color: rgb(255, 255, 255);
  font-size: 100px;
  max-width: 790px;
  font-weight: 500;
}
.staf-text {
  font-size: 90px;
  font-family: Nunito;
  font-weight: 600;
}
.staf-row {
  gap: var(--dl-space-space-fiveunits6);
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.staf-row1 {
  gap: var(--dl-space-space-fiveunits6);
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.staf-container3 {
  width: 100%;
  height: 193px;
  margin: var(--dl-space-space-unit9);
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.staf-navlink3 {
  display: contents;
}
.staf-card {
  flex: 1;
  width: 255px;
  height: 183px;
  display: flex;
  padding: var(--dl-space-space-unitandahalfunit);
  position: relative;
  align-items: flex-start;
  margin-left: 45px;
  margin-right: 45px;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  background-size: cover;
  text-decoration: none;
  background-image: url('https://butwhytho.net/wp-content/uploads/2023/04/Oshi-no-Ko-Ep-1%E2%80%94-But-Why-Tho.jpg?ezimgfmt=ng:webp/ngcb1');
  -webkit-tap-highlight-color: transparent;
}
.staf-container4 {
  display: flex;
  z-index: 2;
  align-items: flex-start;
  flex-direction: column;
}
.staf-text2 {
  color: #000000;
  margin-top: var(--dl-space-space-halfunit8);
  margin-bottom: var(--dl-space-space-halfunit8);
}
.staf-container5 {
  display: flex;
  position: relative;
}
.staf-footer {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
}
.staf-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-fiveunits);
  border-color: #313133;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
  border-top-width: 1px;
}
.staf-main {
  gap: 240px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.staf-branding1 {
  gap: var(--dl-space-space-twounits);
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.staf-image1 {
  width: 120px;
  object-fit: cover;
}
.staf-bottom {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.staf-text3 {
  color: #7C7C80;
  font-size: 14px;
  line-height: 21px;
}
@media(max-width: 991px) {
  .staf-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
  }
  .staf-hero-content {
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .staf-row {
    flex-direction: column;
  }
  .staf-row1 {
    flex-direction: column;
  }
  .staf-container3 {
    width: 100%;
  }
  .staf-card {
    width: 100%;
  }
  .staf-content {
    border-top-width: 0px;
  }
  .staf-main {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .staf-branding1 {
    width: 100%;
  }
  .staf-text3 {
    color: rgb(124, 124, 128);
    font-size: 14px;
    line-height: 21px;
  }
}
@media(max-width: 767px) {
  .staf-burger-menu {
    display: flex;
  }
  .staf-heading {
    font-size: 60px;
  }
  .staf-container3 {
    margin-top: var(--dl-space-space-doubleunit);
  }
  .staf-footer {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .staf-branding {
    padding-top: var(--dl-space-space-unit);
  }
  .staf-hamburger {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-unit);
  }
  .staf-icon {
    width: 30px;
  }
  .staf-mobile-menu {
    padding: 16px;
  }
  .staf-hero-content {
    gap: var(--dl-space-space-threeunits);
  }
  .staf-heading {
    font-size: 36px;
  }
  .staf-bottom {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
    justify-content: center;
  }
}
</style>
