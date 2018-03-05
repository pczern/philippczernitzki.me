import React from 'react';

import BoxedContainer from './BoxedContainer';
import styled from 'styled-components';

const InnerContainer = styled.div`
  max-width: ${props => props.theme.blogWidth}
`


export default (props) => (
  <BoxedContainer>
    <InnerContainer>
      {props.children}
    </InnerContainer>
  </BoxedContainer>
)
