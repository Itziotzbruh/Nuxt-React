<template>
  <div class="commmunity-container">
    <section class="commmunity-hero">
      <video
        loop
        muted
        poster="/2023-01-21_06.48.43-1300h.png"
        preload="auto"
        autoplay
        playsinline
        class="commmunity-video"
      ></video>
      <header data-thq="thq-navbar" class="commmunity-navbar">
        <img
          alt="image"
          src="/picsart_23-04-18_20-44-33-328%5B19%5D-200h.png"
          class="commmunity-branding"
        />
        <div data-thq="thq-burger-menu" class="commmunity-burger-menu">
          <div class="commmunity-hamburger">
            <img alt="image" src="/hamburger.svg" class="commmunity-icon" />
          </div>
        </div>
        <div data-thq="thq-mobile-menu" class="commmunity-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            class="commmunity-nav"
          >
            <div class="commmunity-container01">
              <img
                alt="image"
                src="/picsart_23-04-18_20-42-00-974%5B21%5D-1500h.png"
                class="commmunity-image"
              />
              <div data-thq="thq-close-menu" class="commmunity-menu-close">
                <svg viewBox="0 0 1024 1024" class="commmunity-icon1">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              class="commmunity-nav1"
            >
              <nuxt-link to="/" class="commmunity-navlink">About</nuxt-link>
              <nuxt-link to="/inv" class="commmunity-navlink1">
                Join now!
              </nuxt-link>
              <nuxt-link to="/hall" class="commmunity-navlink2">
                Minecraft SMP
              </nuxt-link>
            </nav>
            <div class="commmunity-container02">
              <nuxt-link to="/inv" class="commmunity-login button">
                Join Now!
              </nuxt-link>
            </div>
          </div>
        </div>
      </header>
      <div class="commmunity-hero-content">
        <div class="commmunity-header-container">
          <div class="commmunity-header">
            <h1 class="commmunity-heading">
              <span>Join Section</span>
              <br />
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div class="commmunity-container03">
      <div class="commmunity-container04">
        <img
          alt="image"
          src="/screenshot_20230418-230106_mbwhatsapp%5B22%5D-200h.png"
          class="commmunity-image1"
        />
      </div>
      <div class="commmunity-container05">
        <h3 class="commmunity-text2">Nuxt Community</h3>
        <div class="commmunity-container06"></div>
        <span class="commmunity-text3">
          <span>
            Sebuah Grup Komunitas Minecraft Yang Di-accuire Oleh Nuxt Community
            Dan Kini Menjadi Satu. Gabung Sekarang!
          </span>
          <br />
        </span>
      </div>
    </div>
    <div class="commmunity-container07">
      <div class="commmunity-card button">
        <div class="commmunity-container08">
          <h1 class="commmunity-text6">Whatsapp</h1>
          <div class="commmunity-container09"></div>
        </div>
        <a
          href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
          target="_blank"
          rel="noreferrer noopener"
          class="commmunity-link"
        >
          <div class="commmunity-container10 button"></div>
        </a>
      </div>
    </div>
    <div class="commmunity-container11">
      <div class="commmunity-card1 button">
        <div class="commmunity-container12">
          <h1 class="commmunity-text7">Discord</h1>
          <div class="commmunity-container13"></div>
        </div>
        <a
          href="https:// discord.gg/Rb5yyGSEVv"
          target="_blank"
          rel="noreferrer noopener"
          class="commmunity-link1"
        >
          <div class="commmunity-container14 button"></div>
        </a>
      </div>
    </div>
    <div class="commmunity-footer">
      <div class="commmunity-content">
        <div class="commmunity-main">
          <div class="commmunity-branding1">
            <img
              alt="image"
              src="/picsart_23-04-18_20-56-05-302%5B20%5D-300h.png"
              class="commmunity-image2"
            />
          </div>
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

export default {
  name: 'Commmunity',
  components: {
    DangerousHTML,
  },
  head: {
    title: 'Commmunity - Nuxt',
    meta: [
      {
        property: 'og:title',
        content: 'Commmunity - Nuxt',
      },
    ],
  },
}
</script>

