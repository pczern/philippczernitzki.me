import React from 'react'
import PropTypes from 'prop-types'

import LogoMe from '../images/code.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/index.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="__page">
        <Header logo={LogoMe} />
        <div className="__page__content">{children()}</div>
        <Footer />
      </div>
    )
  }
}

export default Template
