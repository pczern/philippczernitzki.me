import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function ModalContent(props) {
  return (
    <div className={classNames(css.modal__content, props.className)}>
      {props.children}
    </div>
  )
}

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
ModalContent.defaultProps = {
  className: null,
}
export default ModalContent
