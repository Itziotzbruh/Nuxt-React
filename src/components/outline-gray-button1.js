import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button1.css'

const OutlineGrayButton1 = (props) => {
  return (
    <div className="outline-gray-button1-container">
      <button className="outline-gray-button1-button Content">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton1.defaultProps = {
  button: 'Button',
}

OutlineGrayButton1.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton1
