const { createFilePath } = require('gatsby-source-filesystem')

module.exports = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'src/pages/blog/markdown-posts',
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${relativeFilePath}`,
    })
  } else if (node.internal.type === `JavascriptFrontmatter`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'src/pages/blog/javascript',
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${relativeFilePath}`,
    })
  }
}
