import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

const fullContainer = css['container--full']

function FullContainer(props) {
  return (
    <div
      className={classNames(fullContainer, props.className)}
      style={{
        padding: props.padding,
      }}
    >
      {props.children}
    </div>
  )
}

FullContainer.propTypes = {
  className: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
}
FullContainer.defaultProps = {
  className: null,
  padding: null,
}

export default FullContainer
