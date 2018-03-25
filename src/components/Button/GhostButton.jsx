import React from 'react'
import PropTypes from 'prop-types'
import css from './index.scss'

function GhostButton(props) {
  return (
    <button {...props} className={css.ghostButton}>
      {props.children}
    </button>
  )
}
GhostButton.propTypes = {
  children: PropTypes.node.isRequired,
}
export default GhostButton
