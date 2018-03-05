import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import {BlogContainer, BoxedContainer} from '../components/Container';
import Post from '../components/Post';



class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <BlogContainer>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Post>
          <h1>{post.frontmatter.title}</h1>
          <time>{post.frontmatter.date}</time>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
      </BlogContainer>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug1($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    jsFrontmatter(data: { path: { eq: $slug } }) {
      data {
        path
        title
        date(formatString: "DD MMMM, YYYY")
        excerpt
        published
      }
    }
  }
`
