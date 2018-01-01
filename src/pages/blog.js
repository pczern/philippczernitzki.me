import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'


import Bio from '../components/Bio'
import Article from '../components/Article';
import {BoxedContainer} from '../components/Container';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        <BoxedContainer>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <Article key={node.fields.slug} title={title} link={node.fields.slug} date={node.frontmatter.date}>{node.excerpt}</Article>
            )
          })}
        </BoxedContainer>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
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
