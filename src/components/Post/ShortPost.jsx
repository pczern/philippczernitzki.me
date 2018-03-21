import React from 'react'
import PropTypes from 'prop-types'
import { BoxedContainer } from '../Container'
import css from './index.scss'

const shortPostClass = css['post--short']

function Post(props) {
  if (props.center)
    return (
      <BoxedContainer>
        <article className={shortPostClass} {...props}>
          {props.children}
        </article>
      </BoxedContainer>
    )
  return <article className={shortPostClass}>{props.children}</article>
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
}
Post.defaultProps = {
  center: true,
}

export default Post
