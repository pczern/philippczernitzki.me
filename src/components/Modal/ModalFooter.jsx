import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function ModalFooter(props) {
  return (
    <div className={classNames(css.modal__footer, props.className)}>
      {props.children}
    </div>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
ModalFooter.defaultProps = {
  className: null,
}

export default ModalFooter
