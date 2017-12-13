
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.padding} 0px;
  background-color: ${props => props.backgroundColor};
`

export default (props) => (

  <Wrapper padding={props.padding}>
    {props.children}
  </Wrapper>

)
