
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`;
  padding: ${props => props.padding} 0px;
`

export default (props) => (

  <Wrapper padding={props.padding}>
    {props.children}
  </Wrapper>

)
