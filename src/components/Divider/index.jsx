import React from 'react'
import PropTypes from 'prop-types'
import css from './index.scss'

function Divider(props) {
  return <div className={css.divider} style={{ maxWidth: props.width }} />
}

Divider.propTypes = {
  width: PropTypes.string.isRequired,
}

export default Divider
