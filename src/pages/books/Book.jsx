import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

const Book = props => (
  <div className={classNames(css.book, props.className)}>
    <img src={props.src} alt={props.title} />
  </div>
)

Book.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
Book.defaultProps = {
  className: '',
}

export default Book
