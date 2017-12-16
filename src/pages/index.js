import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import styled from 'styled-components';

import Banner from '../components/Banner';
import BannerImage from '../images/code.png';

import IconBox from '../components/SmallIconBox';



import { rgba } from 'polished'
import { withTheme } from 'styled-components'
import BoxedContainer from '../components/BoxedContainer';

const InnerBanner = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  color: #FFF;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`
const ActionButton = styled.div`
  color: #222;
  border: solid 1px #F6F6F6EE;
  border-radius: 5px;
  padding: 0.75em 2.3em;
  font-weight: 300;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 5em;
  color: #F6F6F6;
`

const ActionButton2 = styled.div`
  color: #222;
  border: solid 1px #F6F6F6EE;
  border-radius: 5px;
  padding: 0.75em 2.3em;
  font-weight: 300;
  letter-spacing: 1px;
  display: inline-block;
  margin-left: auto;
  margin-top: 2em;
  color: #F6F6F6;
`

const IconBoxContainer = styled.div`
  display: flex;
  align-items: center;

  > *{
    width: 25%;

  }
`


const AndroidIconBox = styled(IconBox)`

  i{
    color: green;
  }
  figcaption{
    color: green;
  }
`;
const ActionHeadline = styled.h1`
  font-size: 3em;
  font-weight: 200;
  line-height: 2;
`
const ActionSubheadline = styled.h1`
  font-size: 2em;
  margin-bottom: 1.4em;
  font-weight: 200;
`

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Banner color={rgba(this.props.theme.background, 0.8)} src={BannerImage}>
          <InnerBanner>

            <ActionHeadline>Hello World!</ActionHeadline>
            <ActionSubheadline>Lorem ipsum dot</ActionSubheadline>
            <ActionButton>Hello</ActionButton>

          </InnerBanner>
        </Banner>
        <BoxedContainer padding={'3em'}>
          <IconBoxContainer>
            <IconBox icon={'code'}>6 Jahre Erfahrung</IconBox>
            <IconBox icon={'cogs'}>100 Technologien</IconBox>
            <IconBox icon={'code'}>6 Jahre Erfahrung</IconBox>
            <IconBox icon={'android'}>Android Zertifiziert</IconBox>
          </IconBoxContainer>
        </BoxedContainer>

      </div>
    )
  }
}

export default withTheme(Index)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
