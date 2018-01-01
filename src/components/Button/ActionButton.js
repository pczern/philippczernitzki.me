
import React from 'react';
import styled from 'styled-components';



const ActionButton = styled.button`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.primary};
  display: inline-block;
  color: #FFF;
  padding: 0.9em 3.75%;
  font-size: 0.98em;
  border: none;
  cursor: pointer;
  border-radius: 0.2em;
  font-weight: 300;
  letter-spacing: 1px;
`

export default ActionButton;
