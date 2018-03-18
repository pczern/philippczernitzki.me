import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { rgba } from 'polished'

import LogoMe from '../images/code.png'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import '../css/index.css'

const theme = {
  main: 'mediumseagreen',
  background: 'rgb(0, 0, 0)', // "rgb(0, 234, 255)",
  maxWidth: '1100px',
  blogWidth: '800px',
  primary: '#0079B1',
  primaryText: '#888',
  primaryHeadline: '#222',
  secondaryHeadline: '#616161',
  secondaryText: '#666',
}

theme.bannerBackground = rgba(theme.primary, 0.8)

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

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

const Content = styled.div``
Content.propTypes = {
  children: PropTypes.node,
}

const Template = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header logo={LogoMe} />
      <Content className="main-content">{children()}</Content>
      <Footer />
    </Container>
  </ThemeProvider>
)
Template.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Template
