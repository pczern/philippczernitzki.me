import React from 'react'
import PropTypes from 'prop-types'
import { BoxedContainer } from '../Container'
import css from './index.scss'

const shortPostClass = css['post--short']

function Post(props) {
  if (props.center)
    return (
      <article className={shortPostClass} {...props}>
        {props.children}
      </article>
    )
  return <article className={shortPostClass}>{props.children}</article>
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post
