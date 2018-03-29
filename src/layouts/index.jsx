import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'typeface-hind/index.css'
import 'typeface-muli/index.css'
import 'typeface-raleway/index.css'
import 'typeface-roboto/index.css'
import LogoMe from '../images/code.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../css/index.scss'

function Template(props) {
  return (
    <div className="__page">
      <Helmet
        defaultTitle="Philipp Czernitzki's Blog"
        titleTemplate="%s | Philipp Czernitzki's Blog"
      />
      <Header logo={LogoMe} />
      <div className="__page__content">{props.children()}</div>
      <Footer />
    </div>
  )
}
Template.propTypes = {
  children: PropTypes.any,
}

export default Template
