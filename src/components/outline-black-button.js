import React from 'react'

import PropTypes from 'prop-types'

import './outline-black-button.css'

const OutlineBlackButton = (props) => {
  return (
    <div className="outline-black-button-container">
      <button className="outline-black-button-button button ButtonSmall">
        {props.buton}
      </button>
    </div>
  )
}

OutlineBlackButton.defaultProps = {
  buton: 'Button',
}

OutlineBlackButton.propTypes = {
  buton: PropTypes.string,
}

export default OutlineBlackButton
