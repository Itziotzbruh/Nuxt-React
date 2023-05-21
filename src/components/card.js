import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon"></div>
      <main className="card-content">
        <h1 className="card-header">{props.Header}</h1>
        <p className="card-description">{props.Description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  rootClassName: '',
  Icon: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Header: 'Sima Mosbacher',
  IconAlt: 'image',
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
}

Card.propTypes = {
  rootClassName: PropTypes.string,
  Icon: PropTypes.string,
  Header: PropTypes.string,
  IconAlt: PropTypes.string,
  Description: PropTypes.string,
}

export default Card
