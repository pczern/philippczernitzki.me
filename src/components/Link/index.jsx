import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

export const LinkInternal = props => (
  <GatsbyLink {...props} to={props.to}>
    {props.children}
  </GatsbyLink>
)
LinkInternal.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const LinkExternal = props => {
  let newRel = props.rel
  if (props.target === '_blank') {
    newRel += ' noopener noreferrer'
  }
  return (
    <a {...props} target={props.target} rel={newRel} href={props.to}>
      {props.children}
    </a>
  )
}
LinkExternal.propTypes = {
  target: PropTypes.string,
  rel: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
LinkExternal.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}
export default LinkInternal
