import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button2.css'

const OutlineGrayButton2 = (props) => {
  return (
    <div className={`outline-gray-button2-container ${props.rootClassName} `}>
      <button className="outline-gray-button2-button ButtonSmall button">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton2.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineGrayButton2.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineGrayButton2
