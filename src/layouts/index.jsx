import React from 'react'
import PropTypes from 'prop-types'

import LogoMe from '../images/code.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/index.scss'

class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <div className="__page">
        <Header logo={LogoMe} />
        <main className="__page__content">{this.props.children()}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
