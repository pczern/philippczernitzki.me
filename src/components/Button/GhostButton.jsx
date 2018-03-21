import React from 'react'
import PropTypes from 'prop-types'
import css from './index.scss'

function GhostButton(props) {
  return <button className={css.ghostButton}>{props.children}</button>
}
GhostButton.propTypes = {
  children: PropTypes.string.isRequired,
}
export default GhostButton
