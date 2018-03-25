import React from 'react'
import PropTypes from 'prop-types'
import { ActionButton } from '../Button'

function ModalButton(props) {
  return (
    <ActionButton {...props} className={props.className}>
      {props.children}
    </ActionButton>
  )
}

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
ModalButton.defaultProps = {
  className: null,
}

export default ModalButton
