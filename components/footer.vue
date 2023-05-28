<template>
  <div class="footer-container">
    <div class="footer-container01">
      <div class="footer-container02">
        <h1 class="footer-text">Ikuti Kami!</h1>
        <div class="footer-container03">
          <div class="footer-container04">
            <img :alt="image_alt" :src="image_src" class="footer-image" />
          </div>
          <a
            href="https://instagram.com/mcinfo_id"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link"
          >
            <div class="footer-container05">
              <img :alt="image_alt1" :src="image_src1" class="footer-image1" />
            </div>
          </a>
          <a
            href="https://discord.gg/Rb5yyGSEVv"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link1"
          >
            <div class="footer-container06">
              <img :alt="image_alt2" :src="image_src2" class="footer-image2" />
            </div>
          </a>
        </div>
      </div>
      <div class="footer-container07">
        <div class="footer-container08">
          <span class="footer-text1 TextXS">Lainnya</span>
          <a
            href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link2 TextSM"
          >
            Whatsapp Community
          </a>
          <a
            href="https://discord.gg/Rb5yyGSEVv"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link3 TextSM"
          >
            Discord
          </a>
          <a
            href="https://instagram.com/mcinfo_id"
            target="_blank"
            rel="noreferrer noopener"
            class="footer-link4 TextSM"
          >
            Instagram
          </a>
          <span class="footer-text2 TextSM">Home</span>
        </div>
      </div>
    </div>
    <div class="footer-container09"></div>
    <span class="footer-text3">
      <span class="footer-text4 TextSM">
        Copyright © 2023-2024 NuxtCommunity&amp;NutxTeam
      </span>
      <br />
      <span>NutxCommunity Is Not Associated To Mojang AB</span>
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    image_src2: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-pimary-900);
}
.footer-container01 {
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.footer-container02 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-text {
  color: var(--dl-color-secondary-400);
  margin-top: var(--dl-space-space-unit1);
  font-weight: 600;
}
.footer-container03 {
  display: flex;
  margin-top: var(--dl-space-space-unitandhalf);
  align-items: flex-start;
  flex-direction: row;
}
.footer-container04 {
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.footer-image {
  width: 30px;
  height: 35px;
  object-fit: cover;
}
.footer-link {
  display: contents;
}
.footer-container05 {
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  margin-left: var(--dl-space-space-halfunit1);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.footer-image1 {
  width: 25px;
  height: 50%;
  object-fit: cover;
}
.footer-link1 {
  display: contents;
}
.footer-container06 {
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  margin-left: var(--dl-space-space-halfunit1);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
}
.footer-image2 {
  width: 35px;
  height: 32px;
  object-fit: cover;
}
.footer-container07 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.footer-container08 {
  width: 238px;
  display: flex;
  align-items: flex-start;
  margin-right: 6rem;
  flex-direction: column;
}
.footer-text1 {
  color: var(--dl-color-secondary-400);
  font-weight: 600;
  padding-bottom: var(--dl-space-space-halfunit1);
}
.footer-link2 {
  color: var(--dl-color-secondary-500);
  padding-bottom: var(--dl-space-space-halfunit1);
  text-decoration: none;
}
.footer-link3 {
  color: var(--dl-color-secondary-500);
  padding-bottom: var(--dl-space-space-halfunit1);
  text-decoration: none;
}
.footer-link4 {
  color: var(--dl-color-secondary-500);
  padding-bottom: var(--dl-space-space-halfunit1);
  text-decoration: none;
}
.footer-text2 {
  color: var(--dl-color-secondary-500);
  text-decoration: none;
}
.footer-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: 1px;
  display: flex;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: column;
  background-color: #e3e8efff;
}
.footer-text3 {
  color: var(--dl-color-secondary-500);
  align-self: center;
}
.footer-text4 {
  align-self: center;
}
@media(max-width: 991px) {
  .footer-container01 {
    align-items: center;
    flex-direction: column;
  }
  .footer-container02 {
    align-items: center;
    margin-bottom: var(--dl-space-space-doubleunit);
  }
  .footer-container07 {
    width: 238px;
  }
  .footer-container08 {
    width: 372px;
    height: 175px;
    align-items: center;
    margin-right: 0px;
    padding-left: 0px;
  }
}
@media(max-width: 767px) {
  .footer-container07 {
    align-items: center;
    flex-direction: column;
  }
  .footer-container08 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-doubleunit);
  }
}
@media(max-width: 479px) {
  .footer-image {
    width: 29px;
    height: 27px;
  }
  .footer-image1 {
    width: 25px;
    height: 26px;
  }
  .footer-image2 {
    width: 37px;
    height: 31px;
  }
  .footer-text3 {
    color: var(--dl-color-secondary-500);
    text-align: center;
  }
}
</style>
