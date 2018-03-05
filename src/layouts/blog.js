// import React from 'react'
// import Link from 'gatsby-link'
// import styled, { ThemeProvider } from 'styled-components';
// import LogoMe from '../images/me.png';
// import Header from '../containers/Header';
// import Footer from '../containers/Footer';
// import Article from '../containers/Article';
//
//
// const theme = {
//   main: 'mediumseagreen',
//   background: "rgb(0, 0, 0)", //"rgb(0, 234, 255)",
//   maxWidth: "1100px",
//   blogWidth: "800px",
//   primary: "#0079B1",
//   primaryText: "#888",
//   primaryHeadline: "#222",
//   secondaryHeadline: "#616161",
//   secondaryText: "#666",
// }
//
// const Container = styled.div`
// height: 100%;
// `;
//
//
//
// class Template extends React.Component {
//   render() {
//     const { location, children } = this.props
//     let header
//
//     let rootPath = `/`
//     if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
//       rootPath = __PATH_PREFIX__ + `/`
//     }
// 
//
//
//
//     return (
//       <ThemeProvider theme={theme}>
//
//         <Container>
//           <Header logo={LogoMe}/>
//           <Article>
//             {children()}
//           </Article>
//           <Footer />
//         </Container>
//       </ThemeProvider>
//     )
//   }
// }
//
// export default Template
