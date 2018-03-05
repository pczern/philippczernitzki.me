const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter{
                    published
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            allJsFrontmatter{
              edges {
                node {
                  data {
                    path
                    title
                    date(formatString: "DD MMMM, YYYY")
                    excerpt
                    published
                  }
                }
              }
            }
          }




        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          console.log(edge.node);
          if(edge.node.frontmatter.published)
          createPage({
            path: edge.node.fields.slug,
            component: blogPost,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        })
        _.each(result.data.allJsFrontmatter.edges, edge => {
          console.log(edge.node);
          if(edge.node.data.published)
          createPage({
            path: edge.node.data.path,
            component: blogPost,
            context: {
              slug: edge.node.data.path,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    console.log(value);
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\//)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "index";

      // Update the page.
      createPage(page);
    }else{
      page.layout = "index"
      createPage(page);
    }

    resolve();
  });
};
