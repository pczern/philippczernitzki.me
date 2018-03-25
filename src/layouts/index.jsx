import React from 'react'
import PropTypes from 'prop-types'

import LogoMe from '../images/code.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/index.scss'

function Template(props) {
  return (
    <div className="__page">
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
