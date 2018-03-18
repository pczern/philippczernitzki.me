import styled from 'styled-components'

const BoxedContainer = styled.div`
  max-width: ${props =>
    props.maxWidth ? props.maxWidth : props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => (props.padding ? props.padding : '0')};
  background-color: ${props => props.backgroundColor};
  text-align: ${props => (props.align ? props.align : 'left')};
`

export default BoxedContainer
