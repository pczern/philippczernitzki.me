import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function Row(props) {
  return (
    <div className={classNames(css.row, css[`row--${props.cols}`])}>
      {props.children}
    </div>
  )
}

Row.propTypes = {
  cols: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default Row
