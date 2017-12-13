import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;

`
const InnerWrapper = styled.div`
  max-width:  ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;


`


export default (props) => (
  <Wrapper>
    <InnerWrapper>

    </InnerWrapper>
  </Wrapper>
)
