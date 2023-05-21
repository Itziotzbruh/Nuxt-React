import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button21.css'

const OutlineGrayButton21 = (props) => {
  return (
    <div className={`outline-gray-button21-container ${props.rootClassName} `}>
      <button className="outline-gray-button21-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton21.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

OutlineGrayButton21.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OutlineGrayButton21
