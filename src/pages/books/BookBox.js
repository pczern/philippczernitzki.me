import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Book = styled.img`
  width: 30%;
  height: auto;
  align-self: center;
`
const Description = styled.figcaption`
  padding-left: 5%;
  width: 70%;
  line-height: 1.7;
`



export default (props) => (
  <Wrapper>
    <Book src={props.src} />
    <Description>{props.children}</Description>
  </Wrapper>
)
