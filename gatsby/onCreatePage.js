// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
module.exports = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // if (page.path.match(/^\//)) {
    //   // It's assumed that `landingPage.js` exists in the `/layouts/` directory
    //   page.layout = 'index'
    //
    //   // Update the page.
    //   createPage(page)
    // } else {
    //   page.layout = 'index'
    //   createPage(page)
    // }

    resolve()
  })
}
