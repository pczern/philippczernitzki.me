import styled, { ThemeProvider } from 'styled-components';



const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: 0px;
`
export default Content;
