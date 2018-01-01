import React from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components';
import LogoMe from '../images/me.png';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Article from '../containers/Article';


const theme = {
  main: 'mediumseagreen',
  maxWidth: 3000
}

const Container = styled.div`
`;



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }




    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header logo={LogoMe}/>
          <Article>
            {children()}
          </Article>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}

export default Template
