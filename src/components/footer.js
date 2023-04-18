import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-container01">
        <div className="footer-container02">
          <h1 className="footer-text">Ikuti Kami!</h1>
          <div className="footer-container03">
            <div className="footer-container04">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="footer-image"
              />
            </div>
            <a
              href="https://instagram.com/mcinfo_id"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <div className="footer-container05">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="footer-image1"
                />
              </div>
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <div className="footer-container06">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="footer-image2"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-container07">
          <div className="footer-container08">
            <span className="footer-text1 TextXS">Lainnya</span>
            <a
              href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2 TextSM"
            >
              Whatsapp Community
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link3 TextSM"
            >
              Discord
            </a>
            <a
              href="https://instagram.com/mcinfo_id"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link4 TextSM"
            >
              Instagram
            </a>
            <span className="footer-text2 TextSM">Home</span>
          </div>
        </div>
      </div>
      <div className="footer-container09"></div>
      <span className="footer-text3">
        <span className="footer-text4 TextSM">
          Copyright © 2023-2024 NuxtCommunity&amp;NutxTeam
        </span>
        <br></br>
        <span>NutxCommunity Is Not Associated To Mojang AB</span>
        <br></br>
      </span>
    </div>
  )
}

Footer.defaultProps = {
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  image_alt2: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
}

Footer.propTypes = {
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Footer
