
import React from 'react'
import Link from 'gatsby-link'

import Helmet from 'react-helmet'

import '../css/index.css';
import 'font-awesome/css/font-awesome.min.css';
import LogoMe from '../images/code.png';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
console.log('ho');
const theme = {
  main: 'mediumseagreen',
  background: "rgb(0, 0, 0)", //"rgb(0, 234, 255)",
  maxWidth: "1100px",
  primary: "#0079B1",
  primaryText: "#888",
  primaryHeadline: "#222",
  secondaryHeadline: "#616161",
  secondaryText: "#666",


}
const Container = styled.div`

`;

// const TemplateWrapper = ({ children }) => (
//   <ThemeProvider theme={theme}>
//     <Container>
//       <Helmet
//         title="Gatsby + reactstrap Demo"
//         meta={[
//           { name: "description", content: "Gatsby + reactstrap Demo" },
//           { name: "keywords", content: "Gatsby.js, reactstrap, Bootstrap 4" }
//         ]}
//       />
//       <Header />
//       <div
//         style={{
//           margin: "0 auto",
//           maxWidth: 960,
//           padding: "0px 1.0875rem 1.45rem",
//           paddingTop: "1.45rem"
//         }}
//       >
//         {children()}
//       </div>
//       <div className="footer">
//         <div className="float-left">
//           <p>This is the layout footer...</p>
//         </div>
//         <div className="float-right">
//           <p>Enjoy!</p>
//         </div>
//       </div>
//     </Container>
//   </ThemeProvider>
// );
//
// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// }

// export default TemplateWrapper
//
// const Container = styled.div`
//
//
// `;

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
      <div>
        <ThemeProvider theme={theme}>
          <Container>
            <Header logo={LogoMe}/>
            <Content className="main-content">
              {children()}
            </Content>
            <Footer />
          </Container>
        </ThemeProvider>
      </div>
    )
  }
}



export default Template
