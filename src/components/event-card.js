import React from 'react'

import PropTypes from 'prop-types'

import './event-card.css'

const EventCard = (props) => {
  return (
    <div className={`event-card-event-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="event-card-image"
      />
      <div className="event-card-vertical-line"></div>
      <div className="event-card-container">
        <span className="event-card-title">{props.new_prop}</span>
        <span className="event-card-text">{props.text}</span>
      </div>
    </div>
  )
}

EventCard.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  rootClassName: '',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  new_prop: 'Inbound Marketing Secrets',
}

EventCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  new_prop: PropTypes.string,
}

export default EventCard
