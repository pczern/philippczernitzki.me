import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

const boxedContainerClass = css['container--boxed']

function BoxedContainer(props) {
  return (
    <div
      className={classNames(boxedContainerClass, props.className)}
      style={{
        padding: props.padding,
      }}
    >
      {props.children}
    </div>
  )
}

BoxedContainer.propTypes = {
  className: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
}
BoxedContainer.defaultProps = {
  className: null,
  padding: null,
}

export default BoxedContainer
