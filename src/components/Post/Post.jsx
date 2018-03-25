import React from 'react'
import PropTypes from 'prop-types'
import { BoxedContainer } from '../Container'
import css from './index.scss'

function Post(props) {
  if (props.center)
    return (
      <BoxedContainer>
        <article className={css.post} {...props}>
          {props.children}
        </article>
      </BoxedContainer>
    )
  return <article className={css.post}>{props.children}</article>
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}
Post.defaultProps = {}

export default Post
