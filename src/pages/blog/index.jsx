import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import GatsbyLink from 'gatsby-link'

import PostModel from '../../models/Post'
import { ShortPost } from '../../components/Post'
import { BlogContainer } from '../../components/Container'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const allMarkdownRemarkEdges = get(
      this.props,
      'data.allMarkdownRemark.edges',
      []
    )
    const allJavascriptFrontmatterEdges = get(
      this.props,
      'data.allJavascriptFrontmatter.edges',
      []
    )

    const markdownPosts = allMarkdownRemarkEdges.map(({ node }) => {
      const title = get(node, 'frontmatter.title', node.fields.slug)
      const isPublished = get(node, 'frontmatter.published', false)
      const date = get(node, 'frontmatter.date')
      const slug = get(node, 'fields.slug')
      const { excerpt } = node

      return new PostModel(title, isPublished, date, slug, excerpt)
    })

    const javascriptPosts = allJavascriptFrontmatterEdges.map(({ node }) => {
      const title = get(node, 'frontmatter.title')
      const isPublished = get(node, 'frontmatter.published', false)
      const date = get(node, 'frontmatter.date')
      const slug = get(node, 'frontmatter.path')
      const excerpt = get(node, 'frontmatter.excerpt')

      return new PostModel(title, isPublished, date, `blog${slug}`, excerpt)
    })

    const posts = markdownPosts.concat(javascriptPosts)

    posts.sort((a, b) => {
      const c = new Date(a.date)
      const d = new Date(b.date)
      return c - d
    })

    return (
      <BlogContainer padding="0 0 2em">
        <Helmet title={siteTitle} />

        {posts.map(post => {
          if (post.isPublished)
            return (
              <ShortPost key={post.slug}>
                <GatsbyLink to={`${post.slug}`}>
                  <h2>{post.title}</h2>
                </GatsbyLink>
                <time>{post.date}</time>
                <p>{post.excerpt}</p>
              </ShortPost>
            )
          return null
        })}
      </BlogContainer>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query TheBlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            published
          }
        }
      }
    }
    allJavascriptFrontmatter {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
            published
          }
        }
      }
    }
  }
`