<style scoped>
.commmunity-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
}
.commmunity-hero {
  width: 100%;
  height: 650px;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-fiveunits);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #000000;
}
.commmunity-video {
  top: 0px;
  left: 0px;
  width: 100%;
  filter: opacity(0.6);
  height: 1207px;
  position: absolute;
  object-fit: cover;
}
.commmunity-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: space-between;
}
.commmunity-branding {
  width: 141px;
  height: 78px;
  object-fit: cover;
}
.commmunity-burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.commmunity-hamburger {
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
.commmunity-hamburger:hover {
  opacity: .5;
}
.commmunity-icon {
  width: 60px;
  object-fit: cover;
  -webkit-tap-highlight-color: transparent;
}
.commmunity-mobile-menu {
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
.commmunity-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.commmunity-container01 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  padding-right: 725px;
  justify-content: space-between;
}
.commmunity-image {
  height: 2rem;
}
.commmunity-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.commmunity-icon1 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.commmunity-nav1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.commmunity-navlink {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.commmunity-navlink1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.commmunity-navlink2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.commmunity-container02 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.commmunity-login {
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: #464646;
}
.commmunity-hero-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  height: 691px;
  display: flex;
  z-index: 100;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.commmunity-header-container {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.commmunity-header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.commmunity-heading {
  color: rgb(255, 255, 255);
  font-size: 100px;
  max-width: 790px;
  font-style: normal;
  font-weight: 500;
}
.commmunity-container03 {
  width: 90%;
  height: 262px;
  display: flex;
  z-index: 100;
  max-width: 1320px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  margin-top: -12rem;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(20px);
  background-color: rgba(39, 39, 39, 0.71);
}
.commmunity-container04 {
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
.commmunity-image1 {
  width: 150px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.commmunity-container05 {
  width: 100%;
  height: 231px;
  display: flex;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.commmunity-text2 {
  color: rgb(161, 182, 203);
}
.commmunity-container06 {
  flex: 0 0 auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.commmunity-text3 {
  color: rgb(255, 255, 255);
  width: 75%;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.625;
  margin-bottom: var(--dl-space-space-unit1);
}
.commmunity-container07 {
  flex: 1;
  width: 100%;
  margin: var(--dl-space-space-unit9);
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.commmunity-card {
  flex: 1;
  width: 255px;
  display: flex;
  padding: var(--dl-space-space-unitandahalfunit);
  position: relative;
  align-items: flex-start;
  margin-left: 45px;
  margin-right: 45px;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  background-size: cover;
  background-image: url("/minecraft-1500w.jpg");
  -webkit-tap-highlight-color: transparent;
}
.commmunity-container08 {
  display: flex;
  z-index: 2;
  align-items: flex-start;
  flex-direction: column;
}
.commmunity-text6 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit8);
  margin-bottom: var(--dl-space-space-halfunit8);
}
.commmunity-container09 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
}
.commmunity-link {
  display: contents;
}
.commmunity-container10 {
  top: auto;
  flex: 0 0 auto;
  left: 0px;
  right: auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  bottom: 0px;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: var(--dl-space-space-unit9);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  text-decoration: none;
  background-color: rgba(0,0,0,.4);
  -webkit-tap-highlight-color: transparent;
}
.commmunity-container11 {
  flex: 1;
  width: 100%;
  margin: var(--dl-space-space-unit9);
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.commmunity-card1 {
  flex: 1;
  width: 255px;
  display: flex;
  padding: var(--dl-space-space-unitandahalfunit);
  position: relative;
  align-items: flex-start;
  margin-left: 45px;
  margin-right: 45px;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  background-size: cover;
  background-image: url('https://wallpapers.com/images/high/minecraft-great-cave-walls-forest-hd-mm9b3bqe6qc6s96f.webp');
  -webkit-tap-highlight-color: transparent;
}
.commmunity-container12 {
  display: flex;
  z-index: 2;
  align-items: flex-start;
  flex-direction: column;
}
.commmunity-text7 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit8);
  margin-bottom: var(--dl-space-space-halfunit8);
}
.commmunity-container13 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
}
.commmunity-link1 {
  display: contents;
}
.commmunity-container14 {
  top: auto;
  flex: 0 0 auto;
  left: 0px;
  right: auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  bottom: 0px;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: var(--dl-space-space-unit9);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  text-decoration: none;
  background-color: rgba(0,0,0,.4);
  -webkit-tap-highlight-color: transparent;
}
.commmunity-footer {
  width: 100%;
  height: 370px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px #2d2d2d;
  align-items: flex-start;
  padding-top: 116px;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
  background-color: #000000;
}
.commmunity-content {
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
.commmunity-main {
  gap: 240px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.commmunity-branding1 {
  gap: var(--dl-space-space-twounits);
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.commmunity-image2 {
  width: 120px;
  object-fit: cover;
}
@media(max-width: 991px) {
  .commmunity-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
  }
  .commmunity-video {
    height: 1056px;
  }
  .commmunity-hero-content {
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: 111px;
  }
  .commmunity-container04 {
    flex-direction: column;
  }
  .commmunity-container07 {
    width: 100%;
  }
  .commmunity-card {
    width: 100%;
    background-size: cover;
    background-image: url("/minecraft-1500w.jpg");
  }
  .commmunity-text6 {
    color: var(--dl-color-gray-white);
  }
  .commmunity-container11 {
    width: 100%;
  }
  .commmunity-card1 {
    width: 100%;
    background-size: cover;
    background-image: url('https://wallpapers.com/images/high/minecraft-great-cave-walls-forest-hd-mm9b3bqe6qc6s96f.webp');
  }
  .commmunity-text7 {
    color: var(--dl-color-gray-white);
  }
  .commmunity-content {
    border-top-width: 0px;
  }
  .commmunity-main {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .commmunity-branding1 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .commmunity-burger-menu {
    display: flex;
  }
  .commmunity-heading {
    font-size: 60px;
  }
  .commmunity-container07 {
    margin-top: var(--dl-space-space-doubleunit);
  }
  .commmunity-container11 {
    margin-top: var(--dl-space-space-doubleunit);
  }
  .commmunity-footer {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .commmunity-branding {
    padding-top: var(--dl-space-space-unit);
  }
  .commmunity-hamburger {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-unit);
  }
  .commmunity-icon {
    width: 30px;
  }
  .commmunity-mobile-menu {
    padding: 16px;
  }
  .commmunity-hero-content {
    gap: var(--dl-space-space-threeunits);
  }
  .commmunity-heading {
    font-size: 36px;
  }
  .commmunity-container03 {
    height: 387px;
  }
}
</style>
