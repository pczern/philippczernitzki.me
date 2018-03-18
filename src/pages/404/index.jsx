import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { BoxedContainer } from '../../components/Container'

const ErrorMessage = styled.p`
  font-family: Hind, sans-serif;
  font-weight: 400;
  color: #444;

  font-size: 1.2em;
  padding: 4em 5%;
  font-style: italic;
`
const page404 = props => (
  <BoxedContainer>
    <Helmet title={`${props.data.site.siteMetadata.title} | 404`} />
    <ErrorMessage>Die aufgerufen Seite existiert nicht</ErrorMessage>
  </BoxedContainer>
)

page404.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const pageQuery = graphql`
  query FourOFourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default page404
