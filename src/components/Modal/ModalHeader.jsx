import React from 'react'
import PropTypes from 'prop-types'
import css from './index.scss'

function ModalHeader(props) {
  return <div className={css.modal__header}>{props.children}</div>
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalHeader
