import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function ActionButton(props) {
  return (
    <button
      className={classNames(css.actionButton, {
        [css['actionButton--inverted']]: props.invert,
      })}
    >
      {props.children}
    </button>
  )
}
ActionButton.propTypes = {
  // eslint-disable-next-line
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
ActionButton.defaultProps = {
  invert: false,
}
export default ActionButton
