import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { BlogContainer } from '../components/Container'
import Post from '../components/Post'

function MarkdownPostTemplate(props) {
  const post = get(props, 'data.markdownRemark')
  const postFrontmatter = post.frontmatter
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <BlogContainer>
      <Helmet title={`${postFrontmatter.title} | ${siteTitle}`} />
      <Post>
        <h1>{postFrontmatter.title}</h1>
        <time>{postFrontmatter.date}</time>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </BlogContainer>
  )
}

export default MarkdownPostTemplate

export const pageQuery = graphql`
  query MarkdownPostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
