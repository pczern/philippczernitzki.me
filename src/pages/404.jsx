import React from 'react'
import Helmet from 'react-helmet'
import { BlogContainer } from '../components/Container'
import Post from '../components/Post'
import { LinkInternal } from '../components/Link'

const NotFoundPage = () => (
  <BlogContainer>
    <Helmet>
      <title>404</title>
    </Helmet>
    <Post>
      <h1>Not found - 404 Error</h1>
      <p>
        You just hit a route that doesn&#39;t exist... don&apos;t worry, you can
        always go back to the <LinkInternal to="/">start page</LinkInternal>.
      </p>
    </Post>
  </BlogContainer>
)

export default NotFoundPage
