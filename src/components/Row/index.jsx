import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

function Col(props) {
  return <div className={classNames(css.col)}>{props.children}</div>
}
Col.propTypes = {
  children: PropTypes.node,
}
Col.defaultProps = {
  children: null,
}

function Row(props) {
  return (
    <div className={classNames(css.row, css[`row--${props.cols}`])}>
      {props.children.map((child, i) => <Col key={i}>{child}</Col>)}
    </div>
  )
}

Row.propTypes = {
  cols: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default Row
