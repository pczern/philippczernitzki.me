import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  & > *{
    width: ${props => (100/props.cols)}%;
  }
  display: flex;
  align-items: center;
  padding: ${props => props.padding};
`

export default (props) => {
  return (
    <Wrapper {...props}>{props.children}</Wrapper>
  )
}
