<template>
  <div class="inv-container">
    <section class="inv-hero">
      <video
        loop
        muted
        poster="/2023-01-21_06.48.43-1500w.png"
        preload="auto"
        autoplay
        playsinline
        class="inv-video"
      ></video>
      <header data-thq="thq-navbar" class="inv-navbar">
        <img
          alt="image"
          src="/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
          class="inv-branding"
        />
        <div data-thq="thq-burger-menu" class="inv-burger-menu">
          <div class="inv-hamburger">
            <img alt="image" src="/hamburger.svg" class="inv-icon" />
          </div>
        </div>
        <div data-thq="thq-mobile-menu" class="inv-mobile-menu">
          <div data-thq="thq-mobile-menu-nav" data-role="Nav" class="inv-nav">
            <div class="inv-container01">
              <img
                alt="image"
                src="/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                class="inv-image"
              />
              <div data-thq="thq-close-menu" class="inv-menu-close">
                <svg viewBox="0 0 1024 1024" class="inv-icon1">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              class="inv-nav1"
            >
              <nuxt-link to="/" class="inv-navlink">About</nuxt-link>
              <nuxt-link to="/inv" class="inv-navlink1">Join now!</nuxt-link>
              <nuxt-link to="/hall" class="inv-navlink2">Minecraft SMP</nuxt-link>
            </nav>
            <div class="inv-container02">
              <nuxt-link to="/inv" class="inv-login button">Join Now!</nuxt-link>
            </div>
          </div>
        </div>
      </header>
      <div class="inv-hero-content">
        <div class="inv-header-container">
          <div class="inv-header">
            <h1 class="inv-heading">
              <span>Join Section</span>
              <br />
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div class="inv-container03">
      <div class="inv-container04">
        <img
          alt="image"
          src="/screenshot_20230418-230106_mbwhatsapp%5B22%5D-200h.png"
          class="inv-image1"
        />
      </div>
      <div class="inv-container05">
        <h3 class="inv-text02">Nuxt Community</h3>
        <div class="inv-container06">
          <span class="inv-text03 TextSM">Minecraft Community &amp; SMP</span>
        </div>
        <div class="inv-container07">
          <a
            href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
            target="_blank"
            rel="noreferrer noopener"
            class="inv-link"
          >
            <secondary-button
              button="Whatsapp"
              class="inv-component"
            ></secondary-button>
          </a>
          <a
            href="https://discord.gg/Rb5yyGSEVv"
            target="_blank"
            rel="noreferrer noopener"
            class="inv-link1"
          >
            <primary-button
              button="Discord"
              class="inv-component1"
            ></primary-button>
          </a>
        </div>
        <span class="inv-text04">
          <span>
            Sebuah Grup Komunitas Minecraft Yang Di-accuire Oleh Nuxt Community
            Dan Kini Menjadi Satu. Gabung Sekarang!
          </span>
          <br />
        </span>
      </div>
      <div class="inv-container08"></div>
    </div>
    <div class="inv-container09">
      <div class="inv-container10">
        <img
          alt="image"
          src="/3f6c161d-62e6-48d9-a0ab-98b5f7e837a2-200h.webp"
          class="inv-image2"
        />
      </div>
      <div class="inv-container11">
        <h3 class="inv-text07">Info Minecraft Indonesia</h3>
        <div class="inv-container12">
          <span class="inv-text08">minecraftpedia.id</span>
        </div>
        <div class="inv-container13">
          <a
            href="https://instagram.com/minecraftpedia.id"
            target="_blank"
            rel="noreferrer noopener"
            class="inv-link2"
          >
            <secondary-button2
              button="INSTAGRAM"
              rootClassName="secondary-button2-root-class-name"
              class="inv-component2"
            ></secondary-button2>
          </a>
        </div>
        <span class="inv-text09">
          <span>
            Sebuah Profil Instagram Yang Memberi Info Dan Update Tentang
            Minecraft.
          </span>
          <br />
        </span>
      </div>
      <div class="inv-container14"></div>
    </div>
    <div class="inv-footer">
      <div class="inv-content">
        <div class="inv-main">
          <div class="inv-branding1">
            <img
              alt="image"
              src="/picsart_23-04-18_20-56-05-302%5B20%5D-300h.png"
              class="inv-image3"
            />
          </div>
        </div>
        <div class="inv-bottom"></div>
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

import SecondaryButton from '../components/secondary-button'
import PrimaryButton from '../components/primary-button'
import SecondaryButton2 from '../components/secondary-button2'

export default {
  name: 'Inv',
  components: {
    SecondaryButton,
    PrimaryButton,
    SecondaryButton2,
    DangerousHTML,
  },
  head: {
    title: 'Inv - Nuxt',
    meta: [
      {
        property: 'og:title',
        content: 'Inv - Nuxt',
      },
    ],
  },
}
</script>

