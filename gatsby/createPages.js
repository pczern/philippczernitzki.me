const Promise = require('bluebird')
const _ = require('lodash')
const path = require('path')

module.exports = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/markdown-post.jsx')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    published
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        if (result.data)
          _.each(result.data.allMarkdownRemark.edges, edge => {
            console.log(edge.node.fields.slug)
            if (edge.node.frontmatter.published)
              createPage({
                path: `${edge.node.fields.slug}`,
                component: blogPost,
                context: {
                  slug: edge.node.fields.slug,
                },
              })
          })
        // Only used if we wanted to create pages from javascriptFrontmatter,
        // but then we would have no JavaScript page and we want a JavaScript page
        // the templates component (see 'component' in createPage below) can't process or get our React component
        // _.each(result.data.allJavascriptFrontmatter.edges, edge => {
        //   console.log(edge.node)
        //   if (edge.node.frontmatter.published)
        //     createPage({
        //       path: edge.node.frontmatter.path,
        //       component: edge.node.frontmatter.component,
        //       context: {
        //         slug: edge.node.frontmatter.path,
        //       },
        //     })
        // })
      })
    )
  })
}
