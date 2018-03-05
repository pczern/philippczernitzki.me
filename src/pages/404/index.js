import React from 'react';
import Helmet from 'react-helmet'
import {BoxedContainer} from '../../components/Container';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-family: Hind, sans-serif;
  font-weight: 400;
  color: #444;

  font-size: 1.2em;
  padding: 4em 5%;
  font-style: italic;
`
export default (props) => (
  <BoxedContainer>
    <Helmet title={`${props.data.site.siteMetadata.title} | 404`} />
    <ErrorMessage>Die aufgerufen Seite existiert nicht</ErrorMessage>
  </BoxedContainer>
)

export const pageQuery = graphql`
  query FourOFourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
