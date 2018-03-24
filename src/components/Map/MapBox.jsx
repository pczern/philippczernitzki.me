import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function MapBox(props) {
  return (
    <div className={classNames(css.mapBox, props.className)}>
      {props.children}
    </div>
  )
}

MapBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
MapBox.defaultProps = {
  className: null,
}

export default MapBox