<style scoped>
.inv-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
}
.inv-hero {
  width: 100%;
  height: 557px;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-fiveunits);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #000000;
}
.inv-video {
  top: 0px;
  left: 0px;
  width: 100%;
  filter: opacity(0.6);
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.inv-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: space-between;
}
.inv-branding {
  width: 141px;
  height: 78px;
  object-fit: cover;
}
.inv-burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inv-hamburger {
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
.inv-hamburger:hover {
  opacity: .5;
}
.inv-icon {
  width: 60px;
  object-fit: cover;
}
.inv-mobile-menu {
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
.inv-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.inv-container01 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  padding-right: 725px;
  justify-content: space-between;
}
.inv-image {
  height: 2rem;
}
.inv-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inv-icon1 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.inv-nav1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.inv-navlink {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.inv-navlink1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.inv-navlink2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.inv-container02 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.inv-login {
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: #464646;
}
.inv-hero-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  z-index: 100;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.inv-header-container {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.inv-header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.inv-heading {
  color: rgb(255, 255, 255);
  font-size: 100px;
  max-width: 790px;
  font-style: normal;
  font-weight: 500;
}
.inv-container03 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  z-index: 100;
  max-width: 1320px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  margin-top: -12rem;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  margin-bottom: 287px;
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(20px);
  background-color: rgba(39, 39, 39, 0.71);
}
.inv-container04 {
  width: 100%;
  height: 72px;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit1);
  justify-content: space-around;
}
.inv-image1 {
  width: 150px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.inv-container05 {
  width: 100%;
  height: 231px;
  display: flex;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.inv-text02 {
  color: rgb(161, 182, 203);
}
.inv-container06 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.inv-text03 {
  color: var(--dl-color-secondary-500);
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit1);
}
.inv-container07 {
  width: 196px;
  height: 75px;
  display: flex;
  align-items: flex-start;
  padding-top: 19px;
  justify-content: center;
}
.inv-link {
  display: contents;
}
.inv-component {
  text-decoration: none;
}
.inv-link1 {
  display: contents;
}
.inv-component1 {
  text-decoration: none;
}
.inv-text04 {
  color: rgb(255, 255, 255);
  width: 75%;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.625;
  margin-bottom: var(--dl-space-space-unit1);
}
.inv-container08 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-unit1);
  flex-direction: row;
  justify-content: center;
}
.inv-container09 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  z-index: 100;
  max-width: 1320px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  margin-top: -12rem;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  margin-bottom: 287px;
  flex-direction: column;
  background-color: #272727;
}
.inv-container10 {
  width: 100%;
  height: 72px;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit1);
  justify-content: space-around;
}
.inv-image2 {
  width: 150px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.inv-container11 {
  width: 100%;
  height: 231px;
  display: flex;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.inv-text07 {
  color: rgb(161, 182, 203);
}
.inv-container12 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.inv-text08 {
  color: var(--dl-color-secondary-500);
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit1);
}
.inv-container13 {
  width: 196px;
  height: 75px;
  display: flex;
  align-items: flex-start;
  padding-top: 19px;
  justify-content: center;
}
.inv-link2 {
  display: contents;
}
.inv-component2 {
  text-decoration: none;
}
.inv-text09 {
  color: rgb(255, 255, 255);
  width: 75%;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.625;
  margin-bottom: var(--dl-space-space-unit1);
}
.inv-container14 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-unit1);
  flex-direction: row;
  justify-content: center;
}
.inv-footer {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px #2d2d2d;
  align-items: flex-start;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
  background-color: #000000;
}
.inv-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  height: 297px;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-fiveunits);
  border-color: #313133;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
  border-top-width: 1px;
}
.inv-main {
  gap: 240px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.inv-branding1 {
  gap: var(--dl-space-space-twounits);
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.inv-image3 {
  width: 120px;
  object-fit: cover;
}
.inv-bottom {
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .inv-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
  }
  .inv-hero-content {
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: 111px;
  }
  .inv-container04 {
    flex-direction: column;
  }
  .inv-container10 {
    flex-direction: column;
  }
  .inv-content {
    border-top-width: 0px;
  }
  .inv-main {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .inv-branding1 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .inv-burger-menu {
    display: flex;
  }
  .inv-heading {
    font-size: 60px;
  }
  .inv-footer {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .inv-branding {
    padding-top: var(--dl-space-space-unit);
  }
  .inv-hamburger {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-unit);
  }
  .inv-icon {
    width: 30px;
  }
  .inv-mobile-menu {
    padding: 16px;
  }
  .inv-hero-content {
    gap: var(--dl-space-space-threeunits);
  }
  .inv-heading {
    font-size: 36px;
  }
  .inv-container03 {
    height: 387px;
  }
  .inv-container09 {
    height: 387px;
  }
  .inv-bottom {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
    justify-content: center;
  }
}
</style>
