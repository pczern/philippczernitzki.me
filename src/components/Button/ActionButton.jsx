import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function ActionButton(props) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
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
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}
ActionButton.defaultProps = {
  invert: false,
  disabled: false,
  onClick: null,
  type: null,
}
export default ActionButton
