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

export const LinkExternal = props => (
  <a {...props} href={props.to}>
    {props.children}
  </a>
)
LinkExternal.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
export default LinkInternal
