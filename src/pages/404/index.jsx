import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { BoxedContainer } from '../../components/Container'

const page404 = props => (
  <BoxedContainer>
    <Helmet title={`${props.data.site.siteMetadata.title} | 404`} />
    <div>Die aufgerufen Seite existiert nicht</div>
  </BoxedContainer>
)

page404.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const pageQuery = graphql`
  query FourOFourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default page404
