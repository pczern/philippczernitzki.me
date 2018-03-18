import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BoxedContainer from './BoxedContainer'

const InnerContainer = styled.div`
  max-width: ${props => props.theme.blogWidth};
`

const BlogContainer = props => (
  <BoxedContainer>
    <InnerContainer>{props.children}</InnerContainer>
  </BoxedContainer>
)

BlogContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogContainer
