
import '../css/index.css';
import React from 'react'
import Link from 'gatsby-link'
import 'font-awesome/css/font-awesome.min.css';

import styled, { ThemeProvider } from 'styled-components';
import LogoMe from '../images/code.png';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PropTypes from 'prop-types';



const theme = {
  main: 'mediumseagreen',
  background: "rgb(0, 0, 0)", //"rgb(0, 234, 255)",
  maxWidth: "1100px",
  primary: "#6bd0d9",
  primaryText: "rgba(0,0,0,0.87)",
  secondaryText: "#666",

}

const Container = styled.div`


`;

const Content = styled.div`

`
Content.propTypes = {
  children: PropTypes.any
}


class Template extends React.Component {
  propTypes: {
    children: PropTypes.any
  }

  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    // if (location.pathname === rootPath) {
    //
    // } else {
    //
    // }


    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header logo={LogoMe}/>
          <Content>
            {children()}
          </Content>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}



export default Template
