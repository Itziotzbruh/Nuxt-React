import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button2.css'

const SecondaryButton2 = (props) => {
  return (
    <div className={`secondary-button2-container ${props.rootClassName} `}>
      <button className="secondary-button2-button TextXS button">
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton2.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SecondaryButton2.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButton2
