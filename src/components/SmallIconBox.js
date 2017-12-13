

import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';


const Wrapper = styled.figure`
text-align: center;
`

const StyledIcon = styled(Icon)`
  font-size: 2em;
  color: #121212;
  width: 100%;
  margin-bottom: 0.5em;

`;

const Caption = styled.figcaption`
line-height: 1.8;
font-size: 1.15em;
color: ${props => props.theme.secondaryText};
`

export default (props) => (

  <Wrapper className={props.className}>
    <StyledIcon src={props.icon} />
    <Caption>{props.children}</Caption>
  </Wrapper>

)
