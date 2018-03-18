import styled from 'styled-components'

const TextBox = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: ${props => props.theme.secondaryHeadline};
    font-weight: 300;
  }
  p {
    color: ${props => props.theme.primaryText};
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 1em;
  }
`

export default TextBox
