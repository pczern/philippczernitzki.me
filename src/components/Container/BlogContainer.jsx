import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

const boxedContainer = css['container--boxed']
const blogContainer = css['container--blog']

function BlogContainer(props) {
  return (
    <div className={boxedContainer}>
      <div
        className={classNames(blogContainer, props.className)}
        style={{
          padding: props.padding,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

BlogContainer.propTypes = {
  className: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
}
BlogContainer.defaultProps = {
  className: null,
  padding: null,
}

export default BlogContainer
